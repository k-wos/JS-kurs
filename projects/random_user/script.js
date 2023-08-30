window.onload = function(){
    fetch("https://randomuser.me/api").then(response => response.json()).then(data => getData(data));
}

function getData(data){
    console.log(data);
    let result = data.results[0];
    let fullname = result.name.title + " " + result.name.first + " " + result.name.last;
    let img = result.picture.large;
    let username = result.login.username;
    let email = result.email;
    let country = result.location.timezone.description;

    document.getElementById("avatar-img").src=img;
    document.getElementById("full-name").innerHTML = fullname;
    document.getElementById("username").innerHTML = "@" + username;
    document.getElementById("email").innerHTML = email;
    document.getElementById("country").innerHTML = country;
}