function updateViewFront() {
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <h1 class="budtrackHeader" id="budtrackHeader">BudTrack</h1>


    <div class="logInField">

        <p>
            username: <input value="${model.viewState.logIn.username}" onchange="model.viewState.logIn.username = this.value" type="text" />
        </p>

        <p>
            password: <input value="${model.viewState.logIn.password}" onchange="model.viewState.logIn.password = this.value" type="text" />
        </p>
    </div>

    <div class="loginBtn">
        <button onclick="logIn()">Login</button>
    </div>
    `
};



function logIn() {
    let login = model.viewState.logIn
    console.log(login.username)
    console.log(login.password)

    for (user in model.users) {
        console.log(model.users[user].name)
        console.log(model.users[user].password)

        if (login.username == model.users[user].name) {
            if (login.password == model.users[user].password) {
                model.app.userID = user
                goTo('dashboard')
                return;
            }
        }
    }
}


function userIdLogIn() {
    let login = model.viewState.logIn
    for (user in model.users) {
        if (login.username == model.users[user].name) {
            if (login.password == model.users[user].password) {
                return user;
            }
        }
    }
}