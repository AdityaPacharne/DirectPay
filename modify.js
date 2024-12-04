const fs = require('fs');
const path = require('path');

const browserJsPath = path.join(__dirname, 'browser.js');

const args = process.argv.slice(2);
if (args.length !== 1 || isNaN(args[0])) {
    console.error('Please provide a valid number for the predefinedAmount');
    process.exit(1);
}

const newPredefinedAmount = parseInt(args[0], 10);

fs.readFile(browserJsPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const updatedData = data.replace(/const predefinedAmount = \d+;/, `const predefinedAmount = ${newPredefinedAmount};`);

    fs.writeFile(browserJsPath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
        } else {
            console.log(`Successfully updated predefinedAmount to ${newPredefinedAmount}`);
        }
    });
});

