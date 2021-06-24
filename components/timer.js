import React, {useState} from 'react';
import { StyleSheet, View, Text,  TouchableOpacity, Image} from 'react-native';
import timer from 'react-native-timer';


export default function() {
    let [hours, setHours] = useState("00");
    let [minutes, setMinutes] = useState("00");
    let [seconds, setSeconds] = useState("00");


    let getSeconds = 0;
    let getMinutes = 0;
    let getHours = 0;

function startTime(){
    if (getSeconds == 60){
        setSeconds("00");
        getSeconds = 0;
        getMinutes += 1
        setMinutes(getMinutes);
    }

    if(getMinutes == 60){
        setMinutes("00");
        getMinutes = 0;
        getHours += 1
        setHours(getHours);
    }

    if(getSeconds < 9){
        getSeconds += 1
        setSeconds(`0${getSeconds}`);
    }else{
        getSeconds += 1
        setSeconds(getSeconds);
    }

    if(getMinutes < 9){
        setMinutes(`0${getMinutes}`);
    }else{
        setMinutes(getMinutes);
    }

    if(getHours < 9){
        setHours(`0${getHours}`);
    }else{
        setHours(getHours);
    }

    
}

function clearTime() {
    timer.clearInterval("start");
    setSeconds("00");
    setMinutes("00");
    setHours("00");
    getSeconds = 0;
    getMinutes = 0;
    getHours = 0;
}

  return (
    <View style = {styles.container}>
        <View style={styles.timer}>
            <Text style = {styles.hoursText}> {hours} :</Text>
            <Text style = {styles.hoursText}> {minutes} :</Text>
            <Text style = {styles.hoursText}> {seconds}</Text>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style = { styles.buttons}
                onPress = {() => {
                    timer.setInterval("start", startTime, 1000)
                }}
            >
                <Image
                    style = {styles.imageIcons}
                    source = {require('../assets/play-32.png')}
                />

                <Text style = {styles.buttonText}>START</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = { styles.buttons}
                onPress = {() => {
                    timer.clearInterval("start");
                }}
            >
                <Image
                    style = {styles.imageIcons}
                    source = {require('../assets/stop-32.png')}
                />

                <Text style = {styles.buttonText}>PAUSE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = { styles.buttons}
                onPress = {() =>  {
                    clearTime();
                }}
            >   
                <Image
                    style = {styles.imageIcons}
                    source = {require('../assets/trash-6-32.png')}
                />
                
                <Text style = {styles.buttonText}>RESET</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    timer: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#08D9D6'
    },

    hoursText: {
        fontSize: 100,
        color: '#00ADB5',
        textShadowColor: '#08D9D6',
        textShadowRadius: 20
    },

    buttonContainer:{
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    
    buttons: {
        flexDirection: 'row',
        backgroundColor: '#00ADB5',
        width: '25%',
        height: '80%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },

    imageIcons: {
        marginRight: 10
    },

    buttonText: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
    }
  
});