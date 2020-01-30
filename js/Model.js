const info = {

    workers: [
        { id: 1, name: 'Tone', role: 'Admin' },
        { id: 2, name: 'Ansatt 1', role: 'Baker' },
        { id: 3, name: 'Ansatt 2', role: 'barista' },
        { id: 4, name: 'Ansatt 3', role: 'konditor' },
        { name: 'Ansatt 4', role: 'vaskehjelp' },
        { name: 'Ansatt 5', role: 'barista' },
        { name: 'Ansatt 6', role: 'ekstrahjelp' },
    ],

    workHours: [
        { hours: '04:00 - 10:00' },
        { hours: '06:00 - 14:00' },
        { hours: '07:00 - 15:00' },
        { hours: '08:00 - 16:00' },
        { hours: '09:00 - 17:00' },
        { hours: '09:00 - 17:00' },
    ],

    cakeTypes: {


        // bløtkake: {
        //     cakename: 'Bløtkake',
        //     cakeFlavours: ['Jordbær', 'bringebær', 'ananas', 'aprikos', 'bryllupsblanding',
        //         'eple', 'vaniljekrem', 'valnøtter', 'mandler', 'krokan', 'banan',
        //         'Rørte Bær', 'Bringebærmousse', 'jordbærmousse', 'Sjokolademousse', 'Sjømannskake (Mandler & Ananas)'
        //     ],
        //     cakeBase: ['Sukkerbrødbunn']
        // },

        // bløtkake_glutenfri: {
        //     cakename: 'Bløtkake - Glutenfri',
        //     cakeFlavours: ['Jordbær', 'bringebær', 'ananas', 'aprikos', 'bryllupsblanding',
        //         'eple', 'vaniljekrem', 'valnøtter', 'mandler', 'krokan', 'banan',
        //         'Rørte Bær', 'Bringebærmousse', 'jordbærmousse', 'Sjokolademousse', 'Sjømannskake (Mandler & Ananas)'
        //     ],
        //     cakeBase: ['Sukkerbrødbunn']
        // },

        // sjokoladekake: {
        //     cakename: 'Sjokoladekake',
        //     cakeFlavours: ['Sjokolade', 'Bringebær', 'Banan', 'Vaniljekrem', 'Ostekrem', 'Bringebærmousse', 'Oreokrem'],
        //     cakeBase: ['Sjokoladebunn']
        // },

        // moussekake: {
        //     cakename: 'Moussekake',
        //     cakeFlavours: ['Bringebær', 'Jordbær', 'Sjokolade'],
        //     cakeBase: ['Sjokoladebunn', 'Browniebunn', 'Sukkerbrødbunn', 'Nøttebunn']
        // },

        // raw_kake: {
        //     cakename: 'Raw kaker',
        //     cakeFlavours: ['sjokolade', 'Bringebær', 'blåbær', 'skogsbær'],
        //     cakeBase: ['browniebunn', 'Sjokoladebunn', 'sukkerbrødbunn', 'nøttebunn']
        // },


    },












}



const model = {



    admin: {
        menuItems: [

            { createFunction: 'Logout', buttonName: 'Logg ut' },
            { createFunction: 'Calendar', buttonName: 'Min kalender' },
            { createFunction: 'Tasks', buttonName: 'Oppgaver' },
            { createFunction: 'Orders', buttonName: 'Bestillinger' },
            { createFunction: 'Roster', buttonName: 'Vaktliste' },
            { createFunction: 'Administrative', buttonName: 'Administrativt' },

        ],

        calendarItems: [{
            months: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
            day: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
            daysInMonths: { January: 31, February: 28, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31, },
            Notes: [''],
        }],


        roster: [
            { name: info.workers[0].name, workHours: info.workHours[0].hours },
            { name: info.workers[1].name, workHours: info.workHours[1].hours },
            { name: info.workers[2].name, workHours: info.workHours[2].hours },
            { name: info.workers[3].name, workHours: info.workHours[3].hours },
            { name: info.workers[4].name, workHours: info.workHours[4].hours },
            { name: info.workers[5].name, workHours: info.workHours[5].hours },

        ],

        orders: [
            { name: 'Ola Nordmann', cakeType: 'Bløtekake', delivery: false, deliveryTime: '' },
            { name: 'Kari Nordmann', cakeType: 'Sjokoladekake', delivery: true, deliveryTime: '12,45' },
        ],

        commonTasks: [
            { taskName: 'Bestille varer fra Asko', isDone: false },
            { taskName: 'Rengjøre ovn og espresso maskin', isDone: true },
            { taskName: 'Bestille nye takeaway poser', isDone: false },
        ],

        personalTasks: [
            { taskName: 'Kjøpe med 20 liter melk på veien.', isDone: true },
            { taskName: 'Rengjøre kjøleskap.', isDone: false },
        ],








    },







};