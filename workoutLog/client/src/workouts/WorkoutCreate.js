import React,{Component} from 'react'
import {Button,Form,FormGroup,Label,Input} from 'reactstrap'

export default class WorkoutCreate extends Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            result:'',
            description:'',
            definition:''
        }
    }

    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=e=>{
        e.preventDefault()
        fetch(`http://localhost:3000/api/log/`, {
            method:'POST',
            body:JSON.stringify({log:this.state}), //throws the current state into the body as an object with key 'log'
            headers:new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        }).then(res=>res.json())
        .then(logData=>{
            this.props.updateWorkoutsArray()
            this.setState({//resetting the state back to nothing for a new entry
                id:'',
                result:'',
                description:'',
                definition:''
            })
        })
    }

    render(){
        return(
            <div>
                <h3>Log a Workout</h3>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='result'>Result</Label>
                        <Input id='result' type='text' name='result' value={this.state.result} placeholder='enter result' onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='definition'>Type</Label>
                        <Input type='select' name='definition' id='definition' value={this.state.definition} onChange={this.handleChange} placeholder='Type'>
                            <option></option>
                            <option value='Time'>Time</option>
                            <option value='Weight'>Weight</option>
                            <option value='Distance'>Distance</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for='description'>Notes</Label>
                        <Input id='description' type='text' name='description' value={this.state.description} placeholder='enter description' onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type='submit' color='primary'>Submit</Button>
                </Form>
            </div>
        )
    }
}