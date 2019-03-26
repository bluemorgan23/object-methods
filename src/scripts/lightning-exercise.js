const doctorVisit = {
    officeName: "Death Row Records",
    streetAddress: "Compton, CA",
    doctorName: "Dr. Dre",
    patientName: "Snoop Dogg",
    visitDate: "10/31/1999",
    amountBilled: 67985.57,
    dueDate: "4/17/2019"
};

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";
const displayContainer = document.querySelector("#display-container");

console.log(doctorVisit[dateVisited]);
console.log(doctorVisit[owed]);
console.log(doctorVisit[patient]);

const doctorValues = Object.values(doctorVisit);

console.log(doctorValues);

const section = document.createElement("section");
section.innerHTML = `<h3 style="text-decoration: underline">Doctor Exercise</h3>`
section.style.border = "2px solid red";
section.style.textAlign = "center";
document.body.appendChild(section);

const keys = Object.keys(doctorVisit);
console.log(keys);

// keys.forEach(key => {
//     let span = document.createElement("span");
//     span.innerHTML = `<p>${key}</p>`
//     section.appendChild(span);
// })

for(key in doctorVisit){
    let span = document.createElement("p");
    span.textContent = `${key}: ${doctorVisit[key]}`
    section.appendChild(span);
}

// let doctorKeysHTML = "<h1>Doctor Bill Object Keys</h1>"

// let keysSpanHTML = "";

// for (taco of Object.keys(doctorVisit)){
//     keysSpanHTML += `<span>${taco}</span>`
// }
// doctorKeysHTML += `<section>${keysSpanHTML}</section>`;
// displayContainer.innerHTML = doctorKeysHTML;


const dinner = {
    name: "Chick-Fila",
    vegetarian: false,
    mainCourse: "Spicy Chicken Sandwhich",
    sides: "Waffle Fries",
    sauces: ["Chickfila Sauce", "Buffalo Sauce"]
};

const foodArticle = document.createElement("article");
const articleHeader = document.createElement("h1")
articleHeader.textContent = "Dinner Object";
foodArticle.setAttribute("class", "food");
foodArticle.appendChild(articleHeader);
foodArticle.style.border = "2px solid red"
foodArticle.style.textAlign = "center";


const dinnerArray = Object.entries(dinner);
console.log(dinnerArray);

for(key of dinnerArray){
    foodArticle.innerHTML += `<p>${key[0]}: ${key[1]}</p>`
}

displayContainer.appendChild(foodArticle);