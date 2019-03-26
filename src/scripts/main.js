const mustang = {
    color: "Midnight Blue",
    year: 1976,
    length: 120,
    width: 62,
    height: 47
};

console.log(mustang.color);

const colorProperty = "color";
console.log(mustang[colorProperty]);

const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
];

const container = document.querySelector("#display-container");

console.log(container);

allCars.forEach(car => {

    const values = Object.values(car);

    // console.log(values)
    // values.forEach(value => {
    //     container.innerHTML += `<p>${value}</p>`
    // })

    for(const value of values){
        container.innerHTML += `<p>${value}<p>`
    }

})

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
container.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(allCars[0])) {
  container.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
container.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      container.innerHTML += `<div>${value}</div>`
    }
})

const bug = {
    flying: true,
    legs: 6
}

for (const entry of Object.entries(bug)) {
    console.log(entry)
}

container.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {
    container.innerHTML += "<hr/>"

    for (const entry of Object.entries(car)) {
        container.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})