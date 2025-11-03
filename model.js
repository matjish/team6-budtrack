const model = {
    app: {
        currentPage: "front", // 'front', 'dashboard', 'transactions', 'history', 'filter?',
        userID: 0
    },
    
    
    viewState: {
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
                // {date: new Date(''), category: null, details: {name: null, amount: null, status: "gain"/"spend"}, dateAdded: ""},
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
            name: "not Kenneth",
            password: "notPassword",
            transactions: [

            ],
            categories: [
                
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