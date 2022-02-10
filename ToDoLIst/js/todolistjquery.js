import { Todo } from '../js/Todo.js';

let todolist = [];

$(() => {

    stampaTodo();

    $('#inserisci').on('click', function () {
        let titolo = $('#titolo').val();
        let testo = $('#testo').val();
        let todo = new Todo(titolo, testo);
        todolist.push(todo);
        localStorage.setItem('listaTodo', JSON.stringify(todolist));
        stampaTodo();
    });

    function stampaTodo() {
        let lista = $('.lista ul');
        lista.html('');
        let localLista = localStorage.getItem('listaTodo');
        if (localLista !== null) {
            todolist = JSON.parse(localLista);
        }
    

        $.each(todolist, function(index, item) {
            $(lista).append(`<li class="list-group-item">${item.titolo} - ${item.testo} <span id='rimuovi' class='btn btn-sm btn-danger float-end'>X</span></li>`)
        })
        
    }

    $(document).on('click', '#rimuovi', function () {
        let indice = $(this.parentElement).index();
        todolist.splice(indice, 1);
        localStorage.setItem('listaTodo', JSON.stringify(todolist));
        stampaTodo();
    });

});
