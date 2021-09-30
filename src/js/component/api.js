export const getServerTodos = async () => {
	console.log("doing GET request");
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/odeclasv"
	);
	if (response.status === 200) {
		const body = await response.json();
		return body;
	} else {
		console.log("doing POST request");
		await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/odeclasv",
			{
				method: "POST",
				body: "[]",
				headers: { "Content-Type": "application/json" }
			}
		);
		const todos = await getServerTodos();
		return todos;
	}
};

export const updateServerTodos = async todos => {
	await fetch("https://assets.breatheco.de/apis/fake/todos/user/odeclasv", {
		method: "PUT",
		body: JSON.stringify(todos),
		headers: { "Content-Type": "application/json" }
	});
};
