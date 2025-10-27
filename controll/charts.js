function itemInList(item, list) {
    // console.log(item)
    // console.log(list)
    for (i in list) {
        // console.log(i)
        if (list[i][0] == item) {
            return [true, i]
        }
    }
    return [false]
}