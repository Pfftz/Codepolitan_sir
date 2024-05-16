const fs = require('fs');

fs.mkdir('project', {recursive: true}, (err) => {
    if (err) throw err;
    console.log('project directory is created');
});