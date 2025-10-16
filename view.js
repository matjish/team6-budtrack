function updateView() {
    const page = model.app.currentPage;
    
    if (page=='front') updateViewFront();
    else if (page=='transactions') updateViewTransactions();
    else if (page=='dashboard') updateViewDashboard();
    else if (page=='history') updateViewHistory();
};





function updateViewFront() {
    
    html = '';
    document.getElementById('app').innerHTML += /*HTML*/`
    
    <h1 id="budtrackHeader">BudTrack</h1>
    <button onclick="goTo('dashboard')">Login</button>
    
    `
};





function updateViewDashboard() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">Dashboard</h2>
        <br>

    
    
        <div class="navBar">
            <div class="buttonRow">
                <button onclick="goTo('dashboard')">Dashboard</button>
                <button onclick="goTo('transactions')">Transactions</button>
                <button onclick="goTo('history')">History</button>

                <p id="balance">Balance: ${model.filler.balance}</p>
            </div>
        </div>
        <p>Mamma elsker meg</p>

        <button onclick="goTo('front')">Log out</button>
    `

    app.innerHTML = html;
    // updateView();
};






function updateViewTransactions() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">Dashboard</h2>
        <br>

    
    
        <div class="navBar">
            <div class="buttonRow">
                <button onclick="goTo('dashboard')">Dashboard</button>
                <button onclick="goTo('transactions')">Transactions</button>
                <button onclick="goTo('history')">History</button>

                <p id="balance">Balance: ${model.filler.balance}</p>
            </div>
        </div>
        <p></p>

    `
    
    app.innerHTML = html;
    // updateView();
}





function updateViewHistory() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">Dashboard</h2>
        <br>

    
    
        <div class="navBar">
            <div class="buttonRow">
                <button onclick="goTo('dashboard')">Dashboard</button>
                <button onclick="goTo('transactions')">Transactions</button>
                <button onclick="goTo('history')">History</button>

                <p id="balance">Balance: ${model.filler.balance}</p>
            </div>
        </div>

        <div id="history" >
    `
    for (transaction in model.filler.transactions) {
        html += /*HTML*/`
            <div id="historyLine">
                <p >${model.filler.transactions[transaction].month} / ${model.filler.transactions[transaction].year}</p>
                <p >${model.filler.transactions[transaction].details.amount},- </p>
                <p >${model.filler.transactions[transaction].details.name}</p>
                <p >${model.filler.transactions[transaction].dateAdded}</p>
            </div>
        `
    }
    
    
    html += /*HTML*/`
        </div>
    `
    app.innerHTML = html;
    // updateView();
}