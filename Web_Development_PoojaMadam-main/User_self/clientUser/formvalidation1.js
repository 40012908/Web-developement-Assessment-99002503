function validationForm(){
    if(document.getElementById("username").value==""){
        alert("Enter your username");
        document.myform.usernameinput.focus();
    }
    else if(validatecity() ){ 
    alert("Enter your city");
    document.myform.cityname.focus();
    } 
    else if(validateEmail()){ 
        alert("Enter your emailid");
        document.myform.Useremailid.focus();
    } 
    else if(validatephonenumber()){ 
            alert("Enter your phone number");
            document.myform.userphonenumber.focus();
    } else{
            validateUser();
    }
}
function validateUser(){
    var resname = ["Praveen", "Kumar", "Chaubey","prashanth"];
        urname = document.getElementById("username").value;
        flag = 0;
        for(var i = 0; i<resname.length; i++)
        {
            if (!urname.localeCompare(resname[i])){
            alert("Username already exist, please give another one");
            flag = 0;
            break;
        }
        else
        {
            flag = 1;
        }
        }
            if (flag == 1){
            resname.push(urname);
            alert("Registration is successful");
            document.myform.submit();
        } 
   }
   function validateEmail()  
    {
    var str = document.getElementById("emailid").value; 
            if (str.match(/@/g)  )
                return false;
    
            else 
                return true; 
} 
function validatecity()  
    {
    var str = document.getElementById("city").value; 
            if (str.match(/[a-z]/g) && str.match( 
                /[A-Z]/g))
                return false;
    
            else 
                return true; 
} 

function validatephonenumber()  
    {
    var str = document.getElementById("phone").value; 
            if (str.length >= 10)
                return false;
    
            else 
                return true; 
} 