const categoriesItemsEl = document.querySelectorAll('#categories .item');
console.log("Number of categories:",categoriesItemsEl.length);

for (const element of categoriesItemsEl) {
    
    const titleEl = element.firstElementChild.textContent;
    console.log(`Category: ${titleEl}`)
    
    const listEl = element.lastElementChild.children.length;
    console.log(`Elements: ${listEl}`);
    
}


