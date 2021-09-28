import React from "react";
import { AddToDo } from "./AddToDo.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid mt-5 text-center">
			<h1>To-Dos</h1>
			<AddToDo />
		</div>
	);
};

export default Home;
