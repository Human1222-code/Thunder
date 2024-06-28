function submitForm()
{
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    
    if(name != "" && email != "" && message != ""){
        swal({
          title: 'MMBFLIX',
          text: "Thanks for showing interest, we will get back to you soon!",
          icon: "success",
          button: "Ok",
        });
    }
}
