import React, { useState } from "react";

//create your first component
const Home = () => {
 
  const [addTarea, setAddTarea] = useState([]);

  function listaTareas(e) {
    if (e.key === "Enter") {
      setAddTarea([...addTarea, e.target.value]);
      e.target.value = "";
    }
  }
  console.log(addTarea);

  const removeTodo = (index) => {
    const newTodos = [...addTarea];
    newTodos.splice(index, 1);
    setAddTarea(newTodos);
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
            {addTarea.map((tarea, index) => (
              <li key={index}>
                {tarea}
                <a className="float-end" onClick={() => removeTodo(index)}>
                  <i className="bi bi-x bg-primary text-white"></i>
                </a>
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
