function addTransaction() {
    let newTransaction = {
        year: model.viewState.registration.year,
        month: model.viewState.registration.month,
        category: model.viewState.registration.category,
        details: {
            name: model.viewState.registration.details.name,
            amount: model.viewState.registration.details.amount,
            status: model.viewState.registration.details.status
        }, 
        dateAdded: new Date()
        
    }

    model.viewState.registration = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        category: model.users[model.app.userID].categories[0][0],
        details: {
            name: "",
            amount: 0,
            status: "gain/spend"
        }, 
    }

    model.users[0].transactions.push(newTransaction)
    goTo('history')
}



function getBalance() {
    let balance = 0;
    for (transaction in model.users[0].transactions) {
        if (model.users[0].transactions[transaction].details.status == "gain") {
            balance -= (model.users[0].transactions[transaction].details.amount * -1)
        } else {
            balance -= model.users[0].transactions[transaction].details.amount
        }
    }
    model.users[0].balance = balance
}
