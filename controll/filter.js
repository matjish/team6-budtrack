function filtering(object) {
    if (object.category.toLowerCase() == model.filter.category.toLowerCase() || model.filter.category.toLowerCase() == "all") {
        if (object.month == model.filter.month || model.filter.month == "all") {
            if (object.year == model.filter.year || model.filter.year == "all") {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}


function updateFilters() {
    if (model.viewState.filters.changingFilters < 0) {
        model.filter.category = model.viewState.filters.category;
        
        if (model.viewState.filters.month != 0) {
            model.filter.month = model.viewState.filters.month;
        } else {
            model.filter.month = "all";
        }

        if (model.viewState.filters.year != 0) {
            model.filter.year = model.viewState.filters.year;
        } else {
            model.filter.year = "all";
        }
    } 
    model.viewState.filters.year = 2025;
    model.viewState.filters.month = 10;
    model.viewState.filters.category = "all";

    model.viewState.filters.changingFilters *= -1;
    updateView();
}
