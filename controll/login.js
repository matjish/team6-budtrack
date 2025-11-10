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
    const signIn = model.viewState.signUp;
    const legalText = "abcdefghijklmnopqrstuvwxyzæøå "
    let problems = 0;

    let newAcount = {
        name: signIn.username,
        password: signIn.password,

        transactions: [
        ],

        categories: [
            ["Transport", "blue"], ["Food", "green"], ["Taxes", "red"],
        ],

        balance: 0,
    }
        
    // requirements start
        for (letter in signIn.username) {
            let legalLetter = false
            for (symbol in legalText) {
                if (signIn.username[letter].toLowerCase() == legalText[symbol]) {
                    legalLetter = true
                    console.log(`${legalText[symbol]} == ${signIn.username[letter].toLowerCase()}`)
                }
            }
            if (legalLetter == false) {
                console.log(`${signIn.username[letter]} is not allowed`)
                problems +=1;
                signIn.problemText = "username may only contain letters and spaces"
            }
        }


        if (signIn.username.length < 2) {
            problems += 1;
            signIn.problemText = "Username must be at least 2 letters"
        }

        
        if (signIn.password.length < 8 || signIn.password.length > 28) {
            problems += 1;
            signIn.problemText = "Password must be between 8 and 28 letters"
        }


        if (signIn.password != signIn.passwordConfirmation) {
            problems += 1;
            signIn.problemText = "Passwords do not match"
        }


        for (user in model.users) {
            // console.log(`${model.users[user].name} != ${signIn.username}`)
            if (signIn.username == model.users[user].name) {
                problems += 1;
                signIn.problemText = "Username already exists"
            }
        }
    // requirements end


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

