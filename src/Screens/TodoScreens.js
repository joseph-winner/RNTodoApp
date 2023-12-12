import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'
import Fallback from '../../componets/Fallback';

const TodoScreens = () => {
  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  const [editTodo, setEditTodo] = useState(null);

  const handleAddTodo = () =>{
    if(todo === ""){
      return
    }
    setTodoList([...todoList, {id:Date.now().toString(), title: todo}])
    setTodo("")
  };

  const handleAddDelete = (id) =>{
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList)
  }

  const handleEditTodo = (todo) =>{
    setEditTodo(todo)
    setTodo(todo.title);
  }

  const handleEdit = () =>{
    const updatedTodos = todoList.map((item) =>{
      if(item.id === editTodo.id){
        return{...item, title:todo}
      }
      return(item)
    })
    setTodoList(updatedTodos)
    setEditTodo(null)
    setTodo("")
  }

  const renderTodoz = ({item, index}) =>{
    return(
     <View style={{backgroundColor: "dodgerblue", borderRadius:6, marginBottom:10, padding:12, flexDirection:"row", alignItems: "center"}}>
      <Text style={{color: "#fff", fontWeight:'700', fontSize:20, flex:1,}}>{item.title}</Text>
      <IconButton icon="pencil" iconColor='#fff' onPress={() =>{
        handleEditTodo(item)
      }} />
      <IconButton icon="trash-can" iconColor='#fff' onPress={() =>{
        handleAddDelete(item.id)
      }} />
     </View>
    )
  }
  
  return (
    <View style={{marginHorizontal: 16,}}>
      <TextInput style={{
        paddingHorizontal: 16, 
        paddingVertical: 12, 
        borderWidth: 2, 
        borderColor: "#000000",
        borderRadius: 6
        }} 
        placeholder='Add a Task' value={todo} onChangeText={(userText) => setTodo(userText)}>
        </TextInput>

        {
          editTodo ? <TouchableOpacity onPress={() =>{
            handleEdit()
          }} style={{
              backgroundColor: "#000",
              marginTop: 24,
              borderRadius: 6,
              marginVertical: 24,
              alignItems: "center",
              paddingVertical:8,
          }}>
              <Text style={{fontSize: 20, fontWeight:"bold", color:"#ffffff"}}>Update & Save</Text>
          </TouchableOpacity>:<TouchableOpacity onPress={() =>{
          handleAddTodo()
        }} style={{
            backgroundColor: "#000",
            marginTop: 24,
            borderRadius: 6,
            marginVertical: 24,
            alignItems: "center",
            paddingVertical:8,
        }}>
            <Text style={{fontSize: 20, fontWeight:"bold", color:"#ffffff"}}>Add</Text>
        </TouchableOpacity>
        }

        {/* <TouchableOpacity onPress={() =>{
          handleAddTodo()
        }} style={{
            backgroundColor: "#000",
            marginTop: 24,
            borderRadius: 6,
            marginVertical: 24,
            alignItems: "center",
            paddingVertical:8,
        }}>
            <Text style={{fontSize: 20, fontWeight:"bold", color:"#ffffff"}}>Add</Text>
        </TouchableOpacity> */}

        <FlatList data={todoList} renderItem={renderTodoz} />
        {todoList.length <= 0 && <Fallback />}
    </View>
  )
}

export default TodoScreens

const style = StyleSheet.create({});