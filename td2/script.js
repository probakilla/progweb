let pScore = 0;
let deck = ['10Clubs', '10Diamonds', '10Hearts', '10Spades', '01Clubs', '01Diamonds', '01Hearts', '01Spades', '11Clubs', '11Diamonds', '11Hearts', '11Spades', '02Clubs', '02Diamonds', '02Hearts', '02Spades','03Clubs', '03Diamonds', '03Hearts', '03Spades', '04Clubs', '04Diamonds', '04Hearts', '04Spades','05Clubs', '05Diamonds', '05Hearts', '05Spades', '06Clubs', '06Diamonds', '06Hearts', '06Spades', '07Clubs', '07Diamonds', '07Hearts', '07Spades', '08Clubs', '08Diamonds', '08Hearts', '08Spades', '09Clubs', '09Diamonds', '09Hearts', '09Spades', '12Clubs', '12Diamonds', '12Hearts', '12Spades', '13Clubs', '13Diamonds', '13Hearts', '13Spades'];

function randomInt (max)
{
    return Math.floor(Math.random() * Math.floor(max));
}

function displayNumber (id)
{
    document.getElementById(id).innerHTML = randomInt (13);
}

function randomCard ()
{
    let colorTab = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
    let num = randomInt (12) + 1;
    let color = colorTab[randomInt (4)];
    let card = num + color + '.gif';
    let path = 'img/';
    return path + card;
}

function drawCard ()
{
    let res = '-1';
    let tmp = ' ';
    if (deck.length > 0)
    {
        let rand = randomInt (deck.length);
        res = deck[rand];
        deck.splice(rand, 1);
    }
    return res;
}

function displayCard (id, display)
{
    let img = document.createElement("IMG");
    let card = drawCard ();
    if (card !== '-1')
    {
        img.src = 'img/' + card + '.gif';
        document.getElementById(id).appendChild (img);
        let dScore = parseInt(card.substring(0,2));
        pScore = pScore + dScore;
        document.getElementById(display).innerHTML = pScore;
    }
    else
        alert('Deck is empty');
}

document.getElementById('btn-draw').addEventListener("click", function ()
{
    displayCard('player-cards', 'p-score');
},false);