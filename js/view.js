let html;

html = '';

function updateView() {
    html = '';
    html += `
    <button class="div2 logoutButton">Logg ut</button>
    <h2 class="div3">ADMIN</h2>
    <div class="div1">
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
    html += `
    <button onclick="updateView()" class="div4 backButton">Back</button>
    <button class="div2 logoutButton">Logg ut</button>
    <h2 class="div3">ADMIN</h2>
    <div class="div1">
    `;


    for (button of model.admin.orderMenuItems) {
        html +=
            `<button onclick="${button.createFunction}" class="menuButtons">${button.buttonName}</button>`
    }
    html += `</div>`
    output.innerHTML = html;

}




function Calendar() {
    html = '';
    html += `
     <button onclick="updateView()" class="div4 backButton">Back</button>
     
    `
    output.innerHTML = html;
}