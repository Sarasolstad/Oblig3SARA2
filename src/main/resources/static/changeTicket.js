

$(function (){
    const id = window.location.search.substring(1);
    const url = "/getOneTicket?"+id;
    $.get(url,function (ticket){
        $("#id").val(ticket.id);//må ha dem id inn i skjemaet, hidden html
        $("#movie").val(ticket.movie);
        $("#numberTicket").val(ticket.numberTicket);
        $("#firstName").val(ticket.firstName);
        $("#lastName").val(ticket.lastName);
        $("#phoneNumber").val(ticket.phoneNumber);
        $("#eMail").val(ticket.eMail);

    });
});

function changeTicket(){
    const ticket = {
        id : $("#id").val(),
        movie: $("#movie").val(),
        numberTicket: $("#numberTicket").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phoneNumber: $("#phoneNumber").val(),
        eMail: $("#eMail").val(),
    }
    $.post("/changeOneTicket",ticket,function (){
        window.location.href = 'index.html';
    });
}

