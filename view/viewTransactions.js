function updateViewTransactions() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">Transactions</h2>
        <br>

    
    
        ${viewNavBar()}
        <p></p>

        ${showFilters()}
        <div id="transactionBars" style="width:100%; height:630px;">
        </div>
    `


    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let chartValues = [['categorie', 'kr,-', { role: "style" } ]]

        for (categories in model.users[model.app.userID].categories) {
            // console.log(model.users[model.app.userID].categories[categories])
            
            for (transactions in model.users[model.app.userID].transactions) {
                tempData = itemInList(model.users[model.app.userID].categories[categories][0], chartValues)
                // console.log(model.users[model.app.userID].transactions[transactions])

                if (model.users[model.app.userID].transactions[transactions].category == model.users[model.app.userID].categories[categories][0]) {
                    if (filtering(model.users[model.app.userID].transactions[transactions])) {
                        if (tempData[0] == false) {
                            chartValues.push([model.users[model.app.userID].categories[categories][0], model.users[model.app.userID].transactions[transactions].details.amount, model.users[model.app.userID].categories[categories][1]])

                        } else {
                            chartValues[tempData[1]][1] += model.users[model.app.userID].transactions[transactions].details.amount
                        }
                    }
                }
            }
        }   
        console.log(chartValues.length)

        if (chartValues.length >= 2) {



            // Set Data
            const data = google.visualization.arrayToDataTable(chartValues);




            // Set Options
            const options = {
                backgroundColor: '#212121',
                colors: ['white'],
                'is3D' :true,

                legend: {
                    textStyle: {
                        color: 'white'
                    }
                },
                
                
                hAxis: {
                    title: 'Categories',
                    titleTextStyle: {
                        color: 'white'
                    },

                    textStyle: { // For axis labels
                        color: 'white'
                    }
                },


                vAxis: {
                    title: 'Cost',
                    titleTextStyle: {
                    color: 'white'
                    },

                    textStyle: { // For axis labels
                        color: 'white'
                    }
                }



            };




            // Draw
            const chart = new google.visualization.ColumnChart(document.getElementById('transactionBars'));
            chart.draw(data, options);
        } else {        
            document.getElementById('transactionBars').innerHTML = "<h2>no transaction found with current filter</h2>"
        }
    }



    
    app.innerHTML = html;
}








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
        </select> <button onclick="goTo('addCategorie')">+</button></td>
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


function updateViewCategoire() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">Add Categorie</h2>
        <br>

    
    
        ${viewNavBar()}
        <p></p>
        <div class="transactionBars" id="transactionBars">
    `
    

    html += /*HTML*/`
    <div class="transactionBar">
        <p>name: <input value="${model.viewState.categorie.name}" onchange="model.viewState.categorie.name = this.value" type="text" /></td>
        <p>color: <input value="${model.viewState.categorie.color}" onchange="model.viewState.categorie.color = this.value" type="color" /></td>


        <p><button onclick="addCategorie()" class="add-btn">Add categorie</button></td>
    </div>
    `




    html += /*HTML*/`
        </div>
    `


    app.innerHTML = html;
}





function addCategorie() {

    let newCategorie = [
        model.viewState.categorie.name,
        model.viewState.categorie.color
    ]
    model.viewState.categorie.name = ""
    model.viewState.categorie.color = "#ffffff"

    model.users[model.app.userID].categories.push(newCategorie)
    goTo('addTransaction')
}