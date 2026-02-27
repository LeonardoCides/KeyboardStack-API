const chalk = require('chalk');

function banner(){
    console.clear();
    const verde = chalk.green.bold;
    const ciano = chalk.cyan.bold;
    const amarelo = chalk.yellow;

    console.log(verde('==========================================================='));
    console.log(ciano(`
     _  _________     ______   ____     _     ____  ____  
    | |/ / ____\\ \\   / / __ ) / __ \\   / \\   |  _ \\|  _ \\ 
    | ' /|  _|  \\ \\ / /|  _ \\| |  | | / _ \\  | |_) | | | |
    | . \\| |___  \\ V / | |_) | |__| |/ ___ \\ |  _ <| |_| |
    |_|\\_\\_____|  |_|  |____/ \\____/_/   \\_\\|_| \\_\\____/ 
    `));
    console.log(verde('==========================================================='));
    console.log(`${amarelo('➜')}  ${chalk.bold('API Status:')}  ${chalk.green('ON')}`);
    console.log(`${amarelo('➜')}  ${chalk.bold('Local:')}       ${chalk.white('http://localhost:3000')}`);
    console.log(`${amarelo('➜')}  ${chalk.bold('Database:')}    ${chalk.magenta('Connected (MySQL)')}`);
    console.log(verde('==========================================================='));
    console.log(chalk.gray('  Aguardando requisições... (CTRL+C para parar)\n'));
};

module.exports = banner;
