import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput ,ScrollView,FlatList} from 'react-native';
import Goalinput from './components/Goalinput';
import GoalItem from './components/GoalItem';

export default function App() {
  const[modalIsVisible,setModalVisible] = useState(false);
  const [goals,setGoals]=useState([]);
  
  function startAddGoalHandler (){
    setModalVisible(true);
  }
  function endAddGoalHandler(){
    setModalVisible(false);
  } 
  function addGoalHandler(enteredGoalText){
    setGoals((currentCourseGoal) => [
      ...currentCourseGoal,
     { text:enteredGoalText, key:Math.random().toString()},
    ]);
    setModalVisible(false);
  }

   function deleteGoalHandler(id){
    setGoals(currentCourseGoal =>{
      return currentCourseGoal.filter((goal)=> goal.id!==id);
    })
    console.log('delete');
   }

  return (
    <View style={styles.appContainer}>
      <Button 
      title='Add New Goal' 
      color='#67787879'
      onPress={startAddGoalHandler}
      />
  {modalIsVisible &&  <Goalinput 
  visible={modalIsVisible}
   onAddGoal={addGoalHandler} 
   onCancel={endAddGoalHandler} />}
      
      <View style={styles.goalsContainer} >
        {/* <Text>List of goals...</Text> */}
        <FlatList data={goals} renderItem={(itemData) => {
          return(
           <GoalItem  
           id={itemData.item.id}
           text={itemData.item.text} 
           onDeleteItem={deleteGoalHandler}
           />
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
