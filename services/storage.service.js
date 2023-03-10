import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

const filePath = join(homedir(), "weater-data.json")

const saveKeyValue = async (key, value) => {
	let data = {}
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath)
		data = JSON.parse(file)
	}

	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath)
		const data = JSON.parse(file)
		console.log(data[key])
		return data[key];
	}
	return undefined;
};

const isExist = async (path) => { // если путь существует
	try {
		await promises.stat(path);
		return true
	} catch (error) {
		return false
	}
}

export { saveKeyValue, getKeyValue };