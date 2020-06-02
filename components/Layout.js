import React from 'react';
import Head from 'next/head';
import { Menu, Segment, Container, Icon, Responsive} from 'semantic-ui-react';
import {Link} from '../routes';
export default props => {
    return (
        <div>
            <Head>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>
            <Segment inverted textAlign='center' style={{minHeight: '100vh',padding: '1em 0em'}}>
                <Menu inverted pointing secondary size='large'>
                    <Container>
                        <Link route='/'>
                            <Menu.Item>Mini Project</Menu.Item>
                        </Link>
                    
                        <Menu.Item position='right'>
                            <Responsive minWidth={425} maxwidth={2559}>
                                <Menu.Menu position='right'>
                                    
                                    <Link route='/add'>
                                        <Menu.Item>Add
                                            <Icon name='add circle' style={{paddingLeft: '5px'}}></Icon>
                                        </Menu.Item>
                                    </Link>
                                    
                                    <Link route='/view'>
                                        <Menu.Item>View 
                                            <Icon name='eye' style={{paddingLeft: '5px'}}></Icon>
                                        </Menu.Item>
                                    </Link>
                                
                                </Menu.Menu>
                            </Responsive>
                        </Menu.Item>       
                    </Container>
                </Menu>
                {props.children}
            </Segment>
        </div>
    );
};