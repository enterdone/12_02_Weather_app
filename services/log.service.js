
import chalk from "chalk"

const printError = (error) => {
	console.log(chalk.bgRed('ERROR') + " " + error);
}

const printSuccess = (message) => {
	console.log(chalk.bgGreen('SUCCESS') + " " + error);
}


const printHelp = () => {
	console.log(`${chalk.bgRCyan('HELP') }
	Без параметров - вывод погоды 
	-s [CITY] для установки города
	-h для вывода помощи 
	-t [API_KEY] для сохраннения токена
	`);
} 

export { printError, printSuccess, printHelp}