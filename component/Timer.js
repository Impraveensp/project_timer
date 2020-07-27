import React from 'react';
import WorkTimer from './WorkTimer';
import BreakTimer from './BreakTimer';
import { View,TextInput,Text } from 'react-native';

export default class Timer extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            workTime : new Date(0,0,0,0,props.time.workTime,0),
            breakTime : new Date(0,0,0,0,props.time.breakTime,0),
            currentTimer : true,
            workTimerText:props.time.workTime
        }
    }

    toggle(){
        this.setState({
            currentTimer:!this.state.currentTimer
        })
    }

    setWorkTime = (mins)=>{
        let finalMin
        if(mins!=null&&mins!=''){
            finalMin = mins
        }else{
            finalMin = 0
        }
        this.setState({
            workTime:new Date(0,0,0,0,finalMin,0),
            workTimerText:mins
        })
    }

    setBreakTime = (mins)=>{
        this.setState({

        })
    }
    
    render(){
        if(this.state.currentTimer){
            return (
                <View>
                    <WorkTimer time={this.state.workTime} onToggle={()=>this.toggle()}/>
                    <Text>{this.state.workTimerText}</Text>
                    <Text>{this.state.workTime.toLocaleTimeString()}</Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    keyboardType="numeric"
                    onChangeText={text => this.setWorkTime(text)}
                    value={this.state.workTimerText}
                    />
                </View>
            );
        }else{
            return (
                <View>
                    <BreakTimer time={this.state.breakTime} onToggle={()=>this.toggle()}/>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    />
                </View>
            );
        }
    }
}