import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';







const Task = ({text, key, deleteFunc}) => {

//     const [theIndex, setIndex] = useState();

//   const  removeTask = (key) =>{
//        setIndex(key);
       
//    }


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            {/* <View style={styles.circular}></View> */}
            {/* <MaterialIcons name='delete' size={18} color='#333' onPress={()=> deleteFunc(key)} /> */}
            

        </View>
    )
}



const styles = StyleSheet.create({

    item:{
        backgroundColor: '#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom: 20,
        },
    itemLeft:{
        flexDirection:'row',
        alignItems:"center",
        flexWrap : "wrap",

    },
    square:{

        width:24,
        height:24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius:5,
        marginRight : 15,



    },
    itemText:{
        maxWidth :'80%',
    },
    circular:{
        width:12,
        height:12,
        borderColor:"#55BCF6",
        borderRadius:5,
        borderWidth:2,
    }



});






export default Task