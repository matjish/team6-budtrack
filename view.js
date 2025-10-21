function updateView() {
  const app = document.getElementById('app');
  const page = model.app.currentPage;

  
  app.classList.add('fade-out');
  app.classList.remove('fade-in');

  
  setTimeout(() => {
    getBalance();

    if (page == 'front') updateViewFront();
    else if (page == 'transactions') updateViewTransactions();
    else if (page == 'dashboard') updateViewDashboard();
    else if (page == 'history') updateViewHistory();
    else if (page == 'addTransaction') updateViewAddTransaction();

    
    requestAnimationFrame(() => {
      app.classList.remove('fade-out');
      app.classList.add('fade-in');
    });
  }, 300); 
}






function updateViewFront() {
    
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <h1 class="budtrackHeader" id="budtrackHeader">BudTrack</h1>
    <div class="loginBtn">
    <button onclick="goTo('dashboard')">Login</button>
    </div>
    `
};

function viewNavBar() {
    return /*HTML*/`
        <div class="navBar">
            <div class="buttonRow">
                <button onclick="goTo('dashboard')">Dashboard</button>
                <button onclick="goTo('transactions')">Transactions</button>
                <button onclick="goTo('history')">History</button>

                <p id="balance">Balance: ${model.filler.balance}</p>
            </div>
        </div>


    `
}







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




function updateFilters() {
    if (model.viewState.filters.changingFilters < 0) {
        model.filter.category = model.viewState.filters.category;
        if (model.viewState.filters.month != 0) {
            model.filter.month = model.viewState.filters.month;
        }
        if (model.viewState.filters.year != 0) {
            model.filter.year = model.viewState.filters.year;
        }

    } 
    model.viewState.filters.year = 2025;
    model.viewState.filters.month = 10;
    model.viewState.filters.category = "all";

    model.viewState.filters.changingFilters *= -1;
    updateView();
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
}


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






function updateViewAddTransaction() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">History</h2>
        <br>

    
    
        ${viewNavBar()}

        <div id="history">
    `



    html += /*HTML*/`
        <input value="${model.viewState.registration.year}" onchange="model.viewState.registration.year = this.value"/>
        <input value="${model.viewState.registration.month}" onchange="model.viewState.registration.month = this.value"/>
        <input value="${model.viewState.registration.category}" onchange="model.viewState.registration.category = this.value"/>

        <input value="${model.viewState.registration.details.name}" onchange="model.viewState.registration.details.name = this.value"/>
        <input value="${model.viewState.registration.details.amount}" onchange="model.viewState.registration.details.amount = this.value"/>
        <input value="${model.viewState.registration.details.status}" onchange="model.viewState.registration.details.status = this.value"/>

        <button onclick="addTransaction()">+</button>
    `



   app.innerHTML = html;
    // updateView();
}








// unUsed code
function updateViewTransactions() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">Transactions</h2>
        <br>

    
    
        ${viewNavBar()}
        <p></p>
        <div class="transactionBars" id="transactionBars">
    `
    
    html += /*HTML*/`
    
    <table class="transactionBar">
        <tr>
            <td><input value="${model.viewState.registration.year}" onchange="model.viewState.registration.year = this.value" type="number" /></td>
            <td><input value="${model.viewState.registration.month}" onchange="model.viewState.registration.month = this.value" type="number" /></td>
            <td><select onchange="model.viewState.filters.category = this.value">
        `
    for (categori in model.users[/*user id*/0].categories) {
        html += /*HTML*/`
                <option value="${model.users[0].categories[categori][0]}" style="background-color: ${model.users[0].categories[categori][1]};">${model.users[0].categories[categori][0]}</option>
        `
    }
    html += /*HTML*/`
            </select></td>
            <td><input value="${model.viewState.registration.details.name}" onchange="model.viewState.registration.details.name = this.value" /></td>
            <td><input value="${model.viewState.registration.details.amount}" onchange="model.viewState.registration.details.amount = this.value" type="number" /></td>

            <td><select onchange="model.viewState.registration.details.status = this.value">
                <option value="gain">gain</option>
                <option value="spend">spend</option>
            </select></td>
            
            <td><button onclick="addTransaction()" class="add-btn">+</button></td>
        </tr>
    </table>

       
    `
    
    /*
    for (categorie in model.filler.categories) {
        let barHeight = 0;
        for (transaction in model.filler.transactions) {
            // console.log(model.filler.transactions[transaction].category == model.filler.categories[categorie][0])
            if (model.filler.transactions[transaction].category == model.filler.categories[categorie][0]) {

                if (model.filler.transactions[transaction].details.status == "gain") {
                    barHeight += model.filler.transactions[transaction].details.amount
                    // console.log(model.filler.transactions[transaction].details.amount)
                }

            }

        }
        // console.log(barHeight, model.filler.categories[categorie])
        html += `
            <div style="height: ${barHeight/2}px; width: ${100/model.filler.categories.length}%;background-color: ${model.filler.categories[categorie][1]};" class="actionBar">
            </div>
        `
    }
    html += `
        </div>
        <div style="width: 100%; background-color: black; height: 5px;"></div>
        <div id="transactionBars">
    `


    for (categorie in model.filler.categories) {
        let barHeight = 0;
        for (transaction in model.filler.transactions) {
            // console.log(model.filler.transactions[transaction].category == model.filler.categories[categorie][0])
            if (model.filler.transactions[transaction].category == model.filler.categories[categorie][0]) {

                if (model.filler.transactions[transaction].details.status != "gain") {
                    barHeight += model.filler.transactions[transaction].details.amount
                    // console.log(model.filler.transactions[transaction].details.amount)
                }

            }

        }
        // console.log(barHeight, model.filler.categories[categorie])
        html += `
            <div style="height: ${barHeight/2}px; width: ${100/model.filler.categories.length}%;background-color: ${model.filler.categories[categorie][1]};" class="actionBar">
            </div>
        `
    }
    */
    html += `
        </div>
    `


    app.innerHTML = html;
    // updateView();
}
