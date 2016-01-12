
$(function() {
    $('.fc-toolbar').addClass('hidden');
    updateTitle();
    $('#next').click(function(event) {
        $('#calendar').fullCalendar('next');
        updateTitle();
    });
    $('#prev').click(function(event) {
        $('#calendar').fullCalendar('prev');
        updateTitle();
    });
    $('#today').click(function(event) {
        $('#calendar').fullCalendar('today');
        updateTitle();
    });
});

function updateTitle() { // Fix It!!
    $('#title').text($('.fc-left').children().text());
}
