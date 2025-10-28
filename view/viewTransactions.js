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
            // console.log(model.users[0].categories[categories])
            
            for (transactions in model.users[0].transactions) {
                tempData = itemInList(model.users[model.app.userID].categories[categories][0], chartValues)
                // console.log(model.users[0].transactions[transactions])

                if (model.users[0].transactions[transactions].category == model.users[model.app.userID].categories[categories][0]) {
                    if (filtering(model.users[model.app.userID].transactions[transactions])) {
                        if (tempData[0] == false) {
                            chartValues.push([model.users[model.app.userID].categories[categories][0], model.users[0].transactions[transactions].details.amount, model.users[model.app.userID].categories[categories][1]])

                        } else {
                            chartValues[tempData[1]][1] += model.users[0].transactions[transactions].details.amount
                        }
                    }
                }
            }
        }

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
    
    <table class="transactionBar">
        <tr>
            <td><input value="${model.viewState.registration.year}" onchange="model.viewState.registration.year = this.value - 0" type="number" /></td>
            <td><input value="${model.viewState.registration.month}" onchange="model.viewState.registration.month = this.value - 0" type="number" max="12" min="0" /></td>
            <td><select onchange="model.viewState.registration.category = this.value">
        `
    for (categori in model.users[/*user id*/0].categories) {
        html += /*HTML*/`
                <option value="${model.users[0].categories[categori][0]}" style="background-color: ${model.users[0].categories[categori][1]};">${model.users[0].categories[categori][0]}</option>
        `
    }
    html += /*HTML*/`
            </select></td>
            <td><input value="${model.viewState.registration.details.name}" onchange="model.viewState.registration.details.name = this.value" /></td>
            <td><input value="${model.viewState.registration.details.amount}" onchange="model.viewState.registration.details.amount = this.value - 0" type="number" /></td>

            <td><select onchange="model.viewState.registration.details.status = this.value">
                <option value="gain">Gain</option>
                <option value="spend">Spend</option>
            </select></td>
            
            <td><button onclick="addTransaction()" class="add-btn">Add Expense</button></td>
        </tr>
    </table>
    `

    html += `
        </div>
    `


    app.innerHTML = html;
}