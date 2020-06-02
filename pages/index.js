import React, {Component} from 'react';
import passwordmanager from '../ethereum/passwordmanager';
import Layout from '../components/Layout';
import {Header} from 'semantic-ui-react';
class PasswordManagerIndex extends Component {
    state={
        manager: ''
    };

    async componentDidMount(){
        const manager = await passwordmanager.methods.manager().call();
        this.setState({
            manager
        });
    }
    
    render(){
        return (
            <Layout>
                <Header
                    content='Welcome'
                    inverted
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '3em',
                        }}
                />
                <Header
                    content={this.state.manager}
                    inverted
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '0.5em',
                        }}
                />
                
            </Layout>
        );
    }
}
export default PasswordManagerIndex;