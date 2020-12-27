// login page
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function userlogin() {
  const email=document.getElementById("email-login").value;
  const password=document.getElementById("password-login").value;
  const login={email,password};
    const url = "http://127.0.0.1:8000/api/login";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(login), 
  })
  .then(response => {                         
    if (response.status === 201) {
       response.json().then(data => { // store user in localStorage as token
           window.localStorage.setItem("email", JSON.stringify(data.user.email));
           window.localStorage.setItem("name", JSON.stringify(data.user.name));
           console.log(JSON.parse(window.localStorage.getItem("data.user.name"))); 
           console.log(JSON.parse(window.localStorage.getItem("data.user.email")));// prints correctly here
           var user_name=localStorage.getItem("name");
           var user_email=localStorage.getItem("email");
          
       })
       console.log("Successful Login"); 
       const ref="http://127.0.0.1:5500/index.html";
       //redirect to home page
    }
    else if (response.status === 204) {
       console.log("Invalid Username or Password or Incorrect Permissions");
       const ref="/";
       // reload login page
    }
})
.catch(error => console.log(error));
}

  // const myform=document.getElementById("myFormsignup")
  function usersignup() {
   
    var email=document.getElementById("signup-email").value;
    var password=document.getElementById("signup-password").value;
    var username=document.getElementById("sigup-namefirst").value;
    var lastname=document.getElementById("sigup-namelast").value;
    var signup={email,password,username,lastname};
      const url = "http://127.0.0.1:8000/api/create_user";
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(signup), 
      } )

    .then(response => {                         
      if (response.status === 201) {

         response.json().then(data => { // store user in localStorage as token
             window.localStorage.setItem("email", JSON.stringify(data.user.email));
             window.localStorage.setItem("name", JSON.stringify(data.user.name));
             console.log(JSON.parse(window.localStorage.getItem("data.user.name"))); 
             console.log(JSON.parse(window.localStorage.getItem("data.user.email")));// prints correctly here
             var user_name=localStorage.getItem("name");
             var user_email=localStorage.getItem("email");
             
         })
         console.log("Successful Login"); 
        //  console.log(JSON.parse(window.localStorage.getItem("user"))); // prints null here

         const ref="http://127.0.0.1:5500/index.html";
         //redirect to home page
      }
      else if (response.status === 204) {
         console.log("Invalid Username or Password or Incorrect Permissions");
         const ref="/";
         // reload login page
      }
  })
  .catch(error => console.log(error));
  }