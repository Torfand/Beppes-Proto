let model;
model = {
    menuItems: [
        { headerName: 'Navn' },
        { createFunction: 'logout', buttonName: 'Logg ut' },
        { createFunction: 'Calendar', buttonName: 'Min kalender' },
        { createFunction: 'Tasks', buttonName: 'Oppgaver' },
        { createFunction: 'Orders', buttonName: 'Bestillinger' },
        { createFunction: 'Roster', buttonName: 'Vaktliste' },
        { createFunction: 'Administrative', buttonName: 'Administrativt' },

    ],

    calendarItems: [
        months = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
        day = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'],
        daysInMonths = { January: 31, February: 28, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31, },

    ]

};