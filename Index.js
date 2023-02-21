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
        salvali();
    }
})  

Adicionar.addEventListener('click', function(){
    criarItem(Input.value);
    salvali();    
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('Botão')) el.parentElement.remove();
    salvali();
});

function salvali(){
    const somaLi = Container.querySelectorAll('li');
    const Array = []

    for (let sli of somaLi){
        sli = sli.innerText.replace('Apagar', '').trim();
        Array.push(sli);
    } 
    const salvaJSN = JSON.stringify(Array);
    localStorage.setItem('Lis',salvaJSN)
}

function retomali(){
    const NLis = localStorage.getItem('Lis')
    const retomaJSN = JSON.parse(NLis);
    for(let rtmJSN of retomaJSN){
        criarItem(rtmJSN);
    }
}
retomali();