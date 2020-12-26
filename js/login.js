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
//  function userlogin()
// {
// const url="http://127.0.0.1:8000/api/login";

// var request = new XMLHttpRequest()

// request.open('POST', url, true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((user) => {
//       console.log(user.email)
//     })
//   } else {
//     console.log('error')
//   }
// }
// request.send()
// }

// fetch(url, { 
      
//   // Adding method type 
//   method: "POST", 
    
//   // Adding body or contents to send 
//   body: JSON.stringify({  
//       body:email,password, 
//   }), 
    
//   // Adding headers to the request 
//   headers: { 
//       "Content-type": "application/json; charset=UTF-8"
//   } 
// }) 

// // Converting to JSON 
// .then(response => response.json()) 

// // Displaying results to console 
// .then(json => console.log(json),
// function(e)
// {
// if(body.email===e.target.email && body.password === e.target.password)
// {
//   // redirect to dashboard
//   window.open();
// }
// }); 


function login(email,password) {
    const url = "http://127.0.0.1:8000/api/login";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({email, password }),
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
  }) 
  
  // Converting to JSON 
  .then(response => response.json()) 
  
  // Displaying results to console 
  .then(json => console.log(json),
    // redirect to dashboard
    window.open());
  }