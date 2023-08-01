function newItem() {
    let li = $('<li>' + $('#input').val() + '</li>');
    let xButton = $('<button class="crossOutButton">X</button>');

    li.on('dblclick', function () {
        li.toggleClass('strike');
    });

    xButton.on('click', function () {
        li.toggleClass('delete');
    });

    li.append(xButton);
    $('#list').append(li);
    $('#list').sortable();
}