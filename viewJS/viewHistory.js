<<<<<<< HEAD:viewJS/viewHistory.js
function updateViewHistory() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">History</h2>
        <br>

    

        ${viewNavBar()}

        <div id="history" >
        ${showFilters()}
    `
    for (transaction in model.filler.transactions) {
        if (filtering(model.filler.transactions[transaction])) {
            html += /*HTML*/`
                <div class="historyLine">
                    <p class="historyItem">${model.filler.transactions[transaction].month} / ${model.filler.transactions[transaction].year}</p>
                    <p >${model.filler.transactions[transaction].details.status}  ${model.filler.transactions[transaction].details.amount},- </p>
                    <p >${model.filler.transactions[transaction].details.name}</p>
                    <p >${model.filler.transactions[transaction].dateAdded}</p>
                </div>
            `
        }
    }


    html += /*HTML*/`
        </div>

    `
    app.innerHTML = html;
    // updateView();
=======
function updateViewHistory() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">History</h2>
        <br>

    

        ${viewNavBar()}

        <div id="history" >
        ${showFilters()}
    `
    /*
    for (transaction in model.filler.transactions) {
        if (filtering(model.filler.transactions[transaction])) {
            html += /*HTML*//*`
                <div class="historyLine">
                    <p class="historyItem">${model.filler.transactions[transaction].month} / ${model.filler.transactions[transaction].year}</p>
                    <p >${model.filler.transactions[transaction].details.status}  ${model.filler.transactions[transaction].details.amount},- </p>
                    <p >${model.filler.transactions[transaction].details.name}</p>
                    <p >${model.filler.transactions[transaction].dateAdded}</p>
                </div>
            `
        }
    } 
    */
    for (i = model.users[model.app.userID].transactions.length - 1; i >= 0; i--) {
        console.log(model.users[model.app.userID].transactions[i].details.name)
        if (filtering(model.users[model.app.userID].transactions[i])) {
            console.log("added")
            html += /*HTML*/`
                <div class="historyLine">
                    <p class="historyItem">${model.users[model.app.userID].transactions[i].month} / ${model.users[model.app.userID].transactions[i].year}</p>
                    <p >${model.users[model.app.userID].transactions[i].details.status}  ${model.users[model.app.userID].transactions[i].details.amount},- </p>
                    <p >${model.users[model.app.userID].transactions[i].details.name}</p>
                    <p >${model.users[model.app.userID].transactions[i].dateAdded}</p>
                </div>
            `
        } else { console.log("not") }
        console.log()
    }
    for (i = 0; i >= 10; i++) {
        console.log()
    }

    html += /*HTML*/`
        </div>

    `
    app.innerHTML = html;
    // updateView();
}






function showFilters() {
    let html = '<button onclick="updateFilters()">filter</button>';

    if (model.viewState.filters.changingFilters < 0) {
        html += /*HTML*/`
            <input value="${model.viewState.filters.year}" onchange="model.viewState.filters.year = this.value" type="number" />
            <input value="${model.viewState.filters.month}" onchange="model.viewState.filters.month = this.value" type="number" min="0" max="12" />
            <select onchange="model.viewState.filters.category = this.value">
        `
        for (categori in model.users[/*user id*/0].categories) {
            html += `
                <option value="${model.users[0].categories[categori][0]}" style="background-color: ${model.users[0].categories[categori][1]};">${model.users[0].categories[categori][0]}</option>
            `
        }
        html += `
            </select>
        `



    } else {

        if (model.filter.year != "all") html += `<button onclick="model.filter.year = 'all'; updateView()">year: ${model.filter.year}</button>`

        if (model.filter.month != "all") html += `<button onclick="model.filter.month = 'all'; updateView()">month: ${model.filter.month}</button>`

        if (model.filter.category != "all") html += `<button onclick="model.filter.category = 'all'; updateView()">category: ${model.filter.category}</button>`
    }

        
    return html;
>>>>>>> d3093c23bdc7e85a95c8b8ab8c4a6ce96f79a12e:view/viewHistory.js
}