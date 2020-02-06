// @flow
// eslint-disable-next-line cup/no-undef
module.exports = function(plop) {
  // page generator
  plop.setGenerator('Generate Component', {
    description: 'react functional atomic design component generator',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        choices: ['atom', 'organism', 'molecule'],
        message: 'Select component type',
      },
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
    ],
    actions: () => {
      return [
        {
          type: 'add',
          path: 'src/components/{{componentType}}s/{{kebabCase name}}/index.js',
          templateFile: 'plop-templates/component/index.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            'src/components/{{componentType}}s/{{kebabCase name}}/{{kebabCase name}}.story.js',
          templateFile: 'plop-templates/component/componentName.story.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            'src/components/{{componentType}}s/{{kebabCase name}}/__tests__/{{kebabCase name}}.node.js',
          templateFile: 'plop-templates/component/componentName.node.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'append',
          path: 'src/components/{{componentType}}s/index.js',
          template: "export * from './{{kebabCase name}}';",
        },
      ];
    },
  });

  // page generator
  plop.setGenerator('Generate Page', {
    description: 'react functional page generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter page name please',
      },
      {
        type: 'input',
        name: 'subPath',
        message:
          'Optional: sub path in page you want this file to be generated in example /auth/others. Note it must start with a leading slash and end with none',
      },
    ],
    actions: ({subPath}) => {
      let newPath = '../';
      if (subPath) {
        console.log('subPath', subPath)
        const d = subPath.split('/');
        for (let i = 0; i < d.length; i++) {
          if (d[i].length > 0) {
            newPath = newPath.concat('../');
          }
        }
        console.log('newPath', newPath);
      }

      return [
        {
          type: 'add',
          path: 'src/pages{{subPath}}/{{kebabCase name}}.page.js',
          templateFile: 'plop-templates/pages/pageName.page.js.hbs',
          data: {
            newPath,
          },
          abortOnFail: true,
        },
        {
          type: 'add',
          path: 'src/content/{{kebabCase name}}/index.js',
          templateFile: 'plop-templates/content/index.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: 'src/content/{{kebabCase name}}/{{kebabCase name}}.content.js',
          templateFile: 'plop-templates/content/contentName.content.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path:
            'src/content/{{kebabCase name}}/__tests__/{{kebabCase name}}-content.node.js',
          templateFile: 'plop-templates/content/contentName.node.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'append',
          path: 'src/content/index.js',
          template: "export * from './{{kebabCase name}}';",
        },
      ];
    },
  });
};
