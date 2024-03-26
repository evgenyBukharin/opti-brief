const cloneButtons = document.querySelectorAll(".brief__button-clone");
cloneButtons.forEach((button) => {
	let parentRow = button.closest(".brief__row-inner");
	let newInputId = 1;
	button.addEventListener("click", (e) => {
		e.preventDefault();

		const inputToClone = parentRow.querySelector(".brief__input");
		const clonesContainer = parentRow.querySelector(".brief__container-clones");

		let newInput = document.createElement("input");
		newInput.classList.add("brief__input");

		// меняем атрибуты инпутов
		let newName = inputToClone.getAttribute("name").split("-");
		newName[1] = newInputId;
		newInput.setAttribute("name", newName.join("-"));
		newInput.setAttribute("id", newName.join("-"));

		clonesContainer.appendChild(newInput);
		newInputId++;
	});
});
