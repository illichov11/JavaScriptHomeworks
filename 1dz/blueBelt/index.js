const credentials = {
    login: 'admin',
    password: 'qwerty',
};

document.getElementById("insert").onclick = function () {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    let div = document.createElement('div');
    
        if (credentials.login == username && credentials.password == password) {
           div.innerHTML = "КРАСАВА"
           div.style.color = "green"
           div.style.fontSize = "50px"
           div.style.textAlign = "center"
           document.body.append(div);
            
        }
    else {
        div.innerHTML = "СЛОЖНА СЛОЖНА"
        div.style.color = "red"
        div.style.fontSize = "50px"
        div.style.textAlign = "center"
    document.body.append(div)
}
}