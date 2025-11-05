const model = {
    app: {
        currentPage: "front", // 'front', 'dashboard', 'transactions', 'history', 'filter?',
        userID: 0
    },
    

    viewState: {
        logIn: { // updateViewFront();
            username: "",
            password: "",
            hidden: true,
        },

        signUp: { // updateViewSignUp();
            username: "",
            password: "",
            passwordConfirmation: "",
            hidden: true,
            problemText: "",
        },

        filters: { // showFilters()
            changingFilters: 1,
            year: 2025,
            month: 10,
            category: "all",
        },

        registration: { // updateViewAddTransaction();
            date: new Date(),
            category: "Transport",
            details: {
                name: "",
                amount: 0,
                status: "gain"
            }, 
        },

        categorie: { // updateViewCategorie();
            name: "",
            color: "#ffffff",
        },
    },


    users: [
        {
            name: "Kenneth",
            password: "password",
            transactions: [
                // {date: new Date(''), category: "", details: {name: "", amount: 0, status: ""}, dateAdded: new Date('')},
                {date: new Date('October 6, 2025'), category: "Transport", details: {name: "Bus Ticket", amount: 40, status: "spend"}, dateAdded: new Date('October 6, 2025')},
                {date: new Date('May 7, 1999'), category: "Transport", details: {name: "Flight 180 cancelled", amount: 400, status: "gain"}, dateAdded: new Date('May 7, 1999')},
                {date: new Date('October 6, 2025'), category: "Food", details: {name: "Halloween candy", amount: 1300, status: "spend"}, dateAdded: new Date('October 6, 2025')},
                {date: new Date('October 6, 2025'), category: "Leisure", details: {name: "Meth", amount: 5000, status: "spend"}, dateAdded: new Date('October 6, 2025')},
                {date: new Date('October 6, 2025'), category: "Taxes", details: {name: "Tax", amount: 13000, status: "spend"}, dateAdded: new Date('October 15, 2025')},
                {date: new Date('October 15, 2025'), category: "Income", details: {name: "Lønn", amount: 45000, status: "gain"}, dateAdded: new Date('October 15, 2025')},
            ],
            categories: [
                ["Transport", "blue"], ["Food", "green"], ["Taxes", "red"], ["Leisure", "orange"], ["Income", "lime"],
            ],
            balance: 0,
        },

        {
            name: "notKenneth",
            password: "notPassword",
            transactions: [
                {date: new Date('Febuary 8, 2025'), category: "Festive", details: {name: "birthday cake", amount: 300, status: "spend"}, dateAdded: new Date('November 4, 2025')},
                {date: new Date('December 26, 2019'), category: "Fun", details: {name: "Ark: Survival Evolved", amount: 105, status: "spend"}, dateAdded: new Date('November 4, 2025')},
            ],
            categories: [
                ["Festive", "pink"], ["Fun", "cyan"]
            ],
            balance: 0,
        },

    ],
    filter: {
        year: "all",
        month: "all",
        category: "all",
    },

}