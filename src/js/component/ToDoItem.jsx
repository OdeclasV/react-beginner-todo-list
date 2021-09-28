import React from "react";

export const ToDoItem = () => {
	const [newToDo, setNewToDo] = React.useState("");
	return (
		<>
			<div>
				<ul>
					<li>{newToDo}</li>
				</ul>
			</div>
		</>
	);
};
