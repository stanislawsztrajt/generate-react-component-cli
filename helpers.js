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
  global.programingLanguage = fileExtension
  return fileExtension
}

const readFileExtension = () => {
  if (fs.existsSync(programingLanguagePath)) {
    return String(fs.readFileSync(programingLanguagePath))
  }
}

const logInfos = () => {
  console.log("\x1b[36m", 'It will generate (E.g for component name task-item and path src/features): ');
  console.log(' Folder: src/features/task-item');
  console.log(' File: src/features/task/task-item.tsx');
  console.log(' File: src/features/task/use-task-item.ts (or Task.hook.ts, it depends if folder and file name is kebab case or no)');
  console.log(' File: src/features/task/task-item.test.tsx');
  console.log(' File: src/features/task/index.ts');
}

module.exports = {
  fetchProgramingLanguage,
  readFileExtension,
  logInfos
}