const categoriesItemsEl = document.querySelectorAll('#categories .item');
console.log("Number of categories:",categoriesItemsEl.length);

const firstTitleEl = categoriesItemsEl[0].firstElementChild;
console.log('Category:', firstTitleEl.textContent);

const firstListEl = firstTitleEl.nextElementSibling;

const firstListItemsEl = firstListEl.children;
console.log("Elements:", firstListItemsEl.length)

const secondTitleEl = categoriesItemsEl[1].firstElementChild;
console.log('Category:', secondTitleEl.textContent);

const secondListEl = secondTitleEl.nextElementSibling;

const secondListItemsEl = secondListEl.children;
console.log("Elements:", secondListItemsEl.length);

const thirdTitleEl = categoriesItemsEl[2].firstElementChild;
console.log('Category:', thirdTitleEl.textContent);

const thirdListEl = thirdTitleEl.nextElementSibling;

const thirdListItemsEl = thirdListEl.children;
console.log("Elements:", thirdListItemsEl.length)


