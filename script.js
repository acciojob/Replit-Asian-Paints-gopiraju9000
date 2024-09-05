//your JS code here. If required.
const grid = document.querySelector("#grid-container");
for(let i = 1;i <= 9;i++){
	const grid_item = document.createElement("div");
	grid_item.id = i;
	grid_item.innerText = i;
	grid_item.className = "grid-item";
	grid.appendChild(grid_item);
}
const form = document.querySelector("form");
let prev_ele = null;
form.addEventListener("submit",(event) =>{
	event.preventDefault();
	let selected_id = form.id.value;
	let selected_color = form.color.value;
	let cell = document.getElementById(selected_id);
	cell.style.backgroundColor = selected_color;
	if(prev_ele) prev_ele.style.backgroundColor = "#ffffff";
	prev_ele = cell;
});