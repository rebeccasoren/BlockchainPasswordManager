import React, {Component} from 'react';
import Layout from '../components/Layout';
import passwordmanager from '../ethereum/passwordmanager';
import {Table, Container} from 'semantic-ui-react';
import DetailRow from '../components/DetailRow';

class View extends Component{
    static async getInitialProps() {
        const passwordLength = await passwordmanager.methods.getPasswordLength().call();
        const passwords = await Promise.all(
            Array(parseInt(passwordLength)).fill().map((element, index) => {
                return passwordmanager.methods.passwords(index).call()
            })
        );
        
        return {passwordLength, passwords};
    }

    renderRow(){
        return this.props.passwords.map((password, index)=>{
            return <DetailRow 
                id={index}
                key={index}
                password={password}/>;
        });
    }
    render(){
        const {Header, Row, HeaderCell, Body} =Table;
        return(
            <Layout>
                <Container>
                <Table>
                <Header>
                    <Row>
                        <HeaderCell width={4}>Email</HeaderCell>
                        <HeaderCell width={4}>Password</HeaderCell>
                        <HeaderCell width={3}></HeaderCell>
                       
                    </Row>
                </Header>

                <Body>
                    {this.renderRow()}
                </Body>

            </Table>
                </Container>
            
            </Layout>
                
          
        );
    }

}

export default View;