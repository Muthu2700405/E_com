  
    var form=document.getElementById("detailForm")
    
form.addEventListener('submit',function(event) {
        event.preventDefault();
          var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var msg = document.getElementById("msg").value;
    
        console.log("Form Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Message:", msg);
        alert("Your details have been Submitted ! \n Thanks for contacting Us")
    });
