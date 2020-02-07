let html;
const backtoOrdersHTML = `<button onclick="OrdersMainMenu()" class="backBtn">Back</button> `
const backtoMainHTML = `<button onclick="updateView()" class="backBtn">Back</button> `

html = '';

function updateView() {
    html = '';
    html += `
    <button class="logOutbtn">Logg ut</button>
    <h2 class="Header">Admin</h2> <div class="menuButtons">
    
    `;

    for (button of model.admin.menuItems) {
        html += `
        <button onclick="${button.createFunction}()" class="menuButtons">${button.buttonName}</button>
        
        `

    }
    html += `</div>`
    output.innerHTML = html;
}


function OrdersMainMenu() {
    html = '';
    html += ` <button onclick = "updateView()"class = "backBtn"> Back </button> 
    <button class = "logoutButton logOutbtn"> Logg ut </button> 
    <h2 class = "Header"> Admin </h2>
    <div class="menuButtons">
    `;


    for (button of model.admin.orderMenuItems) {
        html +=
            ` <button onclick="${button.createFunction}()"class="menuButtons"> ${button.buttonName} </button>`
    }
    html += `</div>`
    output.innerHTML = html;

}




function Calendar() {
    html = '';
    html = `<div class="content"> <table class="calendar">
    <tr>`

    for (day of model.admin.calendarDays) {

        html += `
                <th>${day.day}</th>`
    }
    html += `</tr>`
    html += `<tr>`
    for (month of model.admin.calendarMonths) {

        for (let i = 1; i <= month.February; i++) {
            html += `
                    <td>${i}</td>`;
            if (i % 7 == 0) {
                html += `</tr>`
            }
        }
    }
    html += `</tr></table>`;

    output.innerHTML = backtoMainHTML + html;
}

function AddOrder() {
    html = '';

    html += `

     <div class="content">
     Navn: <input id="name" type="text" value="Navn her"</input>
     Firma: <input id="firm" type="text" value="Firma her"</input>   
     Kontakt Person: <input id="contact" type="text" value="Navn på Kontaktperson"></input> 
     Telefon Nummer: <input id="number" type="text" value="Tlf her"></input>
     Epost: <input id="mail" type="text" value="Epost her"></input>
     Id-Nummer: <input id="idNumber" type ="text" value="Id Nummer her"></input>
     
     </br>
     </hr>`;
    writeOrderForms();
    output.innerHTML = backtoOrdersHTML + html;
}

function writeOrderForms() {
    cakeTypes();
    cakeSizes();
    cakeAddons();
    RestOfForm();
}

function cakeTypes() {
    html += `
        Kaketype:<select id="cakeSelector" oninput="model.orderInProgress.cakeTypeId = this.value; AddOrder()">`;
    for (cakeType of model.cakeTypes) {
        const selected = model.orderInProgress.cakeTypeId == cakeType.id ? 'selected' : '';
        html += `<option ${selected} value="${cakeType.id}">${cakeType.name}</option>`;
    }
    html += `</select>`;
}

function cakeSizes() {
    html += `Antall Pers:<select>`;
    const cakeSizes = filteredListBasedOnIdAndOtherList(
        model.orderInProgress.cakeTypeId,
        model.cakeTypes, 'cakeSizes', model.cakeSizes);
    for (cakeSize of cakeSizes) {
        html += `<option>${cakeSize.size}</option>`;
    }
    html += `</select>`;
}

function cakeAddons() {

    html += `Tillegg: <select>`;

    const cakeAddOns = filteredListBasedOnIdAndOtherList(
        model.orderInProgress.cakeTypeId,
        model.cakeTypes, 'cakeAddOns', model.cakeAddOns);
    for (cakeAddon of cakeAddOns) {
        html += `<option>${cakeAddon.name}</option>`;
    }
   html += `</select>`;
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
   
     </br>
     </hr>
 
    Totalbeløp: ${model.cakeSizes[0].BasePrice}.-
    Betale i kasse: <button onclick=""></button>
    Til Fakturering: <button onclick=""></button>
    </div>`;
    output.innerHTML = backtoOrdersHTML + html;
}

function Billing() {
    html = ''
    html += `
    <div class="content">
    <h1 class="Header">Til Faktura</h1>
    `
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
    output.innerHTML = backtoOrdersHTML + html;
}

function ApprovedOrders() {
    html = '';
    html += ` 
    <div class="content"><h1>Godkjente Bestillinger</h1>`;
    for (bills of model.admin.orders) {
        if (bills.isApproved == true) {
            html += `${bills.name} ${bills.cakeType} ${bills.deliveryTime}
             <button> Se ordre </button>`
        }
    }
    output.innerHTML = backtoOrdersHTML + html;
}


function CanceledOrders() {
    html = '';
    html += `
     <div class="content"><h1>Kanselerte Bestillinger</h1>`;
    for (bills of model.admin.orders) {
        if (bills.isCanceled == true) {
            html += `${bills.name} ${bills.cakeType} ${bills.deliveryTime}
            <button> Se ordre </button>`
        } else {
            html = `
            <div class="content"> <h1 class="Header">Ingen Ordre er Kanselerte</h1></div>`;
        }

        output.innerHTML = backtoOrdersHTML + html;
    }
}