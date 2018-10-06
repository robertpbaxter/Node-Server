import React,{Component} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }

    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=e=>{
        fetch('http://localhost:3000/api/login',{
            method:'POST',
            body:JSON.stringify({user:this.state}),
            headers: new Headers({'Content-Type':'application/json'})
        }).then(res=>res.json())
        .then(data=>{this.props.setToken(data.sessionToken)})
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <h6>Doggo ipsum floofs borkf lotsa pats maximum borkdrive, ruff. Ur givin me a spook woofer puggo shooberino, long doggo much ruin diet. Heckin good boys doge boofers pupperino the neighborhood pupper, doge he made many woofs wow very biscit. You are doing me the shock fat boi porgo I am bekom fat, very hand that feed shibe. clouds. </h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input id='li_username' type='text' name='username' placeholder='enter username' onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                            <Input id='li_password' type='password' name='password' placeholder='ener password' onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }

    
}

//ids with 'li' refer to login

export default Login