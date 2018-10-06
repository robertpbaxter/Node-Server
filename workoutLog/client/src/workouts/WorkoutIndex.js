import React,{Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import WorkoutCreate from './WorkoutCreate'
import WorkoutTable from './WorkoutTable'
import WorkoutEdit from './WorkoutEdit'

export default class WorkoutIndex extends Component{
    constructor(props){
        super(props)
        this.state={
            workouts:[], //An array for storing the workouts
            updatePressed:false,
            workoutToUpdate:[] //storage for the log to update
        }
    }
    
    componentDidMount=()=>{//use DidMount rather than WillMount because I am using a promise here (WillMount would occur before I even fetched the data)
        this.fetchWorkouts()
    }

    fetchWorkouts=()=>{
        fetch('http://localhost:3000/api/log',{
            method:'GET',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        }).then(res=>res.json())
        .then(logData=>{
            this.setState({workouts:logData})
        })
    }

    workoutDelete=e=>{
        fetch(`http://localhost:3000/api/log/${e.target.id}`,{
            method:'DELETE',
            body:JSON.stringify({log:{id:e.target.id}}),
            headers:new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        })
        .then(res=>this.fetchWorkouts()) //once an item is deleted, this refreshes the table
    }

    workoutUpdate=(e,workout)=>{
        console.log(workout)
        fetch(`http://localhost:3000/api/log/${workout.id}`,{//sending off an update
            method:'PUT',
            body:JSON.stringify({log:workout}),
            headers:new Headers({
                'Content-Type':'application/json',
                'Authorization':this.props.token
            })
        }).then(res=>{
            this.setState({updatePressed:false})//button is set to true in the function below, this resets it
            this.fetchWorkouts()
        })
    }

    setUpdatedWorkout=(e,workout)=>{
        this.setState({
            workoutToUpdate:workout,
            updatePressed:true
        })
    }

    render(){
        const workouts=this.state.workouts.length>=1 ? // Are there any workouts to display?
            <WorkoutTable workouts={this.state.workouts} delete={this.workoutDelete} update={this.setUpdatedWorkout}/> : //if so, send props for the table and buttons
            <h2>Log a workout to see table</h2> //if not, display this
        return(
            <Container>
                <Row>
                    <Col md='3'>
                        <WorkoutCreate token={this.props.token} updateWorkoutsArray={this.fetchWorkouts}/>
                    </Col>
                    <Col md='9'>
                        {workouts}
                    </Col>
                </Row>
                <Col md='12'>
                    {
                        this.state.updatePressed ? //ternary to ensure WorkoutEdit only appears when the update button has been pressed
                        <WorkoutEdit t={this.state.updatePressed} update={this.workoutUpdate} workout={this.state.workoutToUpdate}/>
                        : <div></div>
                    }
                </Col>
            </Container>
        )
    }
}