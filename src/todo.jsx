
import { useState } from "react"
// import TodoList from "./TodoList"


export let Todo = ()=>{

    let [todo, setTodo] = useState([]);
    let [val, setval] = useState("");



    let changevalue = (e)=>{
        setval(e.target.value)



    }


    let submitvalue = (e)=>{
        e.preventDefault()
       
        if(val==""){
            alert("must be enter a value")
        }else{
            setTodo([...todo,val])

        }
        
        
        e.target[0].value = ""

    }

    // let deleteHandler = (indexValue) =>{
    //     const newTodos = todo.filter((todo,index) => index !== indexValue);
    //     setTodo(newTodos);
    //   }



    console.log(todo);
    // console.log(val);


    // let dis = todo.map((val, ind)=>{
    //     return(
    //         <li key={ind}>{val}</li>
    //     )

    // })

    return(


        <>

        <h1>ToDo List</h1>
        <form action="" onSubmit={submitvalue}>
            <input type="text" onChange={changevalue}/>
            <input type="submit" value="submit"/>



        </form>

        {/* <TodoList todolist={todo} deleteHandler={deleteHandler}/> */}

        
        
        
        
        
        
        </>
    )
}