function updateViewHistory() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">History</h2>
        <br>

    

        ${viewNavBar()}

        <div id="history" >
        ${showFilters()}
            <div class="historyLine">
                <p class="historyItem">Date / Month / Year</p>
                <p >Spendings</p>
                <p >Details</p>
                <p >Category</p>
            </div>
    `

    for (i = model.users[model.app.userID].transactions.length - 1; i >= 0; i--) {
        // console.log(model.users[model.app.userID].transactions[i].details.name)
        if (filtering(model.users[model.app.userID].transactions[i])) {
            // console.log("added")
            html += /*HTML*/`
                <div class="historyLine">
                    <p class="historyItem">${model.users[model.app.userID].transactions[i].date.getDate()} / ${numberToMonth(model.users[model.app.userID].transactions[i].date.getMonth())} / ${model.users[model.app.userID].transactions[i].date.getFullYear()}</p>
                    <p >${model.users[model.app.userID].transactions[i].details.status}  ${model.users[model.app.userID].transactions[i].details.amount},- </p>
                    <p >${model.users[model.app.userID].transactions[i].details.name}</p>
                    <p >${model.users[model.app.userID].transactions[i].category}</p>
                </div>
            `
        }
    }


    html += /*HTML*/`
        </div>

    `
    app.innerHTML = html;
    // updateView();
}