import React from "react";
import { getServerTodos, updateServerTodos } from "./api";

export const AddToDo = () => {
	const [listOfToDos, setListOfToDos] = React.useState(null);
	const [newTodo, setNewTodo] = React.useState("");
	const [doneTask, setDoneTask] = React.useState(0);

	React.useEffect(() => {
		// loading initial todos from server
		const fn = async () => {
			const todos = await getServerTodos();
			setListOfToDos(todos.map(item => item.label));
		};
		fn();
	}, []); //empty array means it only run once

	React.useEffect(() => {
		// update todos from server
		const fn = async () => {
			updateServerTodos(
				listOfToDos.map(item => ({ label: item, done: false }))
			);
		};

		if (listOfToDos !== null) {
			fn();
		}
	}, [listOfToDos]);

	if (listOfToDos === null) {
		return null;
	}

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
									setDoneTask(doneTask + 1);
									console.log(newList);
								}}>
								Done
							</button>
						</li>
					);
				})}
			</ul>
			<div className="todoCounts">
				Total Todos Left: {listOfToDos.length}
			</div>
			<div className="doneTask"> Total Todos Done: {doneTask}</div>
		</>
	);
};
