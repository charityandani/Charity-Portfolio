let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {

  menu.classList.toggle("fa-solid");
  navbar.classList.toggle("active");
 
}; 

//FORM VALIDATION
  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var phoneError = document.getElementById("phone-error");
  var messageError = document.getElementById("message-error");
  var submitError = document.getElementById("submit-error");

  function validateName(){

    var nameContact=document.getElementById("name").value;
    if(nameContact.length==0)
    {
      nameError.innerHTML = "Required";
      return false;
    }
    if(!nameContact.match(/^[A-Za-z]+ [A-Za-z]+$/)){

      nameError.innerHTML = "write full name";
      return false;
    }

    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
     
  }

  function validatePhone(){

    var phoneContact = document.getElementById("phone").value;
    if(phoneContact.length==0){
      phoneError.innerHTML = "required"
      return false;
    }
    if(phoneContact.length!==10){
      phoneError.innerHTML = "10 digits required";
      return false;
    }
    if(!phoneContact.match(/^[0-9]{10}$/)){

      phoneError.innerHTML = "only numbers please";
      return false;
    }

    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;


  }

  function validateEmail(){

    var emailContact = document.getElementById("email").value;


    if(emailContact.length==0){
      emailError.innerHTML = "Email is required";
      return false;
    }
    if(!emailContact.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){

      emailError.innerHTML = "Email Invalid";
      return false;
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
  };

  
  //EMAIL JS


  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
   
 const serviceID = "service_1x4iyaf";
 const templateID = "template_hcdklbl";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
        
      })
    
      .catch(err=>console.log(err));
      alert("Your message sent successfully!!");
   
  }


