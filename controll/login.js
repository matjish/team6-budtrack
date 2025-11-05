function logIn() {
    let login = model.viewState.logIn
    // console.log(login.username)
    // console.log(login.password)

    for (user in model.users) {
        // console.log(model.users[user].name)
        // console.log(model.users[user].password)

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



function registerAcount() {
    let problems = 0;
    let signIn = model.viewState.signUp;
    let newAcount = {
        name: signIn.username,
        password: signIn.password,

        transactions: [
        ],

        categories: [
        ],

        balance: 0,
    }

    // requirements
        // if (signIn.username.length < 2) {
        //     problems += 1;
        //     signIn.problemText = "username must be at least 2 letters"
        // }

        if (signIn.password.length < 8 || signIn.password.length > 28) {
            problems += 1;
            signIn.problemText = "password must be bettwen 8 and 28 letters"
        }

        if (signIn.password != signIn.passwordConfirmation) {
            problems += 1;
            signIn.problemText = "Passwords do not match"
        }

        for (user in model.users) {
            console.log(`${model.users[user].name} != ${signIn.username}`)
            if (signIn.username == model.users[user].name) {
                problems += 1;
                signIn.problemText = "Username already exists"
            }
        }



    if (problems <= 0) {
        model.users.push(newAcount)
        goTo('front')
        
        model.viewState.signUp.username = '';
        model.viewState.signUp.password = ''; 
        model.viewState.signUp.passwordConfirmation = '';
        model.viewState.signUp.hidden = true;
    } else {
        updateView()
    }
}
