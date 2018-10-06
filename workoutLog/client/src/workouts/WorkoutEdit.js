import React,{Component} from 'react'
import{Button,Form,FormGroup,Label,Input,Modal,ModalHeader,ModalBody} from 'reactstrap'

export default class WorkoutEdit extends Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            result:'',
            description:'',
            definition:''
        }
    }

    componentWillMount=()=>{//Unlike in workoutindex.js, I can use WillMount rather than DidMount because I'm not fetching anything (the data is in the props from the beginning)
        this.setState({
            id:this.props.workout.id,
            result:this.props.workout.result,
            description:this.props.workout.description,
            definition:this.props.workout.definition
        })
    }

    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=e=>{
        e.preventDefault()
        this.props.update(e,this.state)//calls an update function passed down via props and updates the state
        console.log(this.state)
    }



    render(){
        return(
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Log a workout</ModalHeader>
                    <ModalBody>
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
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}