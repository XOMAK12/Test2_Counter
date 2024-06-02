const textInput = document.querySelector('#textInput');
const charCount = document.querySelector('#charCount');
const charLeftRender = document.querySelector('#charLeft');
const maxLength = 30;

textInput.addEventListener('input', () => {
    const length = textInput.value.length;
    const charLeft = maxLength - length;
    charCount.textContent = length;
    charLeftRender.textContent = charLeft;
});