let fs = require('fs')
let path = require('path')
let filesPath = path.join(__dirname, '../web-app/src/material-design-icons')

let files = fs.readdirSync(filesPath)

for (const file of files) {
    if (file.match(/\.vue$/)) {
        let filePath = `${filesPath}/${file}`
        let content = fs.readFileSync(filePath).toString()
        let matches = content.match(/\sd="(.+)"/gm)
        let path = matches[0].trim().replace('d="', '').replace('"', '')
        console.log('path', path);

        let newContent = `<script>
    import Icon from "../lib/Icon.svelte"

    export let color
    export let size
</script>

<Icon path="${path}" {size} {color}/>
`
        fs.writeFileSync(filePath, newContent)
        let newName = file.replace('.vue', 'Icon.svelte')
        fs.renameSync(filePath, `${filesPath}/${newName}`)
    }
}
