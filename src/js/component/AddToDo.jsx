import React from "react";

export const AddToDo = () => {
	const [listOfToDos, setListOfToDos] = React.useState([]);
	const [newTodo, setNewTodo] = React.useState("");

	return (
		<>
			<div>
				<input
					type="text"
					placeholder="Add Todo item"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
					onKeyUp={e => {
						if (e.key === "Enter") {
							if (e.target.value != "") {
								//let newList = listOfToDos.concat([newTodo]);
								let newList = [...listOfToDos, newTodo]; // adding all elements of listoftodos, and then newTodo
								setListOfToDos(newList);
								setNewTodo("");
							}
						}
					}}
				/>
				<ul>
					{listOfToDos.map((todo, i) => {
						return (
							<li key={i}>
								{todo}
								<button
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
				<div>Total Todos: {listOfToDos.length}</div>
			</div>
		</>
	);
};