const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// fs.mkdir('project', {recursive: true}, (err) => {
//     if (err) throw err;
//     console.log('project directory is created asynchronously');
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '<h1>Hello World</h1>');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log('Something went wrong');
    console.log(e);
}