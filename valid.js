let email=document.querySelector(".check1");
email.addEventListener("click",emailValid);
function emailValid(){
    let input=prompt(`enter an email address  
Exp:bohubrihi@gmail.com or aaaaa@student.bohubrihi.ac.bd or bohubrihi.learn@edu.com.bd`);
    let val1=/[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,}(.[A-z]{2,6}.[A-z]{2,6})?(.[A-z]{2,6})?$/gm;
    if(val1.test(input)){
        alert("Your email address is valid")
        console.log(input)
        console.log("Your email address is valid")
    }
    
    else{
        alert('Your email address is invalid');
        console.log(input)
        console.log("Your email address is invalid")
    }

}
let phn=document.querySelector(".check2");
phn.addEventListener("click",phnValid);
function phnValid(){
    let input=prompt(`enter a Phn Number 
Exp:+8801723456789 or 01723456789 or 8801723456789`);
    let val1=/^(\+)?(88)?01[0-9][0-9]{8}$/gm;
    if(val1.test(input)){
        alert("Your Phn Number is valid")
        console.log(input)
        console.log("Your Phn Number is valid")
    }
    else{
        alert('Your Phn Number is invalid');
        console.log(input)
        console.log("Your Phn Number is invalid")
    }

}
let post=document.querySelector(".check3");
post.addEventListener("click",postValid);
function postValid(){
    let input=prompt(`enter a Postal Code 
Exp: 2333 or 1111 or (must 4 digit)`);
    let val1=/^[0-9]{4}$/gm;
    if(val1.test(input)){
        alert("Your postal code is valid")
        console.log(input)
        console.log("Your postal code is valid")
    }
    else{
        alert('Your postal code is invalid');
        console.log(input)
        console.log("Your postal code is invalid")
    }

}
let full=document.querySelector(".check4");
full.addEventListener("click",fullValid);
function fullValid(){
    let input=prompt(`enter a Full Name 
Exp: Aaaa Khan or aaaa Khan or Aaaa khan or Firstname(atleast 3 letter) LastName(atleast 2 letter) `);
    let val1=/^[A-Za-z]{3,}[\s]{1,}[a-zA-Z]{2,}$/gm;
    if(val1.test(input)){
        alert("Your Full Name is valid")
        console.log(input)
        console.log("Your Full Name is valid")
    }
    else{
        alert('Your Full Name is invalid');
        console.log(input)
        console.log("Your Full Name is invalid")
    }

}
