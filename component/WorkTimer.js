import React from 'react';
import {Text, View,Button } from 'react-native';
import Styles from '../styles'

export default class WorkTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timerValue: props.time,
            buttonText:"Pause",
            buttonFunction:this.pause,
        }
        this.fixedTime = new Date(props.time)
    }

    componentDidMount(){
        this.interval = setInterval(this.countDown,1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    countDown = ()=>{
        if(this.state.timerValue.getMinutes()==0&&this.state.timerValue.getSeconds()==0){
            this.props.onToggle();
        }
        else{
            let d = this.state.timerValue
            d.setSeconds(d.getSeconds()-1)
            this.setState({
                timerValue:d
            })
        }
    }

    pause = ()=>{
        this.setState({
            buttonText:"Resume",
            buttonFunction:this.resume
        })
        clearInterval(this.interval);
    }

    resume = () =>{
        this.setState({
            buttonText:"Pause",
            buttonFunction:this.pause
        })
        this.interval = setInterval(this.countDown,1000);        
    }

    reset = () =>{
        clearInterval(this.interval)
        this.setState({
            timerValue:new Date(this.fixedTime),
            buttonText:"Start",
            buttonFunction:this.resume
        })
    }

    render(){
        return (
            <View>
                <Text style={Styles.title}>
                    Work Timer!!!
                </Text>
                <Text>
                    {this.state.timerValue.getMinutes()}:{(this.state.timerValue.getSeconds()>=10)?this.state.timerValue.getSeconds():('0'+this.state.timerValue.getSeconds())}
                </Text>
                <View style={Styles.btnrow}>
                <Button title={this.state.buttonText} onPress={()=>this.state.buttonFunction()} />
                <Button title="Reset" onPress={()=>this.reset()} />
                </View>
            </View>
        );
    }
}