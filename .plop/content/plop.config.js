const componentGenerator = {
  description: 'Create a new content component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Content name?',
      default: 'LoginContent',
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
        path: '../../src/content/{{kebabCase name}}/index.tsx',
        templateFile: './index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/content/{{kebabCase name}}/{{dotCase name}}.tsx',
        templateFile: stateless ? './componentName.sfc.tsx.hbs' : './componentName.class.tsx.hbs',
        abortOnFail: true,
      },
      // Modify the module file to inject created model.
      // This is basically RegExp replacement.
      {
        type: 'modify',
        path: '../../src/content/index.tsx',
        pattern: /(\/\/ IMPORT MODULE FILES)/g,
        template: "$1\nimport {{properCase name}} from './{{kebabCase name}}';",
      },
      {
        type: 'modify',
        path: '../../src/content/index.tsx',
        pattern: /(\/\/ EXPORT MODULE)/g,
        template: "$1\n {{properCase name}},",
      },
    ];

    return actions;
  },
};

module.exports = plop => {
  plop.setGenerator('page contents', componentGenerator);
};
