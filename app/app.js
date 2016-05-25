var button = document.getElementById('loginBtn');
/**
 * Default value get from LocalStorage
 */
document.getElementById('userName').value=localStorage.userName;
document.getElementById('userPassword').value=localStorage.userPassword;

button.onclick = function()
{
    $('.success').addClass('hidden');
    $('.warning').addClass('hidden');

    var userName = document.getElementById('userName').value;
    var userPassword = document.getElementById('userPassword').value;

    /**
     * Set the value in LocalStorage
     */
    localStorage.userName=userName;
    localStorage.userPassword=userPassword;


    /**
     *
     * 192.168.152.236 is a internal IP for Business Automation Ltd
     * /Home/ValidateUserLogin?.... is the JSONP API for Eoffice login (Made by ASP.net)

     **/

    var inputEx = 'loginId='+userName+'&password='+userPassword+'&isRememberMe=false';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://192.168.152.236/Home/ValidateUserLogin?"+inputEx, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            //console.log(xhr.responseText);
            /**
             * Success/success response get from API
             */
            if(xhr.responseText == 'success' || xhr.responseText == 'Success'){
                $('.success').removeClass('hidden');
            }else{
                $('.warning').removeClass('hidden');
            }
        }
    };
    xhr.send();

};

/**
 * These functions is made for JSONP only
 */
function success ()
{

}
function Success()
{

}