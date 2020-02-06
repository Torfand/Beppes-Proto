let html;
const backHTML = `<button onclick="OrdersMainMenu()" class="div4 backButton">Back</button> `

html = '';

function updateView() {
    html = '';
    html += `
    <button class="div2 logoutButton">Logg ut</button>
    <h2 class="div3">Admin</h2>
    <div class="div1">
    `;

    for (button of model.admin.menuItems) {
        html += `
        <button onclick="${button.createFunction}()" class="menuButtons">${button.buttonName}</button>
        
        `

    }
    html += `</div>`;
    output.innerHTML = html + backHTML;
}


function OrdersMainMenu() {
    html = '';
    html += `
    <button onclick="updateView()" class="div4 backButton">Back</button>
    <button class="div2 logoutButton">Logg ut</button>
    <h2 class="div3">ADMIN</h2>
    <div class="div1">
    `;


    for (button of model.admin.orderMenuItems) {
        html +=
            `<button onclick="${button.createFunction}()" class="menuButtons">${button.buttonName}</button>`
    }
    html += `</div>`;
    output.innerHTML = html + backHTML;

}




function Calendar() {
    html = '';
    html += `
     <button onclick="updateView()" class="div4 backButton">Back</button>`;
    output.innerHTML = html + backHTML;
}

function AddOrder() {
    html = '';
    html += `
    <button onclick="OrdersMainMenu()" class="div4 backButton">Back</button>
     <div class="orderForm">
     Navn: <input id="name" type="text" value="Navn her"</input>
     Firma: <input id="firm" type="text" value="Firma her"</input>   
     Kontakt Person: <input id="contact" type="text" value="Navn på Kontaktperson"></input> 
     Telefon Nummer: <input id="number" type="text" value="Tlf her"></input>
     Epost: <input id="mail" type="text" value="Epost her"></input>
     Id-Nummer: <input id="idNumber" type ="text" value="Id Nummer her"></input>
     </div>
     </br>
     </hr>`;
    Cakeloops();
}

function Cakeloops() {
    html += `<div class="foodForm">
        Kaketype:<select id="cakeSelector" oninput="model.admin.orderInProgress.cakeTypeId = this.value; AddOrder()">`;
    for (cakeType of model.cakeTypes) {
        const selected = model.orderInProgress.cakeTypeId == cakeType.id ? 'selected' : '';
        html += `<option ${selected} value="${cakeType.id}">${cakeType.name}</option>`;
    }
    html += `</select>`;
    html += `Antall Pers:<select>`;

    const selectedCakeTypeId = model.orderInProgress.cakeTypeId;
    // const selectedCakeTypeObj = model.cakeTypes.filter(ct => ct.id == selectedCakeTypeId)[0];
    // const cakeSizeIds = selectedCakeTypeObj.cakeSize;
    // const cakeSizes = model.cakeSizes.filter(cs => cakeSizeIds.includes(cs.id));

    // const selectedCakeTypeObj = getObjectFromId(model.admin.orderInProgress.cakeTypeId, model.cakeTypes);
    // const cakeSizes = filterListById(selectedCakeTypeObj.cakeSize, model.cakeSizes);

    const cakeSizes = filteredListBasedOnIdAndOtherList(
        model.orderInProgress.cakeTypeId,
        model.cakeTypes, 'cakeSize', model.cakeSizes);

    for (sizes of cakeSizes) {
        html += `<option>${sizes.size}</option>`;
    }
    html += `</select>`;
    html += `Tillegg: <select>`;
    for (addon of model.addOns) {
        html += `<option>${addon.name}</option>`;
    }
    html += `</select>`;
    RestOfForm();
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

function RestOfForm() {
    html += ` </br>
    Med marsipan: <input type="checkbox"></input> </br>
    Uten marsipan: <input type="checkbox"></input> </br>
    Notat: <input id="note" type="text" value="Notat til oss her"></input>
    Hentes: <input type="checkbox"></input> </br>
    Leveres: <input type="checkbox"></input> </br>
    Leverings Adresse: <input id="deliveryAdress" type="text" value="Adresse her"></input>
    Dato: <input type="text" id="deliveryDate" value="Leverings dato her"></input>
    Tidspunkt: <input id="timeOfDelivery" type="text" value="Hente/leveringstidspunkt"></input>
    Faktura nummer: <input id="invoiceNumber" type="text" value="Faktura nummer her"></input>
     </div>
     </br>
     </hr>
    <div class="finishOrder">
    Totalbeløp: <div>${model.cakeSizes[0].BasePrice}.-</div>
    Betale i kasse: <button onclick=""></button>
    Til Fakturering: <button onclick=""></button>
    </div>`;
    output.innerHTML = html + backHTML;
}

function Billing() {
    html = ''
    html +=
        `
        <button onclick="OrdersMainMenu()" class="div4 backButton">Back</button>
        <h1 class="div3">Til Fakturering</h1>
        <div class="div1">`
    for (bills of model.admin.orders) {
        if (bills.toBilling == true) {
            html += ` ${bills.name}  ${bills.cakeType}   ${bills.deliveryTime}
            <button>Se Ordre</button>  <button>Godkjenn</button>
                                   `
            if (bills.delivery == true) {
                html += `Skal Leveres`
            }

        }
    }
    html += `</div>`;
    output.innerHTML = html + backHTML;
}

function ApprovedOrders() {
    html = '';
    html += ` 
    <button onclick="OrdersMainMenu()" class="div4 backButton">Back</button>
    <h1 class="div3">Godkjente Bestillinger</h1> <div class="div1">`
    for (bills of model.admin.orders) {
        if (bills.isApproved == true) {
            html += `${bills.name} ${bills.cakeType} ${bills.deliveryTime}
             <button> Se ordre </button> `

        }
    }
    output.innerHTML = html;
}


function CanceledOrders() {
    html = '';
    html += `
    <button onclick="OrdersMainMenu()" class="div4 backButton">Back</button>
    <h1 class="div3">Kanselerte Bestillinger</h1> <div class="div1">`
    for (bills of model.admin.orders) {
        if (bills.isCanceled == true) {
            html += `${bills.name} ${bills.cakeType} ${bills.deliveryTime}
            <button> Se ordre </button>`
        } else {
            html = `
            <div class="div1"> Ingen Ordre er Kanselerte </div>`
        }

    }
    output.innerHTML = html + backHTML;
}