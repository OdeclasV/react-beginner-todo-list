import React from "react";
import { AddToDo } from "./AddToDo.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid text-center mt-5">
			<h1>Hello Hello</h1>
			<AddToDo />
		</div>
	);
};

export default Home;
