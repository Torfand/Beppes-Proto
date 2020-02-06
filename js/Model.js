const model = {

    // NO CHANGES!!!!!

    

    cakeTypes: [
        { id: 1, name: 'Bløtekake Rund Med Marsipan', cakeFillings: [1], cakeBase: [1], addOns: [1], cakeSize: [1] },
        { id: 3, name: 'Sjokoladekake Standard', addOns: [1, 2], cakeSize: [2], cakePrice: [2] },
    ],


    cakeFillings: [
        { id: 1, name: 'Jordbær' },

    ],

    addOns: [
        { id: 1, name: 'Vanilje Krem', price: 75, },
        { id: 2, name: 'Oreokrem', price: 98, },
    ],

    cakeSizes: [
        { id: 1, size: '10 - 12 Pers', BasePrice: 595 },
        { id: 2, size: '10 Pers', BasePrice: 595 },

    ],


    cakeBase: [
        { id: 1, name: 'Sukkerbrødbunn' },
        { id: 2, name: 'Sjokoladebunn' },

    ],


    admin: {
        menuItems: [
            { createFunction: 'Calendar', buttonName: 'Min kalender' },
            { createFunction: 'OrdersMainMenu', buttonName: 'Bestillinger' },

        ],
        orderMenuItems: [

            { createFunction: 'AddOrder', buttonName: 'Legg til Bestilling' },
            { createFunction: 'Billing', buttonName: 'Til Fakturering' },
            { createFunction: 'ApprovedOrders', buttonName: 'Godkjente Bestillinger' },
            { createFunction: 'CanceledOrders', buttonName: 'Kanselerte Bestillinger' },

        ],


        calendarItems: [{
            months: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
            day: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
            daysInMonths: { January: 31, February: 28, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31, },
            Notes: [''],
        }],




        orders: [{
                name: 'Ola Nordmann',
                cakeType: 'Bløtekake',
                delivery: false,
                deliveryTime: '',
                toBilling: true,
                isApproved: true,
                isCanceled: false
            },
            {
                name: 'Kari Nordmann',
                cakeType: 'Sjokoladekake',
                delivery: true,
                deliveryTime: '12:45',
                toBilling: false,
                isApproved: false,
                isCanceled: false
            },
            {
                name: 'Brødulf',
                cakeType: 'Sjokoladekake',
                delivery: false,
                deliveryTime: '',
                toBilling: false,
                isApproved: false,
                isCanceled: false
            },

        ],
        orderInProgress: {
            cakeTypeId: 1
        },
        commonTasks: [
            { taskName: 'Bestille varer fra Asko', isDone: false, taskStartedby: 'Tom Erik', finishTime: '' },
            { taskName: 'Rengjøre ovn og espresso maskin', isDone: true, taskStartedby: '', finishTime: '' },
            { taskName: 'Bestille nye takeaway poser', isDone: false, taskStartedby: '', finishTime: '' },
        ],

        personalTasks: [
            { taskName: 'Kjøpe med 20 liter melk på veien.', isDone: true, taskStartedby: '', finishTime: '' },
            { taskName: 'Rengjøre kjøleskap.', isDone: false, taskStartedby: '', finishTime: '' },
        ],








    },







};