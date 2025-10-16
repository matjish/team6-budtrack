const model = {
    app: {
        currentPage: "front", // 'Dashboard', 'Transactions', 'History', 'filter?'
    },
    
    
    
    viewState: {
        filters: {
            year: 2025,
            month: 10,
            category: "all",
        },

    },





    filler: {
        transactions: [
            // {year: null, month: null, category: null, details: {name: null, amount: null, status: "gain"/"spend"}, dateAdded: ""},
            {year: 2025, month: 10, category: "Transport", details: {name: "bussTicket", amount: 40, status: "spend"}, dateAdded: 2025},
            {year: 2025, month: 10, category: "Transport", details: {name: "404planeTicket", amount: 4000, status: "spend"}, dateAdded: 2025},
        ],
        balance: "poor",
    }

    

}

 