function updateViewDashboard() {
    html = '';
    const app = document.getElementById("app")

    let newTransactionId = model.filler.transactions.length - 1;
    html += /*HTML*/`
        <h2 id="dashboardHeader">Dashboard</h2>
        <br>

    
    
        ${viewNavBar()}
        <div id="transactionOverview">
    `
    for (i = 0; i < 4; i++) {
        html += /*HTML*/`
            <div class="historyLine">
                <p class="historyItem">${model.filler.transactions[newTransactionId - i].month} / ${model.filler.transactions[newTransactionId - i].year}</p>
                <p >${model.filler.transactions[newTransactionId - i].details.status}  ${model.filler.transactions[newTransactionId - i].details.amount},- </p>
                <p >${model.filler.transactions[newTransactionId - i].details.name}</p>
                <p >${model.filler.transactions[newTransactionId - i].dateAdded}</p>
            </div>
        `
    }


    html += /*HTML*/`
        </div>

         <div class="logoutBtn">
        <button onclick="goTo('front')">Log out</button>
         </div>



    `

    
    app.innerHTML = html;
    // updateView();
};