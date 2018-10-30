const Path = require('path')
const fs = require('fs-jetpack')
const execa = require('execa')
const timespan = require('time-span')
const BUILT_IN = [
	'assert','zlib','buffer','console','constants',
	'crypto','domain','events','http','https','os',
	'path','process','punycode','querystring',
	'string_decoder','stream','timers','tty','url',
	'util','vm','cluster','child_process','dgram',
	'dns','fs','module','net','readline','repl'
]


const measure = async (target)=> {
	const exists = await fs.existsAsync(Path.join(__dirname, 'node_modules', target))
	const isBuiltin = BUILT_IN.includes(target)

	if (!exists && !isBuiltin) {
		await install(target)
	}

	const end = timespan()
	require(target)
	const result = end()
	return result
}


const install = (target)=> {
	const options = {silent:true, stdio:'ignore', cwd:__dirname}

	console.log(`Installing ${target}`)

	return execa('npm', ['install', '--no-save', '--no-purne', target], options)
}


module.exports = measure