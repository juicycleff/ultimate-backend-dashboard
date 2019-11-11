const componentGenerator = {
  description: 'Create a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name?',
      default: 'Button',
    },
    {
      type: 'confirm',
      name: 'stateless',
      message: 'Is it a Stateless Component?',
      default: 'y',
    }
  ],
  actions: ({ stateless }) => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/index.tsx',
        templateFile: './index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: stateless ? './componentName.sfc.tsx.hbs' : './componentName.class.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/styled/{{kebabCase name}}.styled.tsx',
        templateFile: './componentName.styled.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: './componentName.test.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: './componentName.story.tsx.hbs',
        abortOnFail: true,
      },
      // Modify the module file to inject created model.
      // This is basically RegExp replacement.
      {
        type: 'modify',
        path: '../../src/components/index.tsx',
        pattern: /(\/\/ IMPORT MODULE FILES)/g,
        template: "$1\nimport {{properCase name}} from './{{kebabCase name}}';",
      },
      {
        type: 'modify',
        path: '../../src/components/index.tsx',
        pattern: /(\/\/ EXPORT MODULE)/g,
        template: "$1\n {{properCase name}},",
      },
    ];

    return actions;
  },
};

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
};
