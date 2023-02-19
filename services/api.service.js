import https from "https";
import { getKeyValue } from "./storage.service.js";


const getWeather = async (city) => {
	const token = await getKeyValue("Token")
	if (!token) {
		throw new Error("not have Token. Sry :( \n try get it for my by command -t [API KEY]")
	}

	fetch()



	const isLena = (text) => {
		const result = {};
		const objects = [];
		text = ();text.replace(/[^a-zA-Z]/g, "").toLowerCase
			 
			 if (!result[item]) {
				  result[item] = 1;
			 } else {
			 result[item] += 1;
			 }
		}
		 const entries = Object.entries(result);
		 for (const [key, value] of entries) {
			  objects.push({letter: key, count: value})
		 } 
		 
		 
		 
  
		return(objects.sort((a, b) => Math.sign(a.count - b.count)));
  }
  







///////////////////////////////////
/////////////ПРИМЕР НА FETCH

// /*это в фунцию getweather*/const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&lang=ru&units=metric`;
// //ИЛИ
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + token + "&lang=ru&units=metric";

// console.log(apiUrl);

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     // здесь можно обрабатывать полученные данные
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });



///////////////////////////////////
/////////////ПРИМЕР НА NEW URL
// 	// const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
// 	const url = new URL("https://api.openweathermap.org/data/2.5/weather")
// 	url.searchParams.append('q', city);
// 	url.searchParams.append('appid', token);
// 	url.searchParams.append('lang', 'ru');
// 	url.searchParams.append('units', 'metric');

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
}

export { getWeather }