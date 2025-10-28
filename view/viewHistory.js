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

    for (i = model.users[model.app.userID].transactions.length - 1; i >= 0; i--) {
        // console.log(model.users[model.app.userID].transactions[i].details.name)
        if (filtering(model.users[model.app.userID].transactions[i])) {
            // console.log("added")
            html += /*HTML*/`
                <div class="historyLine">
                    <p class="historyItem">${model.users[model.app.userID].transactions[i].month} / ${model.users[model.app.userID].transactions[i].year}</p>
                    <p >${model.users[model.app.userID].transactions[i].details.status}  ${model.users[model.app.userID].transactions[i].details.amount},- </p>
                    <p >${model.users[model.app.userID].transactions[i].details.name}</p>
                    <p >${model.users[model.app.userID].transactions[i].category}</p>
                    <p >${model.users[model.app.userID].transactions[i].dateAdded}</p>
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






function showFilters() {
    let html = '<div id="filter">';
    html += '<button onclick="updateFilters()" class="add-btn">filter</button>';

    if (model.viewState.filters.changingFilters < 0) {
        html += `
        <div class="filter">
            <input value="${model.viewState.filters.year}" onchange="model.viewState.filters.year = this.value" type="number" />
            <input value="${model.viewState.filters.month}" onchange="model.viewState.filters.month = this.value" type="number" min="0" max="12" />
            <select onchange="model.viewState.filters.category = this.value">
                <option value="all" style="background-color: white;">all</option>
        `;

        for (let categori in model.users[0].categories) {
            const cat = model.users[0].categories[categori];
            html += `<option value="${cat[0]}" style="background-color: ${cat[1]};">${cat[0]}</option>`;
        }

        html += `
            </select>
        </div>
        `;
    } else {
        // show active filter chips / actions
        if (model.filter.year != "all") html += `<button class="add-btn" onclick="model.filter.year = 'all'; updateView()">year: ${model.filter.year}</button>`;
        if (model.filter.month != "all") html += `<button class="add-btn" onclick="model.filter.month = 'all'; updateView()">month: ${model.filter.month}</button>`;
        if (model.filter.category != "all") html += `<button class="add-btn" onclick="model.filter.category = 'all'; updateView()">category: ${model.filter.category}</button>`;

        html += `<button onClick="goTo('addTransaction')" id="AddTransactionButton" class="add-btn">Add Transaction</button>`;
    }

    html += '</div>';
    return html;
}