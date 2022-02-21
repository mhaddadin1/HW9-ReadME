// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "[![License: APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-red.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None" || license === "") {
    return "";
  }

  return `
  This project is licensed under ${renderLicenseBadge(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## Description 
  ${data.description}

  ## Table of Contents:
  * [Description](./README#description)
  * [Installation](./README#installation)
  * [Usage](./README#usage)
  * [Contributing](./README#contribute)
  * [Tests](./README#tests)
  * [License](./README#license)
  * [Links to Repo and Pages](./README#links-to-application)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}
  

  ## Links to Application

  -Repo Link: ${data.link}

  <br>

  -Pages Link: ${data.pages}

  ## Questions

  ${data.email}
  
  
  `;
}

module.exports = generateMarkdown;
