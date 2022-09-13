// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let stored_Username="xyz@gmail.com";
let stored_Password="pass1234";


let intered_Username="xyz@gmail.com";
let intered_Password="pass1234";


if(stored_Username==intered_Username){

  if(stored_Password==intered_Password){
    console.log("the user can login");
  }else{
    console.log("Wrong Password");
  }
}else{
  console.log("Wrong Username");
}