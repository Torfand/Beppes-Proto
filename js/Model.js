
const model = {


    workers: [
        { id: 1, name: 'Tone', role: 'Admin' },
        { id: 2, name: 'Ansatt 1', role: 'Baker' },
        { id: 3, name: 'Ansatt 2', role: 'barista' },
        { id: 4, name: 'Ansatt 3', role: 'konditor' },
        { id: 5, name: 'Ansatt 4', role: 'vaskehjelp' },
        { id: 6, name: 'Ansatt 5', role: 'barista' },
        { id: 7, name: 'Ansatt 6', role: 'ekstrahjelp' },
    ],

    workHours: [
        { id: 1, hours: '04:00 - 10:00' },
        { id: 2, hours: '06:00 - 14:00' },
        { id: 3, hours: '07:00 - 15:00' },
        { id: 4, hours: '08:00 - 16:00' },
        { id: 5, hours: '09:00 - 17:00' },
        { id: 6, hours: '09:00 - 17:00' },
    ],



    cakeTypes: [
        { id: 1, cake: 'Bløtekake Rund Med Marsipan', cakeFillings: [1], cakeBase: [1], addOns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], cakeSize:[1], cakePrice:[1]  },
        { id: 3, cake: 'Sjokoladekake Standard', addOns: [1, 2], cakeSize: [2], cakePrice: [2] },
    ],
        

    cakeFillings: [

        { id: 1, fillings: 'Jordbær' },
  

    ],
   
    addOns: [
        { id: 1, addon: 'Vanilje Krem', price: 75, },
        { id: 2, addon: 'Oreokrem', price: 98, },
    ],

    cakeSize: [
        { id: 1, size: '10 - 12 Pers' },
        { id: 2, size: '10 Pers' },
       
    ],


    cakePrice: [
    
        { id: 1, price: 595, notes: 'bløtekake 10-12 med Marsipan' },
        { id: 2, price: 390, notes: 'Sjoko Standard 10 ' },
    ],

    cakeBase: [
        { id: 1, base: 'Sukkerbrødbunn' },
        { id: 2, base: 'Sjokoladebunn' },
      
    ],


    admin: {
        menuItems: [
            { createFunction: 'Calendar', buttonName: 'Min kalender' },
            { createFunction: 'Orders', buttonName: 'Bestillinger' },


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