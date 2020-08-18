import React from 'react';
import {Text, View,Button } from 'react-native';
import Styles from '../styles'

export default class BreakTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timerValue: props.time
        }
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
            this.setState({
                timerValue:new Date(this.state.timerValue.setSeconds(this.state.timerValue.getSeconds()))
            })
        }
    }

    pause = ()=>{
        clearInterval(this.interval);
    }

    render(){
        return (
            <View>
                <Text style={Styles.title}>
                    Break Time!!!
                </Text>
                <Text>
                    {this.state.timerValue.getMinutes()}:{(this.state.timerValue.getSeconds()>=10)?this.state.timerValue.getSeconds():('0'+this.state.timerValue.getSeconds())}
                </Text>
                <Button title="Pause" onPress={()=>this.pause()} />
            </View>
        );
    }
}