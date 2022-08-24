let fs = require('fs')
let path = require('path')
let attractionsPath = path.join(__dirname, '../web-app/src/attractions')

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function readDir(dir) {
    try {
        let files = fs.readdirSync(dir)

        console.log('files', files);

        for (const file of files) {
            if (file.match(/\.svelte$/)) {
                fs.rename(`${dir}/${file}`, `${dir}/${capitalizeFirstLetter(file)}`, e => {
                })
            } else {
                readDir(`${dir}/${file}`)
            }
        }
    } catch (e) {
        console.log(`${dir} is not a directory`)
    }
}

readDir(attractionsPath)
