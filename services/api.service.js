import https from "https";
import { getKeyValue } from "./storage.service";


const getWeather = async (city) => {
	const token = await getKeyValue("Token")
	if(!token){
		throw new Error("not have Token. Sry :( \n try get it for my by command -t [API KEY]")
	}
// const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
const url = new URL("https://api.openweathermap.org/data/2.5/weather")
url.searchParams.append('q', city);
url.searchParams.append('appis', city);
url.searchParams.append('lang', 'ru');
url.searchParams.append('units' , 'metric');


https.get(url,(response)=>{
	let res = '';
	response.on('data', (chunk)=>{
		res+= chunk;
	})  

response.on('end', ()=>{
	console.log(res)
})

// response.on("error", (error)=>{ console.log("WTF??"+error)})
})
}

export {getWeather}