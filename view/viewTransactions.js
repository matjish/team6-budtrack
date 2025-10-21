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