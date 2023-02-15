#!/usr/bin/env node
import {getArgs} from "./helpers/args.js"

const initCLI = () =>{
	const args = getArgs(process.argv) // PROCESS.ARGV == " ["executer(node)"] ,
												//  [File dir] , [first commans like -x] , [...] "
	if(process.argv.length>2){
	console.log("args =", args)}
	if (args.s){
		console.log("-s access", args.s)
	}
}
initCLI()