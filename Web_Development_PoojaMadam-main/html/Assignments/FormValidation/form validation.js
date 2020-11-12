function validationForm()
{
    if(document.getElementById("uname").value==""){
        alert("Enter your name");
        document.myform.username.focus();
    }else if(document.getElementById("pass").value==""){
        alert("Enter your password");   
        document.myform.password.focus();
    }
    else if(validatePassword()){
        alert("Enter LALA");
        document.myform.password.focus();
    }
    else if(document.getElementById("age1").value==""){
        alert("Enter your Age");
        document.myform.age.focus();
    }else if(document.getElementById("gen1").checked=="" && document.getElementById("gen2").checked==""){
        alert("Enter gender");
        document.myform.gender[0].checked=true;
    }else if(document.getElementById("email").value==""){
        alert("Enter your Email ID");
        document.myform.emailID.focus();}
    else if(validateEmail()){
        alert("Email acha daalo re!");
        document.myform.emailID.focus();
    }
    else if(validateAge()){
        alert("age daalna nhi aata saale?");
        document.myform.age.focus();
    }
    else{
        validateUser();
     } 
}
    
   function validateUser(){
    var resname = ["Pooja", "Ram", "Seeta"];
        urname = document.getElementById("uname").value;
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
   function validatePassword(){
    
            var str = document.getElementById("pass").value; 
            if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g) && str.length >= 8) 
                return false;
    
            else 
                return true; 
    
   }

   function validateEmail()  
    {
    var str = document.getElementById("email").value; 
            if (str.match(/@/g)  )
                return false;
    
            else 
                return true; 
} 
function validateAge(){
    var str = document.getElementById("age1").value; 
    if(str.match(/[0-9]/g))
        return false;
        else
        return true;
}
 