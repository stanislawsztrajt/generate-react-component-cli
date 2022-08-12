const inquirer = require('inquirer');
const fs = require('fs');

const programingLanguagePath = './programing-language.txt'

const fetchProgramingLanguage = async () => {
  const { programingLanguage } = await inquirer.prompt([
    {
      type: 'list',
      name: 'programingLanguage',
      message: 'Select a programing language?',
      choices: ['javascript', 'typescript'],
    },
  ])

  const fileExtension = `${programingLanguage === 'javascript' ? '.js' : '.ts'}`

  fs.writeFileSync(
    'programing-language.txt',
    fileExtension
  )

  return fileExtension
}

const readFileExtension = () => {
  if (fs.existsSync(programingLanguagePath)) {
    return String(fs.readFileSync(programingLanguagePath))
  }
}

const logInfos = () => {
  console.log("\x1b[36m", 'It will generate (E.g for folder name task-item and path src/features): ');
  console.log(' Folder: src/features/task-item');
  console.log(' File: src/features/task/task-item.tsx');
  console.log(' File: src/features/task/use-task-item.ts');
  console.log(' File: src/features/task/index.ts');
}

module.exports = {
  fetchProgramingLanguage,
  readFileExtension,
  logInfos
}