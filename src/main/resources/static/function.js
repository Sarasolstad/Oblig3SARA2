


$(function (){
    getAll()
});

function validPhoneNumber(phoneNumber){
    const regex = /^[0-9]{8}$/;
    return regex.test(phoneNumber)
}

function validEmail(eMail){
    const regex= /^[a-åA-Å0-9._-]+@[a-åA-Å0-9.-]+\.[a-åA-Å]{2,4}$/;
    return regex.test(eMail);
}
console.log("test")
function buyTicket() {
    const ticket = {
        movie : $("#movie").val(),
        numberTicket : $("#numberTicket").val(),
        firstName: $("#firstName").val(),
        lastName : $("#lastName").val(),
        phoneNumber : $("#phoneNumber").val(),
        eMail: $("#eMail").val(),
    }

    let error = false;
    //clear all validation
    $("span[id^='wrong']").text("");

    if (ticket.movie === "No movie selected"){
        $("#errorMovie").text("please select a movie!");
        error = true;
    }
    if (isNaN(ticket.numberTicket) || ticket.numberTicket <= 0){
        $("#errorNumber").text("please choose a number of tickets!");
        error = true;
    }
    if (!ticket.firstName.trim()) {
        $("#errorFirstname").text("please write in your first name!");
        error = true;
    }
    if (!ticket.lastName.trim()) {
        $("#errorLastname").text("please write in your last name!");
        error = true;
    }
    if (!validPhoneNumber(ticket.phoneNumber)){
        $("#errorPhonenumber").text("please write in your phonenumber!")
        error=true;
    }
    if (!validEmail(ticket.eMail)){
        $("#errorEmail").text("please write in your E-mail!")
        error=true;
    }
    if (error){
        return;
    }

    console.log(ticket)
    console.log(error)


    $.post("/save",ticket,function (){
        getAll();
    });
    $("#movie").val("");
    $("#numberTicket").val("");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phoneNumber").val("");
    $("#eMail").val("");
}

function getAll(){
    $.get("/getAll",function (ticket){
        formImput(ticket);
    });
}


function formImput(ticket){
    let out =
        "<table class='table'"+"<thead>"+"<tr>"+
        "<th>Movie</th>"+
        "<th>Number</th>"+
        "<th>First name</th>"+
        "<th>Last name</th>"+
        "<th>Phonenumber</th>"+
        "<th>E-mail</th>"+"</tr>"+"</thead>"+"<tbody>";


    for (const tic of ticket){
        out += "<tr>"+
            "<td>"+tic.movie+"</td>"+
            "<td>"+tic.numberTicket+"</td>"+
            "<td>"+tic.firstName+"</td>"+
            "<td>"+tic.lastName+"</td>"+
            "<td>"+tic.phoneNumber+"</td>"+
            "<td>"+tic.eMail+"</td>"+
            "<td> <a class='btn btn-primary' href='changeTicket.html?id="+tic.id+"'>Change</a></td>"+
        "<td> <button class='bnt btn-danger' onclick='deleteOne("+tic.id+")'>Delete</button></td>+"+"</tr>";
    }
    out +=
        "</tbody>"+"</table>";
    $("#output").html(out);
}

function deleteTicket(){
    $.get("/deleteAll",function (){
        getAll();
    });
}
function deleteOne(id) {
    const url = "/deleteOne?id=" + id;
    $.get(url, function () {
        window.location.href = 'index.html';
        getAll()
    });
}
