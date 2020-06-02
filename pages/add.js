import React, {Component} from 'react';
import Layout from '../components/Layout';
import {Form, Container, Message} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import passwordmanager from '../ethereum/passwordmanager';

class Add extends Component{
    state = {
        loading: false,
        error: false,
        email:'',
        pwd:'',
        msg:''
    };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = async () => {
     
    if(this.state.pwd.length>3 && this.state.email && this.state.email.includes('@') && this.state.email.includes('.com')){
        try{
            console.log('Try:'+this.state.email);
            this.setState({
                loading: true
            });
            const accounts = await web3.eth.getAccounts();
            await passwordmanager.methods.addPassword(this.state.email, this.state.pwd).send({
                  from: accounts[0]
              });
        }
        catch(err){
            this.setState({
                error: true,
                msg: err.message
            });
            console.log('Catch:'+this.state.email);
        }
        finally{
            this.setState({ 
                email: '', 
                pwd: '' ,
                loading:false});
        }
        console.log('Finally:'+this.state.email);
    }
    else{
        this.setState({error:true, msg: 'Incorrect Username/Password'});
        console.log('Else:'+this.state.email);
    }
  }
    render(){
        const { email, pwd } = this.state

        return (
            <Layout>
                    <Container>
                        <center>
                        <Form inverted onSubmit={this.handleSubmit} >
                        
                        <Form.Input
                            label='Email ID'
                            name='email'
                            placeholder='abc@gmail.com'
                            value={email}
                            onChange={this.handleChange}
                            width={7}
                        />
                        <Form.Input
                            label='Password'
                            name='pwd'
                            value={pwd}
                            onChange={this.handleChange}
                            width={7} 
                        />
                        
                        <Form.Button loading={this.state.loading} content='Submit' />
                        </Form>
                        {this.state.error == true ? 
                        <Message compact
                                error
                                header='Oops!'
                                content={this.state.msg}
                            />
                        : null }
                        
                        </center>
                    </Container>
                
            </Layout>
        );
    }
}
export default Add;