
import chalk from "chalk"
import dedent from "dedent-js"

const printError = (error) => {
	console.log(chalk.bgRed('<ERROR>' + " " + error));
}

const printSuccess = (message) => {
	console.log(chalk.bgGreen('<SUCCESS>' + " " + message));
}


const printHelp = () => {
	console.log(dedent`${chalk.bgCyan('     HELP                  ')}
	${chalk.bgCyan('*')}Без параметров - вывод погоды 
	${chalk.bgCyan('*')} -s [CITY] для установки города
	${chalk.bgCyan('-h')} -h для вывода помощи 
	${chalk.bgCyan('*')} -t [API_KEY] для сохраннения токена
	 `);
} 

const printWeather = (...args) => {
	let colorData = {		1: "green", 2: "yellow", 3: "bgBlueBright"};
	let i = 1;
	for (let val of args) {
		console.log(`${chalk[colorData[i]](val)}`);
		i < 3 ? i++ : i = 1
	}
}

export { printError, printSuccess, printHelp,printWeather}