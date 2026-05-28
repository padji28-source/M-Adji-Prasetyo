const fs = require('fs');
const path = require('path');

function replaceColor(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceColor(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            content = content.replace(/indigo/g, 'blue');
            fs.writeFileSync(fullPath, content);
        }
    }
}
replaceColor('./src');
console.log('Done');
