function goTo(pageName) {
    if (model.app.currentPage != pageName) {
        model.app.currentPage = pageName; 
        updateView(true);
    }
}

function getBalance() {
    let balance = 0;
    for (transaction in model.users[model.app.userID].transactions) {
        if (model.users[model.app.userID].transactions[transaction].details.status == "gain") {
            balance -= (model.users[model.app.userID].transactions[transaction].details.amount * -1)
        } else {
            balance -= model.users[model.app.userID].transactions[transaction].details.amount
        }
    }
    model.users[model.app.userID].balance = balance
}
