document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();

   let registerForm = document.forms["messForm"];
   let userName = registerForm.elements["name"].value;
   let userMess = registerForm.elements["message"].value;

   if ((userName != '') && (userMess != '')){

    let user = JSON.stringify({userName: userName, userMess: userMess});
   let request = new XMLHttpRequest();


    request.open("POST", "/*", true);   
    request.setRequestHeader("Content-Type", "application/json");
    
    request.addEventListener("load", function () {
        
        let receivedUser = JSON.parse(request.response);

        console.log(receivedUser.userName, "-", receivedUser.userMess);   

        var doc = document.getElementById('allMess');
        var newMess = document.createElement('div');
        newMess.innerHTML = `${receivedUser.userName}: ${receivedUser.userMess}`;
        doc.appendChild(newMess);
    });

    request.send(user);

    document.getElementById('message').value = '';
   }
});
