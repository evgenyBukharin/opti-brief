const newChapterBtn = document.querySelector(".brief__button-chapter");
const chaptersContainer = document.querySelector(".brief__row-newchapters");
let inputIndex = 0;
if (newChapterBtn && chaptersContainer) {
	newChapterBtn.addEventListener("click", (e) => {
		e.preventDefault();
		let newInput = document.createElement("input");
		newInput.setAttribute("type", "text");
		newInput.setAttribute("name", `new-chapter-${inputIndex}`);
		newInput.setAttribute("id", `new-chapter-${inputIndex}`);

		newInput.classList = "brief__input brief__input-chapter";
		chaptersContainer.appendChild(newInput);

		inputIndex++;
	});
}
