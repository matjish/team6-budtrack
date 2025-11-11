function updateViewAddTransaction() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">Add Transactions</h2>
        <br>

    
    
        ${viewNavBar()}
        <p></p>
        <div class="transactionBars" id="transactionBars">
    `
    

    html += /*HTML*/`
    <div class="transactionBar">
        <p>Date: <input value="2025-10-06" onchange="model.viewState.registration.date = this.value" type="date" /></td>
        <p>Category: <select onchange="model.viewState.registration.category = this.value">
    `
    for (categori in model.users[model.app.userID].categories) {
        html += /*HTML*/`
            <option value="${model.users[model.app.userID].categories[categori][0]}" style="background-color: ${model.users[model.app.userID].categories[categori][1]};">${model.users[model.app.userID].categories[categori][0]}</option>
        `
    }
    html += /*HTML*/`
        </select> <button id="addCategory" onclick="goTo('addCategorie')">+</button></td>
        <p>Details: <input value="${model.viewState.registration.details.name}" onchange="model.viewState.registration.details.name = this.value" /></td>
        <p>Spendings: <input value="${model.viewState.registration.details.amount}" onchange="model.viewState.registration.details.amount = this.value - 0" type="number" min="0" /></td>

        <p>Status: <select onchange="model.viewState.registration.details.status = this.value">
            <option value="gain">Gain</option>
            <option value="spend">Spend</option>
        </select></td>
        
        <p><button onclick="addTransaction()" class="add-btn">Add Expense</button></td>
    </div>
    `




    html += /*HTML*/`
        </div>
    `


    app.innerHTML = html;
}