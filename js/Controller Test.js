

function pushOrder() {

    let { cakeType, name, firm, contact, phoneNr, email, idNR, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved } = formValues()
    let id = 0
    for (let i = 0; i <= model.admin.orders.length; i++) {
        id = i
    }
    //botch
    if (cakeType == 1) {
        cakeType = 'Rund Bløtkake Med Marsipan'
    }
    else if (cakeType == 2) {
        cakeType = 'Sjokoladekake Standard'
    }
    //
    model.admin.orders.push({ id, name, firm, contact, phoneNr, email, idNR, cakeType, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved })
}

function formValues() {
    let name = document.getElementById("name").value
    let firm = document.getElementById("firm").value
    let contact = document.getElementById("contact").value
    let phoneNr = document.getElementById("number").value
    let email = document.getElementById("mail").value
    let idNR = document.getElementById("idNumber").value
    let cakeType = document.getElementById('cakeSelector').value
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
    return { cakeType, name, firm, contact, phoneNr, email, idNR, size, addon, withMarsipan, woMarsipan, delivery, adress, note, deliveryDate, deliveryTime, invoiceNR, toBilling, isApproved }
}

function approveOrder(orderID) {


    model.admin.orders[orderID].isApproved = true;
    model.admin.orders[orderID].toBilling = false;


}
function cancelOrder(orderID) {
    model.admin.orders[orderID].isCanceled = true;
    model.admin.orders[orderID].toBilling = false;
    model.admin.orders[orderID].isApproved = false;


}

function toggleInspectMode(orderID) {
    let order = model.admin.orders[orderID];
    order.inspectMode = true;

    inspectMode()
}

