function pushOrder() {
    let { cakeType, name, firm, contact, phoneNr, email, idNR, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved, cakeFilling, cakeBase, isCanceled, dateConvertedtoMS, } = formValues()

    let id = 0
    for (let i = 0; i <= model.admin.orders.length; i++) {
        id = i
    }
    //botch
    if (cakeType == 1) {
        cakeType = 'Rund Bløtkake Med Marsipan'
    } else if (cakeType == 2) {
        cakeType = 'Sjokoladekake Standard'
    } else if (cakeType == 3) {
        cakeType = 'Raw kake'
    }
    if (name == '' && contact == '' && phoneNr == '' && email == '' && adress == '' ||
        name == '' || contact == '' || phoneNr == '' || email == '' || adress == '') {
        return alert('Navn, Kontakt Person, Tlf Nr, E-Post og Adresse må være utfylt');
    }
    model.admin.orders.push({ id, name, firm, contact, phoneNr, email, idNR, cakeType, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved, cakeFilling, cakeBase, isCanceled, dateConvertedtoMS, })

    convertDateToMS();
    OrdersMainMenu();
    return alert('Ordre lagt til')

}

function convertAndfilterdates() {
    convertDateToMS();
    getDateFromMS();
    // makecomparisonIndex();

}

function formValues() {
    let name = document.getElementById("name").value
    let firm = document.getElementById("firm")
    if (firm == null) {
        firm = 'ingen'
    } else {
        firm = firm.value
    }
    let contact = document.getElementById("contact").value
    let phoneNr = document.getElementById("number").value
    let email = document.getElementById("mail").value
    let idNR = document.getElementById("idNumber")
    if (idNR == null) {
        idNR = 'ingen'
    } else {
        idNR = idNR.value
    }
    let cakeType = document.getElementById('cakeSelector').value
    let cakeFilling = document.getElementById('cakeFillingSelector').value
    let cakeBase = document.getElementById('cakeBaseSelector').value
    let size = document.getElementById("size").value
    let addon = document.getElementById("addon").value
    let withMarsipan = document.getElementById("withMarsipan").checked
    let woMarsipan = document.getElementById("woMarsipan").checked
    let delivery = document.getElementById("delivery").checked
    let adress = document.getElementById("deliveryAdress").value
    let note = document.getElementById("notes").value
    let deliveryDate = document.getElementById("deliveryDate").value
    let deliveryTime = document.getElementById("timeOfDelivery").value
    let invoiceNR = document.getElementById("invoiceNumber").value
    let toBilling = document.getElementById("toBilling").checked
    let isApproved = false
    let isCanceled = false;
    let dateConvertedtoMS = false;

    return { cakeType, name, firm, contact, phoneNr, email, idNR, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved, cakeFilling, cakeBase, isCanceled, dateConvertedtoMS, }
}

function approveOrder(orderID) {
    model.admin.orders[orderID].isApproved = true;
    model.admin.orders[orderID].toBilling = false;


}

function cancelOrder(orderID) {
    let confirmCancelation = confirm('Er du sikker på at du vil kanselere denne ordren?')

    if (confirmCancelation == true) {
        model.admin.orders[orderID].isCanceled = true;
        model.admin.orders[orderID].toBilling = false;
        model.admin.orders[orderID].isApproved = false;

    } else {
        return;

    }



}

function toggleInspectMode(orderID) {
    let order = model.admin.orders[orderID];
    order.inspectMode = true;

    inspectMode()
    order.inspectMode = false;
}

function convertDateToMS() {

    for (date of model.admin.orders) {
        if (date.dateConvertedtoMS == false) {
            d = Date.parse(date.deliveryDate)
            let getDateFromMS = false;
            model.admin.calendarTempTime.push({ d, getDateFromMS })
            date.dateConvertedtoMS = true;



        }

    }
}



function getDateFromMS() {

    for (second of model.admin.calendarTempTime) {
        if (second.getDateFromMS == false) {
            t = new Date(second.d).toLocaleDateString("nb-no");

            model.admin.calendarTempDates.push({ t, })
            second.getDateFromMS = true;
        }

    }
}

function filteredListBasedOnIdAndOtherList(id, listToLookupIdIn, fieldName, listToBeFiltered) {
    const obj = getObjectFromId(id, listToLookupIdIn);
    return filterListById(obj[fieldName], listToBeFiltered);
}

function getObjectFromId(id, list) {
    return list.filter(e => e.id == id)[0];
}

function filterListById(listOfIds, listOfObjects) {
    return listOfObjects.filter(e => listOfIds.includes(e.id));
}

function makecomparisonIndex() {

    for (let order in model.admin.orders) {
        for (let date in model.admin.orders[order]) {

            if (model.admin.orders[order].hasOwnProperty("deliveryDate") && date == 'deliveryDate') {
                model.admin.orders[order].deliveryDate = model.admin.calendarTempDates[order].t



            }
        }
    }
}

function saveNote(selected) {

    let id = 0
    for (let i = 0; i <= model.admin.calendarNotes.length; i++) {
        id = i
    }
    let date = selected.id
    let isNew = true;
    let task = document.getElementById('noteInput').value;
    model.admin.calendarNotes.push({ id, task, date, isNew })
    dailyNote(date);






}