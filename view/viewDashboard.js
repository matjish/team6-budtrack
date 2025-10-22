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
    /*
    for (i = 0; i < 4; i++) {
        html += HTML`
            <div class="historyLine">
                <p class="historyItem">${model.filler.transactions[newTransactionId - i].month} / ${model.filler.transactions[newTransactionId - i].year}</p>
                <p >${model.filler.transactions[newTransactionId - i].details.status}  ${model.filler.transactions[newTransactionId - i].details.amount},- </p>
                <p >${model.filler.transactions[newTransactionId - i].details.name}</p>
                <p >${model.filler.transactions[newTransactionId - i].dateAdded}</p>
            </div>
        `
    }
    */




    html += /*HTML*/`


        </div>

        <div class="logoutBtn">
            <button onclick="goTo('front')">Log out</button>
        </div>

        <div
            id="myChart" style="width:100%; max-width:900px; height:500px;">
        </div>


    `
    // google.charts.load('current', {'packages':['corechart']});
    // google.charts.setOnLoadCallback(drawChart);

    // function drawChart() {
    //     const data = google.visualization.arrayToDataTable([
    //         ['Contry', 'Mhl'],
    //         ['Italy',54.8],
    //         ['France',48.6],
    //         ['Spain',44.4],
    //         ['USA',23.9],
    //         ['Argentina',14.5]
    //     ]);
    //     const options = {
    //         title:'World Wide Wine Production'
    //     };
    //     const chart = new google.visualization.PieChart(document.getElementById('myChart'));
    //     chart.draw(data, options);
    // }


    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let chartValues = [['categorie', 'cost']]
        for (transactions in model.users[0].transactions) {
            tempData = itemInList(model.users[0].transactions[transactions].category, chartValues)



            if (tempData[0] == false) {
                chartValues.push([model.users[0].transactions[transactions].category, model.users[0].transactions[transactions].details.amount])
            } else {
                chartValues[tempData[1]][1] += model.users[0].transactions[transactions].details.amount
            }


        }

        const data = google.visualization.arrayToDataTable(chartValues);




        const options = {
            backgroundColor: '#171717',
              colors: ['#4141ff', '#db5252', '#0b960b', '#00ffff,']
        };


        const chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
    
    app.innerHTML = html;
    // updateView();
};



function getChartColors() {
    let colorList = [];
    for (cat in model.users[0].categories) {
 
        if (model.users[0].categories[cat]) {

        }
    }
    return colorList;
}


































