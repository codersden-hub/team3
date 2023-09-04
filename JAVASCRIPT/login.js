'use strict'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8JAb4osqYS6rivJnnkmQ82JVvwkcMEig",
    authDomain: "quiz-app-47033.firebaseapp.com",
    projectId: "quiz-app-47033",
    storageBucket: "quiz-app-47033.appspot.com",
    messagingSenderId: "24143724232",
    appId: "1:24143724232:web:484ff6a734e94c69d3affd",
    measurementId: "G-6L45FW40Z1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

const email = document.querySelector('.email')
const passWord = document.querySelector('.pasword')
//const result = document.querySelector('.display')
const login = document.querySelector('.login-btn')


login.addEventListener('click', function(event){
     event.preventDefault()
 var logObj = {
   password: passWord.value,
   email: email.value,
 }
      
 signInWithEmailAndPassword(auth, logObj.email, logObj.password
    ).then(function(success){
        result.innerText = ` welcome ${logObj.email}, you are signed in`
        alert("Sigin succesfully")
        window.location.href = "/team3/index.html"
        
    })
    .catch(function(error){
        alert( error)
       /*
        const errorCode = error.code;
      const errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          // Display error message in red text
          result.innerText = 'Wrong password';
          result.style.color = 'red';
        } else {
          // Handle other login errors
          result.innerText = errorMessage;
          result.style.color = 'red';
        }
       */
    })
    

   
    console.log(logObj)

    /*
 signInWithEmailAndPassword(auth, logObj.email, logObj.password)
  .then((userCredential) => {
    // Signed in 
    result.innerText = `${obj.username} you are signed In?`
        alert("Signup Sucessfull")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

*/

})



