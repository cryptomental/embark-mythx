const shelljs = require("shelljs");

function isMythosInstalled() {
  return shelljs.test("-f", "node_modules/.bin/mythos");
}

function executeMythos(contractFilePath, contractName, mythxEthAddress, mythxPassword, logger) {
  shelljs.exec(`node_modules/.bin/mythos analyze ${contractFilePath} ${contractName} --mythxEthAddress=${mythxEthAddress} --mythxPassword=${mythxPassword}`,
    { silent: true }, function (code, stdout, stderr) {
      if (stderr) {
        logger.info(stderr);
      }
      logger.info(stdout);
    });
}

async function run(embark, compilationResult) {
  if (!isMythosInstalled()) {
    embark.logger.warn("Mythos not found! Plugin dependencies were not installed correctly.");
    return;
  }

  Object.keys(compilationResult.contracts).map((contractFilePath) => {
    Object.keys(compilationResult.contracts[contractFilePath]).map((contractName) => {
      embark.logger.info(`Requesting analysis of ${contractName} from ${contractFilePath}`);
      executeMythos(contractFilePath, contractName, embark.pluginConfig.mythxEthAddress, embark.pluginConfig.mythxPassword, embark.logger);
    });
  });

}

function register(embark) {
  embark.events.on("contracts:compiled:solc", run.bind(null, embark));
}

module.exports = register;
