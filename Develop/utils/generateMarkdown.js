// function to generate markdown for README
function generateMarkdown(data) {

  // return the data 
  // format custom data to display on page to insert the data with template literals
  return `# ${data.title}

  ## Project Description: 
  ${data.description}

  ## Installation: 
  ${data.requirements}
  
  ## Use:
  ${data.usage}

  ## Collaborators:
  ${data.credits}

  ## License:
  ${data.license}
  `
};

module.exports = generateMarkdown;
