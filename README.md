<h1 align="center">Welcome to generate-react-component-cli 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/generate-react-component-cli" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/generate-react-component-cli.svg">
  </a>
  <a href="https://github.com/stanislawsztrajt/generate-react-component-cli#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/stanislawsztrajt/generate-react-component-cli/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/stanislawsztrajt/generate-react-component-cli/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/stanislawsztrajt/generate-react-component-cli" />
  </a>
</p>

> Quickly create a react component with command line

### 🏠 [Homepage](https://github.com/stanislawsztrajt/generate-react-component-cli#readme)

## Install

```sh
npm i -g generate-react-component-cli
```

## Usage

```sh
grccli
```

After typing "grccli" the language selection will be displayed(the language selection is one-time only) after that the application only asks you what you want the componoent to be called and where you want it to be located. After that the component will be created!

It will generate (E.g for component name task-item and path src/features):
Folder: src/features/task-item;
File: src/features/task/task-item.tsx'
File: src/features/task/use-task-item.ts (or Task.hook.ts, it depends if folder and file name is kebab case or no)'
File: src/features/task/task-item.test.tsx'
File: src/features/task/index.ts'

## Author

👤 **Stanisław Sztrajt**

* Github: [@stanislawsztrajt](https://github.com/stanislawsztrajt)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/stanislawsztrajt/generate-react-component-cli/issues). You can also take a look at the [contributing guide](https://github.com/stanislawsztrajt/generate-react-component-cli/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Stanisław Sztrajt](https://github.com/stanislawsztrajt).<br />
This project is [MIT](https://github.com/stanislawsztrajt/generate-react-component-cli/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_