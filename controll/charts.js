function itemInList(item, list) {
    for (i in list) {
        if (list[i][0] == item) {
            return [true, i]
        }
    }
    return [false]
}