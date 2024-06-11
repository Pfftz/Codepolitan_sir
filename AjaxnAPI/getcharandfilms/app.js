const planets = document.querySelector("#planets tbody");
const peoples = document.querySelector("#people tbody");
const starships = document.querySelector("#starships tbody");
const buttonPlanets = document.querySelector("#buttonPlanets");
const buttonPeople = document.querySelector("#buttonPeople");
const buttonShips = document.querySelector("#buttonShips");
const species = document.querySelector("#species tbody");
const buttonSpecies = document.querySelector("#buttonSpecies");
let speciesNumber = 1; // Initialize species number
let planetNumber = 1; // Initialize planet number
let peopleNumber = 1; // Initialize people number
let shipsNumber = 1; // Initialize ships number

const addPlanets = async () => {
    const planetData = await getPlanets();
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${planetData.name}</td><td>${planetData.climate}</td><td>${planetData.terrain}</td><td>${planetData.population}</td>`;
    planets.append(newRow);
    planetNumber++; // Increment planet number after each click
};

const addPeople = async () => {
    const peopleData = await getPeople();
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${peopleData.name}</td><td>${peopleData.gender}</td><td>${peopleData.height}</td><td>${peopleData.mass}</td>`;
    peoples.append(newRow);
    peopleNumber++; // Increment people number after each click
};

const addSpecies = async () => {
    const speciesData = await getSpecies();
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${speciesData.name}</td><td>${speciesData.language}</td><td>${speciesData.classification}</td><td>${speciesData.average_lifespan}</td>`;
    species.append(newRow);
    speciesNumber++; // Increment species number after each click
};

const addShips = async () => {
    const shipsData = await getShips();
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${shipsData.name}</td><td>${shipsData.length}</td><td>${shipsData.crew}</td><td>${shipsData.passengers}</td>`;
    starships.append(newRow);
    shipsNumber++; // Increment ships number after each click
};

const getPlanets = async () => {
    while (true) {
        try {
            const res = await axios.get(
                `https://swapi.dev/api/planets/${planetNumber}/`
            );
            if (res.status === 200) {
                return {
                    name: res.data.name,
                    climate: res.data.climate,
                    terrain: res.data.terrain,
                    population: res.data.population,
                };
            } else {
                planetNumber++;
            }
        } catch (error) {
            console.error("No Planets Available!", error);
            planetNumber++;
        }
    }
};

const getSpecies = async () => {
    while (true) {
        try {
            const res = await axios.get(
                `https://swapi.dev/api/species/${speciesNumber}/`
            );
            if (res.status === 200) {
                return {
                    name: res.data.name,
                    language: res.data.language,
                    classification: res.data.classification,
                    average_lifespan: res.data.average_lifespan,
                };
            } else {
                speciesNumber++;
            }
        } catch (error) {
            console.error("No Species Available!", error);
            speciesNumber++;
        }
    }
};

const getShips = async () => {
    while (true) {
        try {
            const res = await axios.get(
                `https://swapi.dev/api/starships/${shipsNumber}/`
            );
            if (res.status === 200) {
                return {
                    name: res.data.name,
                    length: res.data.length,
                    crew: res.data.crew,
                    passengers: res.data.passengers,
                };
            } else {
                shipsNumber++;
            }
        } catch (error) {
            console.error("No Ships Available!", error);
            shipsNumber++;
        }
    }
};

const getPeople = async () => {
    while (true) {
        try {
            const res = await axios.get(
                `https://swapi.dev/api/people/${peopleNumber}/`
            );
            if (res.status === 200) {
                return {
                    name: res.data.name,
                    gender: res.data.gender,
                    height: res.data.height,
                    mass: res.data.mass,
                };
            } else {
                peopleNumber++;
            }
        } catch (error) {
            console.error("No People Available!", error);
            peopleNumber++;
        }
    }
};

buttonPlanets.addEventListener("click", addPlanets);
buttonPeople.addEventListener("click", addPeople);
buttonShips.addEventListener("click", addShips);
buttonSpecies.addEventListener("click", addSpecies);
