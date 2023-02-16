#!/usr/bin/env node
import {getArgs} from "./helpers/args.js"
import {   printError, printSuccess, printHelp } from "./services/log.service.js"
import {saveKeyValue, getKeyValue} from "./services/storage.service.js"

const initCLI = () =>{
	const args = getArgs(process.argv) // PROCESS.ARGV == " ["executer(node)"] ,
												//  [File dir] , [first commans like -x] , [...] "
	if(process.argv.length>2){
	console.log("args =", args)}
	if (args.s){
		console.log("-s access", args.s)
saveKeyValue("token", args.s)
	}
	if (args.t){
		saveKeyValue("token", args.t)
	}
	if (args.g){
		getKeyValue("token")
	}
}
initCLI()