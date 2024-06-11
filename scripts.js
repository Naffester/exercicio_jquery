//scripts.js

$(document).ready(function() {

    $('#task-form').submit(function(event) {
        event.preventDefault();

        var taskText = $('#task-input').val();

        if(taskText !== '') {
            var taskItem = $('<li></li>').text(taskText);
            $('#task-list').append(taskItem);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click' , 'li', function() {
        $(this).toggleClass('completed');
    });
});