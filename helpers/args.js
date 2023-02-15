


const getArgs = (args) =>{
	const res ={}
	const [executer, file, ...rest] = args; //arr of console command from process.argv //1,2 skip (executer,file)
	rest.forEach((value,index,arr) => {    //value = -s, -h,else
		let firstChar = value.charAt(0)
		if (firstChar == "-"){
			res[value.slice(1)]=true
			
		}
		
	});
return res;
}

export {getArgs}