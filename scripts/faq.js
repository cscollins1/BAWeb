$(document).ready(() => {
    $('.question').on('click', event => {
        $(event.currentTarget).next().toggle();
    });
})