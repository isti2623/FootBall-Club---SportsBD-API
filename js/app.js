const loadData = () => {
    const inputField = document.getElementById("input-field");
    const findText = inputField.value;
    inputField.value = '';

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${findText}`

    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.teams))
}

const showData = team => {
    const showCard = document.getElementById("show-card");
    showCard.textContent = '';
    team.forEach(element => {
        // console.log(element);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="detailsLoad(${element.idTeam})" class="card h-100">
        <img class="w-50" src="${element.strTeamBadge}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.strTeam}</h5>
            <p class="card-text">${element.strDescriptionEN.slice(0, 200)}</p>
        </div>
    </div>
        `
        showCard.appendChild(div);

    });
}

const detailsLoad = team => {

    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${team}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.teams[0]))
}

const showDetails = e => {
    console.log(e);
    // window.location.href = "two.html";

    const showTeam = document.getElementById("show-team");
    showTeam.textContent = '';

    e.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.classList.add('card');

        div.innerHTML = `
        <img src="${element.strTeamBanner}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.strAlternate}</h5>
                <p class="card-text">${element.strStadiumDescription.slice(0, 300)}</p>
                <p class="card-text"><small class="text-muted">${element.strYoutube}</small></p>
            </div>
        `
        showTeam.appendChild(div);

    })

}

