const Container = document.querySelector('.Container');
const Input = Container.querySelector('.Input');
const Adicionar = Container.querySelector('.Adicionar');
const div = Container.querySelector('ul');

function criarItem(algo){
    const li = document.createElement('li');
    li.innerHTML = algo;
    div.appendChild(li);
    li.setAttribute('class','Item');
    limparInput();
    buttonApagar(li);
};

function limparInput(){
    Input.value = '';
    Input.focus();
}

function buttonApagar(li){
    li.innerText += '';
    const button = document.createElement('button');
    button.innerText = 'Apagar';
    button.setAttribute('class','Botão') 
    li.appendChild(button);
    
}

const AdicionarEnter = Input.addEventListener('keypress', function(e){
    if (e.keyCode===13){ 
        if(!Input.value) return;
        criarItem(Input.value);
    }
})  

Adicionar.addEventListener('click', function(){
    criarItem(Input.value);    
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('Botão')) el.parentElement.remove();
});