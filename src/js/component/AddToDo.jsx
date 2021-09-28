import React from "react";

export const AddToDo = () => {
	const [listOfToDos, setListOfToDos] = React.useState([]);
	const [newTodo, setNewTodo] = React.useState("");

	return (
		<>
			<input
				type="text"
				placeholder="Add Todo item"
				value={newTodo}
				onChange={e => setNewTodo(e.target.value)}
				onKeyUp={e => {
					if (e.key === "Enter" && e.target.value != "") {
						//let newList = listOfToDos.concat([newTodo]);
						let newList = [...listOfToDos, newTodo]; // adding all elements of listoftodos, and then newTodo
						setListOfToDos(newList);
						setNewTodo("");
					}
				}}
			/>
			<ul className="list-group list-group-flush">
				{listOfToDos.map((todo, i) => {
					return (
						<li
							key={i}
							className="list-group-item d-flex justify-content-between align-items-center">
							{todo}
							<button
								className="btn btn"
								onClick={() => {
									let newList = listOfToDos.filter(
										(item, index) => {
											return i !== index;
										}
									);
									setListOfToDos(newList);
								}}>
								X
							</button>
						</li>
					);
				})}
			</ul>
			<div className="todoCounts">Total Todos: {listOfToDos.length}</div>
		</>
	);
};
