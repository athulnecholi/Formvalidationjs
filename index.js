const login=document.getElementById('inputform')
login.addEventListener('submit',(event)=>{
    event.preventDefault()
    let name=login['name'].value
    let email=login['email'].value
    let age=login['age'].value
    let phone=login['phone'].value
    //let gender=login['gender'].value
    let address=login['address'].value
    if (name.length<3 || name.length>50){
        alert("Name is invalid !!!(minlength - 3 maxlength - 50)")
        return
    }
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!email.toLowerCase().match(re) ){
    alert("Email is invalid!!!")
    return

  }
  if( email.length<10 || name.length>14){
    alert("Email is invalid!!")
    return
  }
  if(age>100 || age<12){
    alert("Age is invalid!! (should be between 12 and 100)")
    return

  }
  if (phone.toString().length < 10 || phone.toString().length > 14) {
    alert("Invalid Phone number!! (number should be 10 to 14 characters long)")
    return
}
if (address && address.length > 50) {
    alert("Address is too long! (maxlength - 50)");
}


    

})
