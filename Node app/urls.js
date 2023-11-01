

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const urls = [
  'http://rithmschool.com',
  'http://postgresql.com',
  'http://foozlemcblargh.com',
  'https://nodejs.org/api/console.html',
];

// Function to make a GET request to a URL and save the response to a file
async function saveHtmlToFile(url, filePath) {
  try {
    const response = await axios.get(url);
    fs.writeFileSync(filePath, response.data);
    console.log(`Saved HTML from ${url} to ${filePath}`);
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
  }
}

// Directory where you want to save the HTML files
const outputDirectory = 'html_files';

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Iterate over the URLs and save the HTML content to files
urls.forEach((url, index) => {
  const fileName = `file${index + 1}.html`;
  const filePath = path.join(outputDirectory, fileName);
  saveHtmlToFile(url, filePath);
});



