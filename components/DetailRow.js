import React, {Component} from 'react';
import {Table, Button,  Input, Reveal, Segment, Message} from 'semantic-ui-react';
import passwordmanager from '../ethereum/passwordmanager';
import web3 from '../ethereum/web3';

class DetailRow extends Component {
    state ={
        updation: false,
        pwd: '',
        loading: false,
        error: false,
        msg: ''
    };
    onDelete = async () => {
        try{
            this.setState({
                loading: true
            });
            const accounts = await web3.eth.getAccounts();
            await passwordmanager.methods.deletePassword(parseInt(this.props.id)).send({
            from:accounts[0]
            });
            location.reload();
        }
        catch(err){
            this.setState({
                error: true,
                msg: err.message
            });
        }
    };
    
    onUpdate = async () => {
        if(this.state.pwd.length>3){
            this.setState({
                loading: true
            });
            
            try{
                const accounts = await web3.eth.getAccounts();
                await passwordmanager.methods.updatePassword(parseInt(this.props.id), this.state.pwd).send({
                    from:accounts[0]
                });
            }
            catch(err){
                this.setState({
                    error:true,
                    msg: err.message
                });
            }
            finally{
                this.setState({
                    loading: false,
                });
                location.reload();
            }
        }
        else{
            this.setState({
                error: true,
                loading: false,
                pwd:'',
                msg: 'Password should be more than 3 characters'
            });
        }    
    };
    
    render(){
        const {Row, Cell} = Table;
        return (
            this.props.password.email == '' ? null : (
            <Row>
                <Cell>{this.props.password.email}</Cell>
                <Cell>
                    <Reveal animated='move' instant>
                        <Reveal.Content visible>
                            <Segment inverted color="grey" 
                            content='*************'
                            />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Segment basic> {this.props.password.pwd}</Segment>
                        </Reveal.Content>
                    </Reveal>
                </Cell>
                <Cell>
                    {this.state.updation == true ? (
                        <Input placeholder="Enter Password" focus error={this.state.error}>
                                <input value={this.state.pwd} onChange={event => this.setState({pwd: event.target.value})}/>
                                <Button loading={this.state.loading} onClick={this.onUpdate}>Update</Button>
                        </Input>) : (
                    <span>
                        <Button id='up' onClick={() => this.setState({updation: true})}>Update</Button>
                        <Button loading={this.state.loading} onClick={this.onDelete}>Delete</Button>
                    </span>)}
                    {this.state.error == true ? (
                        <Message error compact>
                            <p>{this.state.msg}</p>
                        </Message>) : null}
                </Cell>
            </Row>)
        );
    }
}
export default DetailRow;