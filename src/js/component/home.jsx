import React, { useState } from "react";


//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [addTarea, setAddTarea] = useState([]);

  function listaTareas(e) {
    if (e.key === "Enter") {
      setAddTarea([...addTarea, e.target.value]);
      e.target.value = "";
    }
  }
  console.log(addTarea);
  
  const DeleteItems = (indexItem) => {
    setAddTarea((prevState) =>
      prevState.filter((listaTareas, index) => index !== indexItem)
    );
  };

  return (
    <div className="container">
      <h1 className="text-center">Cosas por hacer</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Que necesitas hacer?"
          onKeyDown={listaTareas}
        />
      </div>
      <div id="lista">
        <div id="pendientes">
          <ul>
            {addTarea.map((tarea) => (
              <li>{tarea}
              <button type="button" className="float-end" onClick={() => DeleteItems(index)} ><i className="bi bi-trash "></i></button> 
              </li>
            ))}
          </ul>
          
        </div>
      </div>
      <div className="text-center">
        <p>Tareas pendientes: {addTarea.length} </p>
      </div>
    </div>
  );
};

export default Home;
