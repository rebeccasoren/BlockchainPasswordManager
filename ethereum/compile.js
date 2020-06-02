const path = require('path');
const solc = require('solc');
const fs = require ('fs-extra');
const buildPath = path.resolve(__dirname, 'build');
const pmPath = path.resolve(__dirname, 'contracts', 'passwordmanager.sol');
const source = fs.readFileSync(pmPath, 'utf8');
const output = solc.compile(source);

for (let contractName in output.contracts) {
    fs.outputJSONSync(
        path.resolve(buildPath, contractName.replace(':','') + '.json'),
        output.contracts[contractName]
    );
}