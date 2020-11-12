function validationForm()
{
    if(document.getElementById("uname").value==""){
        alert("Enter your name");
        document.myform.username.focus();
    }else if(document.getElementById("pass").value==""){
        alert("Enter your password");
        document.myform.password.focus();
    }else if(document.getElementById("age1").value==""){
        alert("Enter your Age");
        document.myform.age.focus();
    }else if(document.getElementById("gen1").checked=="" && document.getElementById("gen2").checked==""){
        alert("Enter gender");
        document.myform.gender[0].checked=true;
    }else{
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