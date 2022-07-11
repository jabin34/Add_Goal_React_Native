
import { Button, StyleSheet, View,TextInput } from 'react-native';
const Goalinput = (props) => {
    return (
        <View style={styles.inputContainer}>
           <TextInput style={styles.textInput} placeholder ="Your course goal!!" onChangeText={props.goalInputHandler}/>
        <Button title='Add Goal' onPress={props.addGoalHandler}/>
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