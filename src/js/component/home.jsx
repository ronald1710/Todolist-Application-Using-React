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

  return (
    <div className="container">
		<h1></h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="What needs to be done?"
          onKeyDown={listaTareas}
        />
      </div>
    </div>
  );
};

export default Home;
