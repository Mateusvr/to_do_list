let form = document.getElementById('form');
let taskList = []

console.log(task.value);

function addTask() {
 
    form.addEventListener('submit', function(event){

        // Evitar que formulário recerregue após o submit.
        event.preventDefault()

        // Elemento do input.
        let task = document.getElementById('task');
        let inputValue = task.value.trim();


        if(inputValue !== ''){

            console.log('valor : ' + inputValue);
            taskList.push(inputValue);
            console.log(taskList);
            task.value = '';
            showList();

        }

    })

}

function showList () {

    //let list = document.getElementsByTagName('ul')[0];
    let list = document.getElementById('lista');
    console.log(list);

    list.innerHTML = '';

    // Percorrer cada elemento da lista e imprimir, conferrir se está lendo cada task adicionado no array.

    taskList.forEach(function(item, index) {
        console.log(item);

        // Criou a tag li para cada elemento da lista.
        const li = document.createElement('li');

        li.classList.add('list-group-item');

        const texto = document.createTextNode(item);

        li.appendChild(texto);

        // Criar o botão para remover.
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'float-end');
        button.dataset.index = index;

        const x = document.createTextNode('X');

        button.appendChild(x);

        button.addEventListener('click', function (e) {

            let index = e.target.dataset.index;
            console.log(index);

            taskList.splice(index, 1);
            showList();


        })

        li.appendChild(button);



        // Inserir a li na iul.

        list.appendChild(li);


    })


}

