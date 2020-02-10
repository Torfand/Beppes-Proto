function createOrder() {
    let name = document.getElementById("name").value
    let firm = document.getElementById("firm").value
    let contact = document.getElementById("contact").value
    let phoneNr = document.getElementById("number").value
    let email = document.getElementById("mail").value
    let idNR = document.getElementById("idNumber").value
    let caketype = document.getElementById("cakeSelector").value
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
    return name;

}
function contollertest(name){
    model.admin.orders.push(name,)
}