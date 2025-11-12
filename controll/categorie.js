function addCategorie() {
    let newCategorie = [
        model.viewState.categorie.name,
        model.viewState.categorie.color
    ]
  
    model.viewState.categorie.name = ""
    model.viewState.categorie.color = "#ffffff"

    model.users[model.app.userID].categories.push(newCategorie)

    goTo('addTransaction')
}
