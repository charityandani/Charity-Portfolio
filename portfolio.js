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


  function validateMessage(){

      var messageContact = document.getElementById("message").value;
      var required = 10;
      var left = required - messageContact.length;

      if(left > 0){
        messageError.innerHTML = left + " more characters required";
        return false;
      }
      messageError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
      return true;

  }

  function validateForm(){

    if(!validateName()  || !validatePhone() || !validateEmail() || !validateMessage() ){
      submitError.style.display = "block";
      submitError.innerHTML = "Please fix error to submit";
      setTimeout(function(){submitError.style.display = "none";}, 3000);
     return false;
    }
  }
  
  //EMAIL JS
  function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    // Check if any of the fields is empty
    if (name.trim() === "" || phone.trim()=="" || email.trim() === "" || message.trim() === "") {
      alert("Please fill out all fields before sending the message.");
      return; // Exit the function if any field is empty
    }
  
    var params = {
      name: name,
      email: email,
      phone: phone,
      message: message,

    };
  
    const serviceID = "service_1x4iyaf";
    const templateID = "template_hcdklbl";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
       
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";

        messageError.innerHTML = "";
        nameError.innerHTML="";
        phoneError.innerHTML="";
        emailError.innerHTML="";

       
        
        console.log(res);
        alert("Your message was sent successfully!!");

        
      })
      .catch((err) => console.log(err));
  }
  

  


  //RECAPTCHA
 //Recaptcha validation
 const express = require('express'); 
        const bodyParser = require('body-parser');
        const fetch = require('node-fetch');
        
        const app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        
        app.post('/submit-form', async (req, res) => {
          const { recaptchaToken } = req.body;
        
          // Verify the reCAPTCHA token with Google
          const secretKey = '6Le9FCUoAAAAAGS68kie4qvn5Ah8tci0JoesjZ6R'; 
          const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
        
          const response = await fetch(verificationUrl, { method: 'POST' });
          const data = await response.json();
        
          if (data.success) {
            // reCAPTCHA verification passed; process the form submission
            // Your email sending logic should go here
            res.send('Form submitted successfully!');
          } else {
            // reCAPTCHA verification failed
            res.status(400).send('reCAPTCHA verification failed.');
          }
        });
        
        app.listen(3000, () => {
          console.log('Server is running on port 3000');
        });  
        
      

