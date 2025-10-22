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
}