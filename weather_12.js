#!/usr/bin/env node
//C:\Users\Max\weater-data.json tokens here
import { getArgs } from "./helpers/args.js" //process.argv split to {}
import { printError, printSuccess, printHelp } from "./services/log.service.js"
import { saveKeyValue, getKeyValue } from "./services/storage.service.js"
import {getWeather} from "./services/api.service.js"

const saveToken = async (token) =>{
	if(!token.length){ 	//token 3faaaee5c8425b7a88767f4e2f07f593
		printError("TAKE TOKEN PLS!")
		return 
	}
	try {
		await saveKeyValue("Token", token);
		printSuccess("Token was saved :) ")
	} catch (e) {
		printError(e.message)
	}
	getWeather('moscow')
}






const initCLI = () => {
	const args = getArgs(process.argv) // PROCESS.ARGV == " ["executer(node)"] ,
	//  [File dir] , [first commans like -x] , [...] "
	if (process.argv.length > 2) {
		console.log("process.argv[..2,3,..n] =", args)
	}
	if (args.s) {
		// console.log("-s SUCCESS", args.s)
		printSuccess("-s success ", +args.s )
		saveKeyValue("s args? Lol?", args.s)
	}
	if (args.t) {
		saveToken(args.t)
	}
	if (args.g) {
		getKeyValue("Token")
	}
	if (args.h) {
		printHelp()
	}
}
initCLI()