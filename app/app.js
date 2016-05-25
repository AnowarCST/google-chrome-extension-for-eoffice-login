var button = document.getElementById('loginBtn');

document.getElementById('userName').value=localStorage.userName;
document.getElementById('userPass').value=localStorage.userPass;
button.onclick = function() {
    $('.success').addClass('hidden');
    $('.warning').addClass('hidden');

    var userName = document.getElementById('userName').value;
    var userPass = document.getElementById('userPass').value;

    //chrome.storage.sync.set({'userName': userName,'userPass': userPass}, function() {
    //    // Notify that we saved.
    //    message('Settings saved');
    //});

    localStorage.userName=userName;
    localStorage.userPass=userPass;


    var inputEx = 'loginId='+userName+'&password='+userPass+'&isRememberMe=false';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://192.168.152.236/Home/ValidateUserLogin?"+inputEx, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          //handle the xhr response here
          console.log(xhr.responseText);
          if(xhr.responseText == 'success' || xhr.responseText == 'Success'){
            $('.success').removeClass('hidden');
          }else{
            $('.warning').removeClass('hidden');
          }
          //$('.message').addClass('hidden');
        }
      };
    xhr.send();

};

function success (){
//            alert(12);
}
function Success(){
//            alert(45);
}