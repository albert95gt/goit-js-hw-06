const refs = {
    input: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text'),
}
const {input, spanText} = refs;

const onTextSizeControl = (event) => {
    
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}
    
    input.addEventListener("input", onTextSizeControl);
