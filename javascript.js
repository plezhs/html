function toggleList() {
    const list = document.getElementById('sidebar');
    const buttonSection = document.getElementById('buttonSection');
    const button = document.querySelector('.toggle-button');
    list.classList.toggle('open');
    buttonSection.classList.toggle('open');
    buttonSection.classList.toggle('closed');
    button.textContent = list.classList.contains('open') ? '<' : '>';
}



function showFunction(functionName, wth) {
    const content = document.getElementById('functionContent');
    let htmlContent = '';

    switch (functionName) {
        case 'valshop':
            htmlContent = `<object width="${innerWidth-250}" type="text/html" data="${functionName}.html"></object>`;
            break;
        case 'nm':
            htmlContent = `<object width="${innerWidth-250}" type="text/html" data="${functionName}.html"></object>`;
            break;
        case 'function3':
            htmlContent = `<object width="${innerWidth-250}" type="text/html" data="${functionName}.html"></object>`;
            break;
        case 'function4':
            htmlContent = `<object width="${innerWidth-250}" type="text/html" data="${functionName}.html"></object>`;
            break;
        default:
            htmlContent = '<p>Select a function from the list to see its documentation.</p>';
    }

    content.innerHTML = htmlContent;
}