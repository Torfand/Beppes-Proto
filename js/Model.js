const model = {

    // NO CHANGES!!!!!



    cakeTypes: [
        { id: 1, name: 'Rund Bløtkake Med Marsipan', cakeFillings: [1, 2, 3, 5], cakeBases: [1], cakeAddOns: [1, 4, 5], cakeSizes: [1], },
        { id: 2, name: 'Sjokoladekake Standard', cakeFillings: [4], cakeBases: [2], cakeAddOns: [1, 2], cakeSizes: [2], cakePrice: [2, ] },
        { id: 3, name: 'Raw kake', cakeFillings: [4, 5, 6, 7], cakeBases: [6], cakeAddOns: [1, 3], cakeSizes: [2], cakePrice: [2] },
    ],


    cakeFillings: [
        { id: 1, name: 'Jordbær' },
        { id: 2, name: 'Banan' },
        { id: 3, name: 'Mango' },
        { id: 4, name: 'Sjokolade' },
        { id: 5, name: 'Bringebær' },
        { id: 6, name: 'Blåbær' },
        { id: 7, name: 'Skogsbær' },

    ],

    cakeAddOns: [
        { id: 1, name: 'Vanilje Krem', price: 75, },
        { id: 2, name: 'Oreokrem', price: 98, },
        { id: 3, name: 'Jordbærkrem', price: 70, },
        { id: 4, name: 'Bilde', price: 220, },
        { id: 5, name: 'Text', price: 0, },


    ],

    cakeSizes: [
        { id: 1, size: '10 - 12 Pers', BasePrice: 595 },
        { id: 2, size: '10 Pers', BasePrice: 595 },
        { id: 3, size: '6 - 8 Pers', BasePrice: 595 },
        { id: 4, size: '12 - 15 Pers', BasePrice: 595 },
        { id: 5, size: '16 - 23 Pers', BasePrice: 595 },
        { id: 6, size: '24 - 30 Pers', BasePrice: 595 },

    ],


    cakeBases: [
        { id: 1, name: 'Sukkerbrødbunn' },
        { id: 2, name: 'Sjokoladebunn' },
        { id: 3, name: 'Glutenfri Sjokoladebunn' },
        { id: 4, name: 'Nøttebunn' },
        { id: 5, name: 'Browniebunn' },
        { id: 6, name: 'Standardbunn' },


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
            { createFunction: 'dailyNote', February: 28, },
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

        calendarTempTime: [

        ],
        calendarTempDates: [

        ],


        calendarNotes: [
            { id: 1, orders: [0], otherTask: 'Vask gulvet', notes: '', }

        ],

        orders: [{
                id: 0,
                name: 'Ola Nordmann',
                cakeType: 'Bløtekake',
                size: '10 - 12 Pers',
                idNR: '5846512',
                addon: '',
                note: 'vil ha et fjell med kake',
                firm: 'ola sitt firma',
                contact: 'Ola Nordmann',
                phoneNr: '1234569987',
                email: 'ola.nordmann@betalerikkeskatt.no',
                adress: 'norgesgate 3',
                invoiceNR: '123123123123',
                delivery: false,
                deliveryDate: '2020-02-01',
                dateConvertedtoMS: false,

                deliveryTime: '',
                toBilling: false,
                isApproved: true,
                isCanceled: false,
                withMarsipan: true,
                inspectMode: false,
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
                deliveryDate: '2020-02-02',
                dateConvertedtoMS: false,


                deliveryTime: '12:45',
                toBilling: true,
                isApproved: false,
                inspectMode: false,
                isCanceled: false,
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
                deliveryDate: '2020-02-03',
                dateConvertedtoMS: false,


                deliveryTime: '',
                toBilling: false,
                isApproved: false,
                isCanceled: true,
                inspectMode: false,
                withMarsipan: false,
            },




        ],













    },







};