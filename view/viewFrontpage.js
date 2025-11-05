function updateViewFront() {
    let html = /*HTML*/`
    <h1 class="budtrackHeader" id="budtrackHeader">BudTrack</h1>


    <div class="logInField">

        <p>
            Username: <input value="${model.viewState.logIn.username}" onchange="model.viewState.logIn.username = this.value" type="text" />
        </p>
    `
    if (model.viewState.logIn.hidden == true) {
        html += /*HTML*/`
            <p>
                Password: <input value="${model.viewState.logIn.password}" onchange="model.viewState.logIn.password = this.value" type="password"/> <button onclick="model.viewState.logIn.hidden = false; updateView()">⦸</button>
            </p>
        `
    } else {
        html += /*HTML*/`
            <p>
                Password: <input value="${model.viewState.logIn.password}" onchange="model.viewState.logIn.password = this.value" type="text"/>    <button onclick="model.viewState.logIn.hidden = true; updateView()">👁</button>
            </p>
        `
    }

    html += /*HTML*/`
    </div>

    <div class="loginBtn">
        <button onclick="logIn()">Login</button>
        <button onclick="goTo('signUp'); model.viewState.logIn.username = ''; model.viewState.logIn.password = ''; model.viewState.logIn.hidden = true;">sign up</button>
    </div>
    `
    document.getElementById('app').innerHTML = html
};





function updateViewSignUp() {
    let html = /*HTML*/`
    <h1 class="budtrackHeader" id="budtrackHeader">BudTrack</h1>


    <div class="logInField">

        <p>
            Username: <input value="${model.viewState.signUp.username}" onchange="model.viewState.signUp.username = this.value" type="text" />
        </p>
    `
    if (model.viewState.signUp.hidden == true) {
        html += /*HTML*/`
            <p>
                Password: <input value="${model.viewState.signUp.password}" onchange="model.viewState.signUp.password = this.value" type="password" />
            </p>
        `
    } else {
        html += /*HTML*/`
            <p>
                Password: <input value="${model.viewState.signUp.password}" onchange="model.viewState.signUp.password = this.value" type="text" />
            </p>
        `
    }
    if (model.viewState.signUp.hidden == true) {
        html += /*HTML*/`
            <p>
                Password: <input value="${model.viewState.signUp.passwordConfirmation}" onchange="model.viewState.signUp.passwordConfirmation = this.value" type="password" /><button onclick="model.viewState.signUp.hidden = false; updateView()">⦸</button>
            </p>
        `
    } else {
        html += /*HTML*/`
            <p>
                Password: <input value="${model.viewState.signUp.passwordConfirmation}" onchange="model.viewState.signUp.passwordConfirmation = this.value" type="text" /><button onclick="model.viewState.signUp.hidden = true; updateView()">👁</button>
            </p>
        `
    }



    html += /*HTML*/`
        <p>
            ${model.viewState.signUp.problemText}
        </p>
    </div>

    <div class="loginBtn">
        <button onclick="registerAcount();">confirm</button>
        <button onclick="goTo('front'); model.viewState.signUp.username = ''; model.viewState.signUp.password = ''; model.viewState.signUp.passwordConfirmation = ''; model.viewState.signUp.hidden = true;">back</button>
    </div>
    `


    document.getElementById('app').innerHTML = html
};
