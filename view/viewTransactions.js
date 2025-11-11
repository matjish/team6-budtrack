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
        // console.log(chartValues.length)

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