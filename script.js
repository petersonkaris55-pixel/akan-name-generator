document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akan-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        getAkanName();
    });
});

function getAkanName(){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    const myBirthday = document.getElementById("birthdate").value;
    const myGender = document.getElementById("gender").value;
    
    if(myBirthday === ""){
        document.getElementById('display-name').innerHTML = "Oh snap! You didn't submit a valid date!";
        return;
    }
    
    if(myGender === ""){
        document.getElementById('display-name').innerHTML = "Oh snap! You should select a gender to determine your Akan name!";
        return;
    }
    
    const dateOfBirth = new Date(myBirthday);
    const dayOfTheWeek = dateOfBirth.getDay();
    let akanName = "";
    
    if(myGender === "male"){
        akanName = maleAkanNames[dayOfTheWeek];
    }
    else {
        akanName = femaleAkanNames[dayOfTheWeek];
    }
    
    document.getElementById('display-name').innerHTML = "Born on a <strong>" + days[dayOfTheWeek] + "</strong>, your Akan name is <strong>" + akanName + "</strong>";
}