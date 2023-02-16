


const getArgs = (args) =>{
	const res ={}
	const [executer, file, ...rest] = args; //arr of console command from process.argv //1,2 skip (executer,file)
	rest.forEach((value,index,arr) => {    //value = -s, -h,else
		let firstChar = arr[index].charAt(0)
		if (firstChar == "-"){
			res[value.slice(1)]=true
			
		}else if (firstChar){
			res[arr[index-1].slice(1)] = arr[index]
		}
		
	});
return res;
}

export {getArgs}