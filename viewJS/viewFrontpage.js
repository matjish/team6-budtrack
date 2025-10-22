function updateViewFront() {
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <h1 class="budtrackHeader" id="budtrackHeader">BudTrack</h1>
    <div class="loginBtn">
    <button onclick="goTo('dashboard')">Login</button>
    </div>
    `
};