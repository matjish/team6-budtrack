function updateViewDashboard() {
    html = '';
    const app = document.getElementById("app")

    let newTransactionId = model.users[0].transactions.length - 1;
    html += /*HTML*/`
        <h2 id="dashboardHeader">Dashboard</h2>
        <br>

    
    
        ${viewNavBar()}
        <div id="transactionOverview">
    `




    html += /*HTML*/`


        </div>

        <div class="logoutBtn">
            <button onclick="goTo('front')">Log out</button>
        </div>

        <div
            id="myChart" style="width:100%; height:630px;">
        </div>

          <p id="exchangeRateTitle">NOK Exchange Rates</p>
        
          <div id="output">Loading...
          </div>
        

    `
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let chartValues = [['categorie', 'cost']]
        let chartColors = []
        for (categories in model.users[model.app.userID].categories) {
            // console.log(model.users[0].categories[categories])
            
            for (transactions in model.users[0].transactions) {
                tempData = itemInList(model.users[model.app.userID].categories[categories][0], chartValues)
                // console.log(model.users[0].transactions[transactions])

                if (model.users[0].transactions[transactions].category == model.users[model.app.userID].categories[categories][0]) {

                    if (tempData[0] == false) {
                        chartValues.push([model.users[model.app.userID].categories[categories][0], model.users[0].transactions[transactions].details.amount])
                        chartColors.push(model.users[model.app.userID].categories[categories][1])
                    } else {
                        chartValues[tempData[1]][1] += model.users[0].transactions[transactions].details.amount
                    }
                }
            }
        }




        const data = google.visualization.arrayToDataTable(chartValues);
        // console.table(chartValues)



        const options = {
            backgroundColor: '#212121',
            colors: chartColors,
            'is3D' :true,

            legend: {
                textStyle: {
                    color: 'white'
                   
                  
                }
            }
        };


        const chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
    
    app.innerHTML = html;
    // updateView();

    getRates();
};

    async function getRates() {
      const output = document.getElementById('output');
      try {
        const response = await fetch('https://api.frankfurter.app/latest?from=NOK&to=EUR,GBP,USD');
        const data = await response.json();
        const rates = data.rates;

        let displayText = `1 NOK equals:<br><br>`;
        for (const [currency, rate] of Object.entries(rates)) {
          displayText += `${currency}: ${rate}<br>`;
        }

        output.innerHTML = displayText;
        console.log(rates);
      } catch (error) {
        output.textContent = 'Error fetching data.';
        console.error('Error:', error);
      }
    };

    
        
    
    