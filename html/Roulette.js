function spin() {
    let wheel = [0,34,10,21,28,4,18,9,27,22,12,3,17,20,11,33,2,10,32,"00",15,8,25,1,31,20,14,30,7,24,29,35,6,13,23,19,5,36];
    let rand_index = Math.floor(Math.random() * 37);
    let result = [wheel[rand_index]];

    // red/black
    if (rand_index % 2 != 0)
    {
        result.push("Rouge");
    }
    else
    {
        result.push("Noir");
    }

    // even/odd
    if (result[0] % 2 == 0)
    {
        result.push("Pair");
    }
    else
    {
        result.push("Impair");
    }

    // passed/failed
    if ((result[0] > 18) || (result[0] == "00"))
    {
        result.push("Passe");
    }
    else
    {
        result.push("Manque");
    }

    let table = document.getElementById("pastspins");
    let body = document.createElement("tbody");
    for (let i = 0; i < 4; i++) {
        let elem = document.createElement("td")
        elem.textContent = result[i];
        body.appendChild(elem);
    }
    table.appendChild(body);
}