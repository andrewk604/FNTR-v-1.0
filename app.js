var submitBtn = document.querySelector('.submitButton');
var gamertagInput = document.getElementById('gamertag');
var platformInput = document.getElementById('platform');
var result = document.querySelector('.result');

const fetchPlayers = async (gamertag, platform) => {
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/${platform}/${gamertag}`, {
        headers: {
            'TRN-Api-Key': '38773e29-7af5-4edb-bcd3-a0f9e1f674ec'
        }
    });

    const data = await api_call.json();
    console.log(data);
    return { data }
};

const showData = () => {
    fetchPlayers(gamertagInput.value, platformInput.value).then((res) => {
        const markup = `
            
        `;
        result.insertAdjacentHTML('beforeend', markup);
    })
        .catch(err => console.log(err));
};

const clearField = () => {
    gamertagInput.value = '';
    platformInput.value = 'Choose Platform';
};

const clearPlayer = () => {
    result.innerHTML = '';
}

const searchStatsHide = () => {
    document.querySelector('.stats-search').style.top = '-25'+'%';
}

submitBtn.addEventListener('click', function () {
    searchStatsHide();
    showData();
    clearField();
    clearPlayer();
});
