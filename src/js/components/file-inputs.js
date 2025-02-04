const fileLabels = document.querySelectorAll(".brief__label-file");
fileLabels.forEach((label) => {
	let input = label.querySelector("input");
	let textElement = label.querySelector("span");
	input.addEventListener("change", () => {
		switch (input.files.length) {
			case 0:
				textElement.innerText = "Прикрепить";
				break;
			case 1:
				textElement.innerText = `Выбран файл: ${input.files[0].name}`;
				break;

			default:
				textElement.innerText = `Выбрано файлов: ${input.files.length}`;
				break;
		}
	});
});
