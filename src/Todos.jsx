import React, { useEffect, useState } from "react";
import "./Todos.css"

let Todos = () => {
  let [data, Setdata] = useState([]);
  let [val, Setval] = useState("");

  let submiting = (e) => {
    e.preventDefault();
    Setval(e.target[0].value);
    e.target[0].value = "";
    
  };
  console.log(val);
  // console.log(typeof(val))

  useEffect(() => {
    Setdata([...data, val]);
  }, [val]);
  console.log(data);


  

  return (
    <div className="Todoapp">
    <div className="TodoWrapper">
    <div id="todocontainer">
      <center>
        <form onSubmit={submiting}>
          <input type="text" placeholder="enter a value" className="todo-input" />

          <input type="submit" value="add" className="todo-btn" />
        </form>

        {data.map((a, b, c) => {
    return (
        <div className="Todooo">
        <div>
          <h2>{a}</h2>
          <button id="tobtn"
            onClick={() => {
              let pp = prompt("edit a value");
              data.splice(b, 1, pp);
              Setdata([...data]);
              // console.log(c)
            }}
          >
            edit
          </button>
          <button id="tobtn"
            onClick={() => {
              data.splice(b, 1);
              Setdata([...data]);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  })}
      </center>
    </div>
    </div>
    </div>
  );
  
};

export default Todos;