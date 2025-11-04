const model = {
    app: {
        currentPage: "front", // 'front', 'dashboard', 'transactions', 'history', 'filter?',
        userID: 0
    },
    
    
    viewState: {
        logIn: {
            username: "",
            password: "",
            hidden: true,
        },
        filters: {
            changingFilters: 1,
            year: 2025,
            month: 10,
            category: "all",
        },
        registration: {
            date: new Date(),
            // year: new Date().getFullYear(),
            // month: new Date().getMonth() + 1,
            category: "Transport",
            details: {
                name: "",
                amount: 0,
                status: "gain"
            }, 
        }
    },


    users: [
        {
            name: "Kenneth",
            password: "password",
            transactions: [
                // {date: new Date(''), category: "", details: {name: "", amount: 0, status: ""}, dateAdded: new Date('')},
                {date: new Date('October 6, 2025'), category: "Transport", details: {name: "bussTicket", amount: 40, status: "spend"}, dateAdded: new Date('October 6, 2025')},
                {date: new Date('May 7, 1999'), category: "Transport", details: {name: "flight 180 cancelled", amount: 400, status: "gain"}, dateAdded: new Date('May 7, 1999')},
                {date: new Date('October 6, 2025'), category: "Food", details: {name: "halloween candy", amount: 1300, status: "spend"}, dateAdded: new Date('October 6, 2025')},
                {date: new Date('October 6, 2025'), category: "Leisure", details: {name: "meth", amount: 5000, status: "spend"}, dateAdded: new Date('October 6, 2025')},
                {date: new Date('October 6, 2025'), category: "Taxes", details: {name: "Tax", amount: 13000, status: "spend"}, dateAdded: new Date('October 15, 2025')},
            ],
            categories: [
                ["Transport", "blue"], ["Food", "green"], ["Taxes", "red"], ["Leisure", "orange"],
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