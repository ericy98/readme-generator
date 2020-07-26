// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contribution](#contribution)

  * [Tests](#tests)

  * [Questions](#questions)

  ### Installation:

  ${data.installation}

  ### Usage:

  ${data.usage}

  ### License:

  ${data.license}

  ### Contribution:

  ${data.contribution}

  ### Tests:

  ${data.tests}

  ### Questions:
  If you have any questions please contact at ${data.email}. To see more repositories checkout [${data.github}](https://github.com/${data.github}/)!
  

`;
}

module.exports = generateMarkdown;
