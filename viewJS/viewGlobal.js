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