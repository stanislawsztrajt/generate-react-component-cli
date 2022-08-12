const inquirer = require('inquirer');
const fs = require('fs');
const contents = require('./contents')
const helpers = require('./helpers')

const createReactComponent = async () => {
  console.log("\x1b[32m", 'React CLI components', "\x1b[37m");
  let fileExtension = helpers.readFileExtension()
  if (!fileExtension) {
    fileExtension = await helpers.fetchProgramingLanguage()
  }
  helpers.logInfos()

  const { name, path } = await inquirer.prompt([
    {
      name: 'name',
      message: 'Folder and file name:',
      default: 'name'
    },
    {
      name: 'path',
      message: 'Path of folder: ',
      default: './'
    },
  ])

  const isNameIsKebabCase = name.split('').every(letter => letter !== letter.toUpperCase())

  // creating folder and files
  fs.mkdirSync(`${path}/${name}`, { recursive: true }, (err) => {
    if (err) console.log('Wrong path!');
  })
  fs.writeFileSync(`${path}/${name}/index${fileExtension}`, contents.indexContent(name))
  fs.writeFileSync(`${path}/${name}/${name}${fileExtension}x`, contents.hookContent(name))
  fs.writeFileSync(`${path}/${name}/${name}.test${fileExtension}x`, contents.testContent(name))
  
  if (isNameIsKebabCase)
    fs.writeFileSync(`${path}/${name}/use-${name}${fileExtension}`, contents.componentContent(name))
  else
    fs.writeFileSync(`${path}/${name}/${name}.hook${fileExtension}`, contents.componentContent(name))

  // set green color
  console.log("\x1b[32m", 'Created!');
  // back to white color
  console.log("\x1b[37m");
}

createReactComponent()