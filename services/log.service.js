
import chalk from "chalk"
import dedent from "dedent-js"

const printError = (error) => {
	console.log(chalk.bgRed('ERROR') + " " + error);
}

const printSuccess = (message) => {
	console.log(chalk.bgGreen('SUCCESS') + " " + message);
}


const printHelp = () => {
	console.log(dedent`${chalk.bgCyan('     HELP                  ')}
	${chalk.bgCyan('*')}Без параметров - вывод погоды 
	${chalk.bgCyan('*')} -s [CITY] для установки города
	${chalk.bgCyan('-h')} -h для вывода помощи 
	${chalk.bgCyan('*')} -t [API_KEY] для сохраннения токена
	 `);
} 

export { printError, printSuccess, printHelp}