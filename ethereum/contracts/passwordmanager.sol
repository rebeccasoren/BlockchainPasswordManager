pragma solidity ^0.4.17;

contract PasswordManager{
    struct Password{
        string email;
        string pwd;
    }
    address public manager;
    Password[] public passwords;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    function PasswordManager() public {
        manager=msg.sender;
    }
    
    function addPassword(string email, string pwd) public restricted{
        Password memory newPassword = Password({
            email: email,
            pwd: pwd
        });
        passwords.push(newPassword);
    }
    
    function updatePassword(uint index, string pwd) public restricted{
        Password storage password = passwords[index];
        password.pwd = pwd;
    }
    
    function viewPassword(uint index) public restricted view returns (string){
        Password storage password = passwords[index];
        return(password.pwd);
    }
    
    function viewEmailID(uint index) public restricted view returns (string){
        Password storage password = passwords[index];
        return(password.email);
    }
    
    function deletePassword(uint index) public restricted {
        delete passwords[index];
    }
    
    function getPasswordLength() public view returns (uint) {
        return passwords.length;
    }
}