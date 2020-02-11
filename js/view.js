let html;
const backtoOrdersHTML = `<button onclick="OrdersMainMenu()" class="backBtn">Back</button> `
const backtoMainHTML = `<button onclick="updateView()" class="backBtn">Back</button> `

html = '';

function updateView() {
    html = '';
    html += `
    <button class="logout">Logg ut</button>
    <h2 class="header">Admin</h2> 
    <div class="menubuttons">
    
    `;

    for (button of model.admin.menuItems) {
        html += `
        <button onclick="${button.createFunction}()" class="menubuttons">${button.buttonName}</button>
        
        `

    }
    html += `</div>`
    output.innerHTML = html;
}


function OrdersMainMenu() {
    html = '';
    html += ` <button onclick = "updateView()"class = "backBtn"> Back </button> 
    <button class = "logout"> Logg ut </button> 
    <h2 class = "header"> Admin </h2>
    <div class="menubuttons">
    `;


    for (button of model.admin.orderMenuItems) {
        html +=
            ` <button onclick="${button.createFunction}()"class="menubuttons">${button.buttonName}</button>`
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
    html += `</tr>
            </table>
            </div> `;

    output.innerHTML = backtoMainHTML + html;
}

function AddOrder() {
    html = '';

    html += `

     <div class="content">
     Navn: <input id="name" type="text" value="Navn her"></input></br>
     Firma: <input id="firm" type="text" value="Firma her"></input> </br>  
     Kontakt Person: <input id="contact" type="text" value="Navn på Kontaktperson"></input> </br>
     Telefon Nummer: <input id="number" type="text" value="Tlf her"></input></br>
     Epost: <input id="mail" type="text" value="Epost her"></input></br>
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
        html += `<option  ${selected} value="${cakeType.id}">${cakeType.name}</option>`;
    }
    html += `</select>`;
}

function cakeSizes() {
    html += `Antall Pers:<select id="size">`;
    const cakeSizes = filteredListBasedOnIdAndOtherList(
        model.orderInProgress.cakeTypeId,
        model.cakeTypes, 'cakeSizes', model.cakeSizes);
    for (cakeSize of cakeSizes) {
        html += `<option>${cakeSize.size}</option>`;
    }
    html += `</select>`;
}

function cakeAddons() {

    html += `Tillegg: <select id="addon">`;

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
    Med marsipan: <input type="checkbox" id="withMarsipan"></input> </br>
    Uten marsipan: <input type="checkbox" id="woMarsipan"></input> </br>
    Notat: <input id="notes" type="text" value="Notat til oss her"></input>
    </br>
    Hentes: <input type="checkbox" ></input> </br>
    Leveres: <input type="checkbox" id="delivery"></input> </br>
    Leverings Adresse: <input id="deliveryAdress" type="text" value="Adresse her"></input> </br>
    Dato: <input type="text" id="deliveryDate" value="Leverings dato her"></input> </br>
    Tidspunkt: <input id="timeOfDelivery" type="text" value="Hente/leveringstidspunkt"></input> </br>
    Faktura nummer: <input id="invoiceNumber" type="text" value="Faktura nummer her"></input> </br>
   
     </br>
     </hr>
 
    Totalbeløp: ${model.cakeSizes[0].BasePrice}.- <br>
    Betale i kasse: <input id="" type="checkbox"></input> </br>
    Til Fakturering: <input id="toBilling" type="checkbox"></input> </br>
    <br>
    Send inn ordre : <button onclick="pushOrder()">Legg til Ordre</button>
    </br>
    </div>`;
    output.innerHTML = backtoOrdersHTML + html;
}

function Billing() {
    html = ''
    html += `
    
    <h1 class="header">Til Faktura</h1>
    `
    for (bills of model.admin.orders) {

        if (bills.toBilling == true) {
            html += ` 
            <div class="content">
            
            ${bills.name},
                      ${bills.cakeType},         
                      ${bills.deliveryDate}, 
                      ${bills.deliveryTime},
                      ${bills.size},
                      ${bills.note},
                 `


            if (bills.delivery == true) {
                html += `Skal Leveres,`
            }


            html += `<br>
                       <button onclick="toggleInspectMode(${bills.id})">Se Ordre</button>  <button onclick="approveOrder(${bills.id})">Godkjenn</button>
                       <br>
                      
                       `




        }
    }
    html += `</div>`;
    output.innerHTML = backtoOrdersHTML + html;
}

function ApprovedOrders() {
    html = '';
    html += ` 
    <div class="content" ><h1>Godkjente Bestillinger</h1>`;
    for (bills of model.admin.orders) {
        if (bills.isApproved == true) {
            html += `${bills.name},
             ${bills.cakeType} ,
             ${bills.deliveryDate}, 
             ${bills.deliveryTime},
             <br>
             <button onclick="toggleInspectMode(${bills.id})">Se ordre</button>
             <button  onclick="cancelOrder(${bills.id})">Kanseler Ordre</button>
              <br>  
             <hr>
             `;
        }

    }
    html += `</div> `
    output.innerHTML = backtoOrdersHTML + html;
}


function CanceledOrders() {
    html = '';
    html += `
     <div class="content"><h1>Kanselerte Bestillinger</h1>`;
    for (bills of model.admin.orders) {
        if (bills.isCanceled == true) {
            html += `${bills.name},
             ${bills.cakeType},
             <br>
            <button onclick="toggleInspectMode(${bills.id})">Se ordre</button> </br>`;
        }

    }
    html += `</div>`
    output.innerHTML = backtoOrdersHTML + html;
}

function inspectMode() {
    for (order of model.admin.orders) {
        if (order.inspectMode == true) {
            html = '';
            html += ` <div class="content inspect"><h1>Ordre fra ${order.name}</h1>
            Navn: ${order.name} <br>
            Firma: ${order.firm} <br>
            Kontakt Person: ${order.contact} <br>
            Epost: ${order.email} <br>
            Telefon Nummer: ${order.phoneNr} <br>
            Adresse: ${order.adress} <br>
            <br>
            Kaketype: ${order.cakeType} <br>
            Kakestørrelse: ${order.size} <br>
            Tillegg: ${order.addon} <br>`

            order.withMarsipan == true ? order.withMarsipan = 'Ja' : order.withMarsipan = 'Nei';

            html += ` Marsipan?: ${order.withMarsipan} <br> `

            if (order.delivery == true) {
                order.delivery = 'Skal Leveres'
                html += `Levering?: ${order.delivery} <br> 
                         Tidspunkt for levering: ${order.deliveryTime}<br>`
            } else {
                order.delivery = 'Skal ikke leveres';
            }

            html += `
            Notat: ${order.note} <br>
            Id-nr : ${order.idNR} <br>
            Faktura-Nummer : ${order.invoiceNR} <br>

            <button onclick="cancelOrder(${order.id})"> Kanseler Ordre </button>
          
            `
        }

    }

    html += `</div>`

    output.innerHTML = backtoOrdersHTML + html;
}