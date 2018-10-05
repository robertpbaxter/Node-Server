import React,{Component} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
class Login extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <h6>Doggo ipsum floofs borkf lotsa pats maximum borkdrive, ruff. Ur givin me a spook woofer puggo shooberino, long doggo much ruin diet. Heckin good boys doge boofers pupperino the neighborhood pupper, doge he made many woofs wow very biscit. You are doing me the shock fat boi porgo I am bekom fat, very hand that feed shibe. clouds. </h6>
                <Form>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input id='li_username' type='text' name='username' placeholder='enter username'/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input for='li_password' type='password' name='password' placeholder='ener password'/>
                    </FormGroup>
                </Form>
            </div>
        )
    }

    
}

//ids with 'li' refer to login

export default Login