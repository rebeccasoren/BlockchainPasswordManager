import web3 from './web3';
import PasswordManager from './build/PasswordManager.json';
import addr from './address';
const instance = new web3.eth.Contract(
        JSON.parse(PasswordManager.interface), 
        addr);
//address of contract
export default instance;