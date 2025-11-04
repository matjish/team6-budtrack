function goTo(pageName) {
    if (model.app.currentPage != pageName) {
        model.app.currentPage = pageName; 
        updateView(true);
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