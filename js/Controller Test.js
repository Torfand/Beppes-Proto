function pushOrder() {

    let { cakeType, name, firm, contact, phoneNr, email, idNR, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved, cakeFilling, cakeBase, isCanceled } = formValues()
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

    //
    model.admin.orders.push({ id, name, firm, contact, phoneNr, email, idNR, cakeType, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved, cakeFilling, cakeBase, isCanceled })
    return alert('Ordre lagt til')
}

function formValues() {
    let name = document.getElementById("name").value
    let firm = document.getElementById("firm").value
    let contact = document.getElementById("contact").value
    let phoneNr = document.getElementById("number").value
    let email = document.getElementById("mail").value
    let idNR = document.getElementById("idNumber").value
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
    return { cakeType, name, firm, contact, phoneNr, email, idNR, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved, cakeFilling, cakeBase, isCanceled }
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