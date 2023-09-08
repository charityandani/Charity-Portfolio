let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {

  menu.classList.toggle("fa-solid");
  navbar.classList.toggle("active");
 
}; 










  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var phoneError = document.getElementById("phone-error");
  var messageError = document.getElementById("message-error");
  var submitError = document.getElementById("submit-error");

  function validateName(){

    var name=document.getElementById("contact-name").value;
    if(name.length==0)
    {
      nameError.innerHTML = "Required";
      return false;
    }
    if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){

      nameError.innerHTML = "write full name";
      return false;
    }

    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
     
  }

  function validatePhone(){

    var phone = document.getElementById("contact-phone").value;
    if(phone.length==0){
      phoneError.innerHTML = "required"
      return false;
    }
    if(phone.length!==10){
      phoneError.innerHTML = "10 digits required";
      return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){

      phoneError.innerHTML = "only numbers please";
      return false;
    }

    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;


  }

  function validateEmail(){

    var email = document.getElementById("contact-email").value;


    if(email.length==0){
      emailError.innerHTML = "Email is required";
      return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){

      emailError.innerHTML = "Email Invalid";
      return false;
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
  }

  