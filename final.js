const firebaseConfig = {
    apiKey: "AIzaSyCgrkqLcfbG2QBoqjrCPA_6fSbiN2ql85Y",
    authDomain: "bnccproject-60bca.firebaseapp.com",
    databaseURL: "https://bnccproject-60bca-default-rtdb.firebaseio.com",
    projectId: "bnccproject-60bca",
    storageBucket: "bnccproject-60bca.appspot.com",
    messagingSenderId: "1016286123103",
    appId: "1:1016286123103:web:da69c666ff2ec038a5f7ea"
};
  
firebase.initializeApp(firebaseConfig);

let database = firebase.database().ref("userdata");

let form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    let name = document.getElementById("fullname").value; 
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let comment = document.getElementById("comment").value;
    e.preventDefault();

    console.log(name);

    let arr = [];

    if (name == '' || name == null) { 
        arr.push("Your name is required");
    }
    if (email == '' || email == null) { 
        arr.push("Your email is required");
    }

    if (!email.includes("@")) { 
        arr.push("Your email address is not valid");
    }

    if (!phone.startsWith("08")) {
        arr.push("Your phone number is not valid");
    }
    if (phone.length >= 14) { 
        arr.push("Your phone number is too long");
    }

    if (comment == '' || comment == null) { 
        arr.push("Your comment is required");
    }

    let words = comment.split(" ").length-1;
    if (words < 4 || words > 100) { 
        arr.push("Comment must not be longer than 100 words or shorter than 5");
    }

    if (arr.length == 0) {
         let newData = database.push();
         newData.set({
             name,
             email,
             phone,
             comment
         });

        alert("Your data is submitted");
        form.reset();
    }
    else{ 
        alert(arr.join("\n"));
    }

});
