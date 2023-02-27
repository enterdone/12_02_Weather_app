import https from "https";
import { getKeyValue } from "./storage.service.js";


const getWeather = async (city) => {
	const token = await getKeyValue("Token")
	if (!token) {
		throw new Error("not have Token. Sry :( \n try get it for my by command -t [API KEY]")
	}





  







///////////////////////////////////
/////////////ПРИМЕР НА FETCH

// /*это в фунцию getweather*/const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&lang=ru&units=metric`;
//ИЛИ
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + token + "&lang=ru&units=metric";

console.log(apiUrl);

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // здесь можно обрабатывать полученные данные
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}

///////////////////////////////////
// ///////////ПРИМЕР НА NEW URL
// const getWeather = async (city) => {
// 	const token = await getKeyValue("Token")
// 	// const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
// 	const url = new URL("https://api.openweathermap.org/data/2.5/weather")
// 	url.searchParams.append('q', city);
// 	url.searchParams.append('appid', token);
// 	url.searchParams.append('lang', 'ru');
// 	url.searchParams.append('units', 'metric');


// 	console.log("console log url"+url)
// 	return new Promise((resolve, reject) => {
// 		https.get(url, (response) => {
// 		  let res = '';
  
// 		  response.on('data', (chunk) => {
// 			 res += chunk;
// 		  });
  
// 		  response.on('end', () => {
// 			 resolve(res);
// 			 console.log("console.log(res)"+res)
// 		  });
  
// 		  response.on('error', (error) => {
// 			console.log("console.log(\"WTF??\"+error)\n\\n"+error)
// 			 reject(error);
// 		  });
// 		});
// 	 });
//   }

// console.log(url)
// 	https.get(url, (response) => {
// 		let res = '';
// 		response.on('data', (chunk) => {
// 			res += chunk;
// 		})

// 		response.on('end', () => {
// 			console.log(res)
// 		})

// 		response.on("error", (error)=>{ console.log("WTF??"+error)})
// 	})
// }

export { getWeather }