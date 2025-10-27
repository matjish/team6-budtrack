function itemInList(item, list) {
<<<<<<< Updated upstream
    // console.log(item)
    // console.log(list)
    for (i in list) {
        // console.log(i)
=======
    for (i in list) {
>>>>>>> Stashed changes
        if (list[i][0] == item) {
            return [true, i]
        }
    }
    return [false]
}