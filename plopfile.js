module.exports = function (plop) {
  plop.setGenerator('easing', {
    description: 'Create a new easing',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your easing name?',
        validate: isNotEmpty('name'),
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}.ts',
        templateFile: 'plop-templates/easing.ts'
      },
      {
        type: 'modify',
        path: 'src/index.ts',
        pattern: /(\/\/ easings)/g,
        template: '$1\nexport { {{ name }} } from \'./{{ name }}\''
      },
      {
        type: 'modify',
        path: 'README.md',
        pattern: /(## Functions)\n/g,
        template: '$1\n\n- {{ name }}',
      }
    ]
  })
}

function isNotEmpty(name) {
  return (value) => !(!value || value.trim() === '') || `${ name } is required!`
}