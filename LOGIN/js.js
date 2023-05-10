function submitForm(event){ 
    event.preventDefault();
   var ele = document.getElementById("password");
       gmail = document.getElementById("gmail").value;
       password = document.getElementById("password").value;
    var len = ele.value.length;
    if(len<6){
        alert("Mật Khẩu phải nhiều hơn 6 ký tự");
    }else{
        if(gmail.search("abc@abc.com")<0){
            alert("Email không đúng");
        }
        else if(password.search("123456a@")<0){
            alert("Mật khẩu không đúng");
        }else{
            alert("Đăng Nhập thành công");
        }
        
    }

   
 }
 
   
    
