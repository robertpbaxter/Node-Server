import React,{Component} from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {AuthContext} from './AuthContext'

class Signup extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value, //e.target.name -> for any event, updates the value within the attribute called 'name' vs. e.target.value selects the value within the input field in question
        })
    }
    
    handleSubmit=(e)=>{
        if (this.state.username===''){
            let validateUsername=document.getElementById('validateUsername')
            validateUsername.innerText='user name is required'
        }else{
            fetch('http://localhost:3000/api/user',{
                method:'POST', //tell what type of fetch is happening
                body:JSON.stringify({user:this.state}), //server should expect the format of this informatino
                headers: new Headers({
                    'Content-Type':'application/json' //let the server know what kind of information is coming
                })
            }).then(res=>res.json())
            .then(data=>{this.props.auth.setToken(data.sessionToken) //
            })
        }
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <h6>Doggo ipsum floofs borkf lotsa pats maximum borkdrive, ruff. Ur givin me a spook woofer puggo shooberino, long doggo much ruin diet. Heckin good boys doge boofers pupperino the neighborhood pupper, doge he made many woofs wow very biscit. You are doing me the shock fat boi porgo I am bekom fat, very hand that feed shibe. clouds. </h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input id='username' type='text' name='username' placeholder='enter username' onChange={this.handleChange}/>
                        <span id='validateUsername'></span>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input id='su_password' type='password' name='password' placeholder='enter password' onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default props=>(
    <AuthContext.Consumer>
        {auth=><Signup {...props} auth={auth}/>}
    </AuthContext.Consumer>
)