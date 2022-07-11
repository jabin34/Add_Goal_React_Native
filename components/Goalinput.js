import { useState } from 'react';
import { Button, StyleSheet, View,TextInput ,Modal,Image} from 'react-native';
const Goalinput = (props) => {
    const [enteredGoalText,setEnteredGoalText]= useState('');
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      };
      function addGoalHandler(){
 
       props.onAddGoal(enteredGoalText);
        setEnteredGoalText(' ');
      }
    return (
        <Modal  visible={props.visible} animationType="slide">
         <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')}/>
           <TextInput 
           style={styles.textInput}
           placeholder ="Your course goal!!" 
           onChangeText={goalInputHandler}
           value= {enteredGoalText}
           />
          <View style={styles.buttonContainer} >
            <View style={styles.button}> 
                <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc"/>
            </View>
             <View style={styles.button}> 
                <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
            </View>
          </View>
      
      </View>
        </Modal>
        
    );
};

export default Goalinput;
const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:24,
        padding:16,
        color:'white',
        borderBottomColor:'#5767676',
        backgroundColor:'#311b6b'
      },
    textInput: {
      borderWidth:1,
      borderColor:'#e4d0ff',
      backgroundColor:'#e4d0ff',
      width:'100%',
      padding: 8,
      borderRadius:16
      },
      buttonContainer:{
        paddingTop:12,
       flexDirection:'row'
      },
      button:{
        width: 100,
        marginHorizontal:8,
      },
      image:{
        width:100,
        height:100,
        margin:20
      }
});