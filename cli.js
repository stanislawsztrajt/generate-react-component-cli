#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const contents = require('./contents')
const helpers = require('./helpers')

const createReactComponent = async () => {
  console.log("\x1b[32m", 'Generate React Component CLI', "\x1b[37m");
  let fileExtension = helpers.readFileExtension()
  if (!fileExtension) {
    fileExtension = await helpers.fetchProgramingLanguage()
  }
  helpers.logInfos()

  const { name, path } = await inquirer.prompt([
    {
      name: 'name',
      message: 'Component name:',
      default: 'name'
    },
    {
      name: 'path',
      message: 'Path of component: ',
      default: './'
    },
  ])

  const isNameIsKebabCase = name.split('').every(letter => {
    if (letter === '-') return true
    return letter !== letter.toUpperCase()
  })

  // creating folder and files
  fs.mkdirSync(`${path}/${name}`, { recursive: true }, (err) => {
    if (err) console.log('Wrong path!');
  })
  // index.ts
  fs.writeFileSync(`${path}/${name}/index${fileExtension}`, contents.indexContent(name))

  // component.tsx
  fs.writeFileSync(`${path}/${name}/${name}${fileExtension}x`, contents.componentContent(name))

  // component.test.tsx
  fs.writeFileSync(`${path}/${name}/${name}.test${fileExtension}x`, contents.testContent(name))

  // use-component.ts or component.hook.ts
  if (isNameIsKebabCase)
    fs.writeFileSync(`${path}/${name}/use-${name}${fileExtension}`, contents.hookContent(name))
  else
    fs.writeFileSync(`${path}/${name}/${name}.hook${fileExtension}`, contents.hookContent(name))

  // set green color
  console.log("\x1b[32m", 'Created!');
  // back to white color
  console.log("\x1b[37m");
}

createReactComponent()