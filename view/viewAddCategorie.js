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
