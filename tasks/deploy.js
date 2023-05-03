const shelljs = require('shelljs')

function generateStaticFiles() {
    shelljs.exec('npm run generate')
}

function copyAssets() {
    shelljs.cp('CNAME', './dist')
}   

function deploySurge() {
    shelljs.exec('surge ./dist')
}

function build() {
    generateStaticFiles()
    copyAssets()
    deploySurge()
}

build()
