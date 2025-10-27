function goTo(pageName) {
    if (model.app.currentPage != pageName) {
        model.app.currentPage = pageName; 
        updateView();
    }
}
