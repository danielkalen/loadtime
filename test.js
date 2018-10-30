import test from 'ava'
import fs from 'fs-jetpack'
import loadtime from './'
const TARGET = 'express'

const clear = ()=> fs.removeAsync(`./node_modules/${TARGET}`)
test.before(clear)
test.after(clear)

test(async (t)=> {
	t.falsy(await fs.existsAsync(`./node_modules/${TARGET}`))

	const result = await loadtime(TARGET)

	t.truthy(await fs.existsAsync(`./node_modules/${TARGET}`))
	t.true(result > 10)
})