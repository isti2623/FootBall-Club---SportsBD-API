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
        console.log(element);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img class="w-25" src="${element.strTeamBadge}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.strTeam}</h5>
            <p class="card-text">${element.strDescriptionEN.slice(0, 200)}</p>
        </div>
    </div>
        `
        showCard.appendChild(div);
    });
}

