function toggleList() {
    const list = document.getElementById('sidebar');
    const buttonSection = document.getElementById('buttonSection');
    const button = document.querySelector('.toggle-button');
    list.classList.toggle('open');
    buttonSection.classList.toggle('open');
    buttonSection.classList.toggle('closed');
    button.textContent = list.classList.contains('open') ? '<' : '>';
}



function showFunction(functionName) {
    const content = document.getElementById('functionContent');
    let htmlContent = '';
    cmds = ['valshop', 'nm', 'set', 'info']
    if (cmds.includes(functionName)) {
        htmlContent = `<object id="cmd" height="${window.innerHeight}" width="${window.innerWidth-500}" type="text/html" data="./cmddm/${functionName}.html"></object>`;
    }else{
        htmlContent = '<p>Select a function from the list to see its documentation.</p>';
    }

    content.innerHTML = htmlContent;
}