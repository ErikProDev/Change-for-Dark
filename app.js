'use strict'
    //Função "click" para indicar ao usuário onde interagir
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    //Teste verdade para definir se o tema será "white" ou "dark"
    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    //Teste de código no console do navegador
    console.log ('current class name: ' + className);
});