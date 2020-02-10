const model = {

    // NO CHANGES!!!!!



    cakeTypes: [
        { id: 1, name: 'Rund Bløtkake Med Marsipan', cakeFillings: [1], cakeBase: [1], cakeAddOns: [1], cakeSizes: [1] },
        { id: 2, name: 'Sjokoladekake Standard', cakeAddOns: [1, 2], cakeSizes: [2], cakePrice: [2] },
    ],


    cakeFillings: [
        { id: 1, name: 'Jordbær' },

    ],

    cakeAddOns: [
        { id: 1, name: 'Vanilje Krem', price: 75, },
        { id: 2, name: 'Oreokrem', price: 98, },
    ],

    cakeSizes: [
        { id: 1, size: '10 - 12 Pers', BasePrice: 595 },
        { id: 2, size: '10 Pers', BasePrice: 595 },

    ],


    cakeBases: [
        { id: 1, name: 'Sukkerbrødbunn' },
        { id: 2, name: 'Sjokoladebunn' },

    ],

    orderInProgress: {
        cakeTypeId: 1,
        cakeSizeId: 1,
        cakeAddonId: 1
    },


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


        calendarMonths: [
            { February: 28, },
        ],

        calendarDays: [
            { day: 'Mandag' },
            { day: 'Tirsdag' },
            { day: 'Onsdag' },
            { day: 'Torsdag' },
            { day: 'Fredag' },
            { day: 'Lørdag' },
            { day: 'Søndag' }
        ],








        // calendarItems: [{
        //     months: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
        //     day: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
        //     daysInMonths: [{ January: 31, February: 28, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31, }],
        //     Notes: [''],
        // }],




        orders: [{
            id: 0,
            name: 'Ola Nordmann',
            firm: 'ola sitt firma',
            contact: 'Ola Nordmann',
            phoneNr: '1234569987',
            email: 'ola.nordmann@betalerikkeskatt.no',
            adress: 'norgesgate 3',
            cakeType: 'Bløtekake',
            size: '10 - 12 Pers',
            idNR: '5846512',
            addon: '',
            note: 'vil ha et fjell med kake',
            invoiceNR: '123123123123',
            delivery: false,
            deliveryDate: '',
            deliveryTime: '',
            toBilling: false,
            isApproved: true,
            isCanceled: false,
            inspectMode: false,
            withMarsipan: true,
        },
        {
            id: 1,
            name: 'Kari Nordmann',
            cakeType: 'Sjokoladekake',
            size: '10 Pers',
            idNR: '45646464',
            addon: 'Vanilje Krem',
            note: 'Liker egentlig ikke krem',
            firm: 'jobberikke AS',
            contact: 'Kari Nordmann',
            phoneNr: '78897987987987',
            email: 'Kari.nordmann@betalerskatt.no',
            adress: 'ingenjobbsgate 31',
            invoiceNR: '876786786',
            delivery: true,
            deliveryDate: '',
            deliveryTime: '12:45',
            toBilling: true,
            isApproved: false,
            isCanceled: false,
            inspectMode: false,
            withMarsipan: false,
        },
        {
            id: 2,
            name: 'Brødulf Smørpåskiva',
            cakeType: 'Sjokoladekake',
            size: '10 Pers',
            idNR: '1337',
            phoneNr: 'har ikke telefon, bruk loff',
            addon: 'Oreokrem',
            note: 'vil ha brød i sjokoladekaka',
            firm: '',
            contact: 'Lofflars Smørpåskiva',
            email: 'BrødulfSmørpåskive@gmail.com',
            adress: 'Brødgata 15',
            invoiceNR: '347867862',
            delivery: false,
            deliveryDate: '',
            deliveryTime: '',
            toBilling: false,
            isApproved: false,
            isCanceled: true,
            inspectMode: false,
            withMarsipan: false,
        },

        ],

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