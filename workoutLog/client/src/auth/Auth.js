import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Signup from './Signup'
import Login from './Login'

const Auth =(props)=>{ //Functional component, has no state. We add props here.
    return(
        <Container>
            <Row>
                <Col md='6'>
                    <Signup setToken={props.setToken}/> 
                </Col>
                <Col md='6'>
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

//setToken={props.setToken} -> setToken = prop passed down; props = tethers to the props above; setToken = accesses properties sent down from App.js ( <Auth setToken={this.setSessionState}/> )

export default Auth