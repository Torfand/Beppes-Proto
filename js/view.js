let html;
let popup;
const backtoOrdersHTML = `<button onclick="OrdersMainMenu()" class="backBtn">Tilbake</button> `
const backtoMainHTML = `<button onclick="updateView()" class="backBtn">Tilbake</button> `
let toggleCalendarPane = false;

function updateView() {
    html = '';
    html += `
    <h2 class="header">Admin</h2> 
    <div class="menubuttons">
    
    `;

    for (button of model.admin.menuItems) {
        html += `
        <button onclick="${button.createFunction}()" class="menubuttons">${button.buttonName}</button>`;

    }
    html += `</div>`;
    output.innerHTML = html;
}

function OrdersMainMenu() {
    html = '';
    html += `   <button onclick = "updateView()"class = "backBtn"> Tilbake </button> 
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
    html = `
    <button onclick="updateView()" class="backBtn">Tilbake</button>
    <div class="content" id="content">
    <table>
    <tr>
    
    `;

    for (day of model.admin.calendarDays) {

        html += `
                <th>${day.day}</th>`
    }
    html += `</tr>`
    html += `<tr>`
    let x;
    for (month of model.admin.calendarMonths) {

        for (let i = 1; i <= month.February; i++) {
            x = new Date(2020, 1, i).toLocaleDateString("nb-no")
            html += `
                    <td onclick="${month.createFunction}(this), openNav(${i})" id="${i}">${x}</td>`;


            if (i % 7 == 0) {
                html += `</tr>`;

            }
        }
    }
    html += `
                </tr>
                </table>
                </div>
    
                `;


    output.innerHTML = html;
}


function dailyNote(date) {
    makecomparisonIndex();
    popup = `<div id="mySidenav" class="sidenav"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>`;
    popup += `<button id="${date.innerHTML}" onclick="editNote(this)">Legg til Notat</button> 
    <div id="note">`
    for (order of model.admin.orders) {
        if (date.innerHTML == order.deliveryDate) {
            popup += `<ul>
            <li>Name: ${order.name}</li>
            <li>Kaketype: ${order.cakeType}</li>
            <li>Tidspunkt: ${order.deliveryTime}</li>
                    </ul>`
        }
    }
    popup += `</div> <div>`;
    for (activity of model.admin.calendarNotes) {
        if (date.innerHTML == activity.date) {
            popup += `<ul>
            <li>${activity.task}</li>
            </ul>`
        }
    }
    popup += `</div> </div>`;
    output.innerHTML = backtoOrdersHTML + html + popup;

}

function editNote(date) {
    let note = document.getElementById('note');
    note.innerHTML = `<input type="text" id="noteInput"></input><button id="${date.id}" onclick="saveNote(this)">Lagre notat</button>`;

}

function openNav(id) {
    document.getElementById(id).classList.add('active');
    setTimeout(() => { extendSidebar() }, 1)


}

function extendSidebar() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("content").style.marginRight = "500px";
    document.getElementById("content").style.padding = "10px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").style.marginRight = "0";

}




function AddOrder() {
    html = '';
    html += `
     <div class="content addOrder">
     Navn: <input id="name" type="text" placeholder="Navn her"></input></br>
     Firma: <input id="firm" type="text" placeholder="Firma her"></input> </br>  
     Kontakt Person: <input id="contact" type="text" placeholder="Navn på Kontaktperson"></input> </br>
     Telefon Nummer: <input id="number" type="text" placeholder="Tlf her"></input></br>
     Epost: <input id="mail" type="text" placeholder="Epost her"></input></br>
     Id-Nummer: <input id="idNumber" type ="text" placeholder="Id Nummer her"></input> 
     
     </br>
     </hr>`;
    writeOrderForms();
    output.innerHTML = backtoOrdersHTML + html;
}




function writeOrderForms() {
    cakeTypes();
    cakeFillings();
    cakeBases();
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

function cakeFillings() {
    html += `<br> Kakefyll:<select id="cakeFillingSelector">`;
    const cakeFillings = filteredListBasedOnIdAndOtherList(
        model.orderInProgress.cakeTypeId,
        model.cakeTypes, 'cakeFillings', model.cakeFillings);
    for (cakeFilling of cakeFillings) {
        html += `<option>${cakeFilling.name}</option>`;
    }
    html += `</select>`;
}

function cakeBases() {
    html += `<br> Kakebunn:<select id="cakeBaseSelector">`;
    const cakeBases = filteredListBasedOnIdAndOtherList(
        model.orderInProgress.cakeTypeId,
        model.cakeTypes, 'cakeBases', model.cakeBases);
    for (cakeBase of cakeBases) {
        html += `<option>${cakeBase.name}</option>`;
    }
    html += `</select>`;
}

function cakeSizes() {
    html += `<br> Antall Pers:<select id="size">`;
    const cakeSizes = filteredListBasedOnIdAndOtherList(
        model.orderInProgress.cakeTypeId,
        model.cakeTypes, 'cakeSizes', model.cakeSizes);
    for (cakeSize of cakeSizes) {
        html += `<option>${cakeSize.size}</option>`;
    }
    html += `</select>`;
}

function cakeAddons() {
    html += `<br> Tillegg: <select id="addon">`;
    const cakeAddOns = filteredListBasedOnIdAndOtherList(
        model.orderInProgress.cakeTypeId,
        model.cakeTypes, 'cakeAddOns', model.cakeAddOns);
    for (cakeAddon of cakeAddOns) {
        html += `<option>${cakeAddon.name}</option>`;
    }
    html += `</select>`;
}





function RestOfForm() {
    html += ` </br>
    Med marsipan: <input type="checkbox" id="withMarsipan"></input> </br>
    Uten marsipan: <input type="checkbox" id="woMarsipan"></input> </br>
    Notat: <input id="notes" type="text" placeholder="Notater her"></input>
    </br>
    Hentes: <input type="checkbox" ></input> </br>
    Leveres: <input type="checkbox" id="delivery"></input> </br>
    Leverings Adresse: <input id="deliveryAdress" type="text" placeholder="Adresse her"></input> </br>
    Dato: <input type="date" id="deliveryDate"></input> </br>
    Tidspunkt: <input id="timeOfDelivery" type="text" placeholder="Hente/leveringstidspunkt"></input> </br>
    Faktura nummer: <input id="invoiceNumber" type="text" placeholder="Faktura nummer her"></input> </br>
   
    
    Totalbeløp: ${model.cakeSizes[0].BasePrice}.- <br>
    Betale i kasse: <input id="payInStore" type="checkbox"></input> </br>
    Til Fakturering: <input id="toBilling" type="checkbox"></input> </br>
    <br>
    Send inn ordre : <button onclick="pushOrder(), convertAndfilterdates() ">Legg til Ordre</button>
    </br>
    </div>`;
    output.innerHTML = backtoOrdersHTML + html;
}





function Billing() {
    html = ''
    html += `<h1 class="header">Til Faktura</h1>
    <div class="content billing"> `
    for (bills of model.admin.orders) {
        if (bills.toBilling == true) {
            html += ` 
                      ${bills.name},
                      ${bills.cakeType},
                      ${bills.size},`
            bills.delivery == true ? html += ` Skal Leveres,` : ''
            html += `<br>
                       <button onclick="toggleInspectMode(${bills.id})">Se Ordre</button>  <button onclick="approveOrder(${bills.id}), Billing()">Godkjenn</button>
                       <br>
                        `
        }
    }
    html += `</div>`;
    output.innerHTML = backtoOrdersHTML + html;
}

function ApprovedOrders() {
    html = '';
    html += `<h1 class="header">Godkjente Bestillinger</h1>
    <div class="content approved">`
    for (bills of model.admin.orders) {
        if (bills.isApproved == true) {
            html +=
                `${bills.name},
             ${bills.cakeType} ,
             ${bills.deliveryDate},
             <br>
             <button onclick="toggleInspectMode(${bills.id})">Se ordre</button>
            <br>`;
        }
    }
    html += `</div> `
    output.innerHTML = backtoOrdersHTML + html;
}


function CanceledOrders() {
    html = '';
    html += `<h1 class="header">Kanselerte Bestillinger</h1>
     <div class="content canceled">`;
    for (bills of model.admin.orders) {
        if (bills.isCanceled == true) {
            html += `${bills.name},
                 ${bills.cakeType},
            <br>  
            <button onclick="toggleInspectMode(${bills.id})">Se ordre</button> </br>
            `;
        }
    }
    html += `</div>`;
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
            if (order.delivery != true) {
                order.delivery = 'Skal ikke leveres';
            } else {
                order.delivery = 'Skal Leveres'
                html += `Levering?: ${order.delivery} <br> 
                         Tidspunkt for levering: ${order.deliveryTime}<br>`
            }
            html += `
            Notat: ${order.note} <br>
            Id-nr : ${order.idNR} <br>
            Faktura-Nummer : ${order.invoiceNR} <br> `
            order.isCanceled == false ? html += `<button onclick="cancelOrder(${order.id})"> Kanseler Ordre </button> ` : ''
        }
    }
    html += `</div>`
    output.innerHTML = backtoOrdersHTML + html;
}