// import necessary files and inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes');
const generateSVG = require('./generateSVG');

// create command line class and constructors to run inquirer prompts
function CLI() {
    
  return inquirer
    .prompt([
      {
        message: "What shape would you like for your logo?",
        name: "shape",
        type: "list",
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        message: "What color would you like your shape to be? Use hexadecimal or color name!",
        name: "color",
        type: "input",
      },
      {
        message: "Enter a 3 letter monogram for your logo.",
        name: "logoText",
        type: "input",
        validate: function (value) {
          if (value.length === 3) {
            return true;
          } else {
            return 'Please enter 3 characters';
          }
        }
      },
      {
        message: "What color would you like the text to be on your logo? Use hexadecimal or color name!",
        name: "logoColor",
        type: "input",
      }
    ])
    .then((answers) => {
      // write the output
      const fileContents = generateSVG(answers);

      fs.writeFile(`logo.svg`, fileContents, (err) => {
        if (err) {
          console.error("Error writing file:", err);
        } else {
          console.log("Success!");
        }
      });
    });
}

// export CLI
module.exports = CLI;