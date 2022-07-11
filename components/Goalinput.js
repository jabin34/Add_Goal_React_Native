import { useState } from 'react';
import { Button, StyleSheet, View,TextInput ,Modal} from 'react-native';
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
        <Modal visible={props.visible} animationType="slide">
         <View style={styles.inputContainer}>
           <TextInput 
           style={styles.textInput}
           placeholder ="Your course goal!!" 
           onChangeText={goalInputHandler}
           value= {enteredGoalText}
           />
          <View style={styles.buttonContainer} >
            <View style={styles.button}> 
                <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
             <View style={styles.button}> 
                <Button title='Cancel' onPress={props.onCancel}/>
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
        borderBottomWidth:1,
        borderBottomColor:'#5767676',
      },
    textInput: {
      borderWidth:1,
      borderColor:'#cccccc',
      width:'100%',
      marginRight: 8,
      padding: 8
      },
      buttonContainer:{
        paddingTop:12,
       flexDirection:'row'
      },
      button:{
        width: 100,
        marginHorizontal:8,
       

      }
});