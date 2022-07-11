import { useState } from 'react';
import { Button, StyleSheet, View,TextInput } from 'react-native';
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
        <View style={styles.inputContainer}>
           <TextInput 
           style={styles.textInput}
           placeholder ="Your course goal!!" 
           onChangeText={goalInputHandler}
           value= {enteredGoalText}
           />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
    );
};

export default Goalinput;
const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:'#5767676',
      },
    textInput: {
      borderWidth:1,
      borderColor:'#cccccc',
      width:'70%',
      marginRight: 8,
      padding: 8
      },
});