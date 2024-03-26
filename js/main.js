/******/ (() => {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ 243: /***/ () => {
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

			/***/
		},

		/***/ 161: /***/ () => {
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

			/***/
		},

		/***/ 692: /***/ () => {
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

			/***/
		},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be in strict mode.
	(() => {
		"use strict"; // CONCATENATED MODULE: ./src/js/_vars.js

		/* harmony default export */ const _vars = {
			windowEl: window,
			documentEl: document,
			htmlEl: document.documentElement,
			bodyEl: document.body,
		};
		// EXTERNAL MODULE: ./src/js/components/input-clones.js
		var input_clones = __webpack_require__(692);
		// EXTERNAL MODULE: ./src/js/components/file-inputs.js
		var file_inputs = __webpack_require__(161);
		// EXTERNAL MODULE: ./src/js/components/chapter-clones.js
		var chapter_clones = __webpack_require__(243); // CONCATENATED MODULE: ./src/js/_components.js // CONCATENATED MODULE: ./src/js/main.js
	})();

	/******/
})();
