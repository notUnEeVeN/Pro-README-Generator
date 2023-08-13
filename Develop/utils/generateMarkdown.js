// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'ISC':
          return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      case 'GPL-3.0':
          return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      case 'Apache-2.0':
          return '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      default:
          return '';
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return '[License: MIT](https://opensource.org/licenses/MIT)';
      case 'ISC':
          return '[License: ISC](https://opensource.org/licenses/ISC)';
      case 'GPL-3.0':
          return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache-2.0':
          return '[License: Apache](https://opensource.org/licenses/Apache-2.0)';
      default:
          return '';
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
      return `## License

This project is licensed under the ${license} license. For more information, refer to the linked license document: ${renderLicenseLink(license)}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}

${renderLicenseSection(data.license)}

## Contributing 

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, reach out to [${data.github}](https://github.com/${data.github}) or [email me](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;