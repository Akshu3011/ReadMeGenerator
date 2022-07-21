// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  let licenseType= license;
  let licenseBadge='';
  if(licenseType === 'MIT') {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    licenseBadge = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'Apache License 2.0') {
    licenseBadge = ` ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    licenseBadge='';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType= license;
  let licenseFile='';
  if(licenseType === 'MIT') {
    licenseFile = 'https://opensource.org/licenses/MIT';
  } else if (licenseType === 'GPLv3') {
    licenseFile = 'https://www.gnu.org/licenses/agpl-3.0';
  } else if (licenseType === 'Apache License 2.0') {
    licenseFile = 'https://opensource.org/licenses/Apache-2.0';
  } else {
    licenseFile='';
  }
  return licenseFile;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 const lic=license;
 const licenseLink=renderLicenseLink(license);
  if(license!='None')
  {
    return ` ## Licenses
    This project uses the ${lic} license. More info about licenses can be found [here](${licenseLink})`
  
  }
  else
    return '';
}

const formatting="`";
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const badge=renderLicenseBadge(data.licenses);
  
  const licenseSection=renderLicenseSection(data.licenses);


  return  `
  # ${data.title}
 
  ${badge}

  ## Overview
  ${data.overview}

  ## Description
  ${data.desc}
  
  ## Table of Contents
  
1. [Installation](#installation)
2. [Usage](#usage)
3. [Licenses](#licenses)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage
  ${data.usage}

 ${licenseSection}

  ## Contributing
  This project is open for contribution but please initiate an issue for any significant changes. 
  
  ## Tests
  To run tests, run the following command: 
  ${formatting} 
  ${data.tests}
  ${formatting} 
  

  ## Questions
  The developer can be reached through [Email](${data.email}) or contacted through 
  [Github](https://github.com/${data.github}).

  `;

  
}

module.exports = generateMarkdown;
