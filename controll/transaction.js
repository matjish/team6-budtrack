function addTransaction() {
    let newTransaction = {
        date: new Date(model.viewState.registration.date),
        category: model.viewState.registration.category,
        details: {
            name: model.viewState.registration.details.name,
            amount: model.viewState.registration.details.amount,
            status: model.viewState.registration.details.status
        }, 
        dateAdded: new Date()
        
    }

    model.viewState.registration = {
        date: new Date(),
        category: model.users[model.app.userID].categories[0][0],
        details: {
            name: "",
            amount: 0,
            status: "gain"
        }, 
    }

    model.users[model.app.userID].transactions.push(newTransaction)
    goTo('history')
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
