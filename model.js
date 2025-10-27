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
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            category: "",
            details: {
                name: "",
                amount: 0,
                status: "gain/spend"
            }, 
        }
    },




    filler: {
        transactions: [
            // {year: null, month: null, category: null, details: {name: null, amount: null, status: "gain"/"spend"}, dateAdded: ""},
            {year: 2025, month: 10, category: "Transport", details: {name: "bussTicket", amount: 40, status: "spend"}, dateAdded: new Date('October 6, 2025')},
            {year: 1999, month: 5, category: "Transport", details: {name: "flight 180 cancelled", amount: 400, status: "gain"}, dateAdded: new Date('May 7, 1999')},
            {year: 2025, month: 10, category: "Food", details: {name: "halloween candy", amount: 1300, status: "spend"}, dateAdded: new Date('October 6, 2025')},
            {year: 2025, month: 10, category: "Leisur", details: {name: "meth", amount: 5000, status: "spend"}, dateAdded: new Date('October 6, 2025')},
        ],
        categories: [
            ["Transport", "blue"], ["Food", "green"], ["Taxes", "red"], ["Leisur", "cyan"],
        ],
        balance: "poor",
    },


    users: [
        {
            name: "Kenneth",
            transactions: [
                // {year: null, month: null, category: null, details: {name: null, amount: null, status: "gain"/"spend"}, dateAdded: ""},
                {year: 2025, month: 10, category: "Transport", details: {name: "bussTicket", amount: 40, status: "spend"}, dateAdded: new Date('October 6, 2025')},
                {year: 1999, month: 5, category: "Transport", details: {name: "flight 180 cancelled", amount: 400, status: "gain"}, dateAdded: new Date('May 7, 1999')},
                {year: 2025, month: 10, category: "Food", details: {name: "halloween candy", amount: 1300, status: "spend"}, dateAdded: new Date('October 6, 2025')},
                {year: 2025, month: 10, category: "Leisur", details: {name: "meth", amount: 5000, status: "spend"}, dateAdded: new Date('October 6, 2025')},
            ],
            categories: [
                ["Transport", "blue"], ["Food", "green"], ["Taxes", "red"], ["Leisur", "cyan"],
            ],
            balance: 100000,
        },
        {
            name: "not Kenneth",
            transactions: [
                // {year: null, month: null, category: null, details: {name: null, amount: null, status: "gain"/"spend"}, dateAdded: ""},
            ],
            categories: [
                
            ],
            balance: 0,
        },

    ],
    filter: {
        year: 2025,
        month: 10,
        category: "all",
    },

}