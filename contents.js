function camelize(str){
  let arr = str.split('-');
  let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
  let capitalString = capital.join("");

  return capitalString.charAt(0).toUpperCase() + capitalString.slice(1);
}

const nameInNotKebabCase = (name) => {
  const isNameIsKebabCase = name.split('').every(letter => {
    if (letter === '-') return true
    return letter !== letter.toUpperCase()
  })

  if(isNameIsKebabCase) {
    return camelize(name)
  }

  return name
}

const componentContent = (name) => {
  const notKebabCase = nameInNotKebabCase(name)
  return `import React, { FC } from 'react'

const ${notKebabCase}: FC = () => {
  return(
    <>
      ${notKebabCase}
    </>
  )
}

export default ${notKebabCase}
  `
}

const hookContent = (name) => {
  const notKebabCase = nameInNotKebabCase(name)

  return `const use${notKebabCase} = () => {
  return {}
}

export default ${notKebabCase}
  `
}

const indexContent = (name) => `import { default } from "./${name}"`


const testContent = (name) => {
  const notKebabCase = nameInNotKebabCase(name)
  
  return `import { render } from '@testing-library/react';
import ${notKebabCase} from './${name}';

test('should render ${notKebabCase}', () => {
  const { getByText } = render(<${notKebabCase} />);

  expect(getByText('')).toBeInTheDocument();
});
  `
}

module.exports = {
  componentContent,
  hookContent,
  indexContent,
  testContent
}