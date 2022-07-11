import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput ,ScrollView,FlatList} from 'react-native';
import Goalinput from './components/Goalinput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState('');
  const [goals,setGoals]=useState([]);
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler(){
    setGoals((currentCourseGoal) => [
      ...currentCourseGoal,
     { text:enteredGoalText, key:Math.random().toString()},
    ]);
  }
  return (
    <View style={styles.appContainer}>
    <Goalinput addGoalHandler={addGoalHandler}  goalInputHandler={goalInputHandler}/>
      
      <View style={styles.goalsContainer} >
        {/* <Text>List of goals...</Text> */}
        <FlatList data={goals} renderItem={(itemData) => {
          return(
           < GoalItem  text={itemData.item.text}/>
          );
        }}
        keyExtractor = {(item,index) => {
          return item.id;
        }}
         alwaysBounceVertical={false}/>   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding:50,
    paddingHorizontal: 16
  },
  
  goalsContainer:{
    flex:4,
  },

});
