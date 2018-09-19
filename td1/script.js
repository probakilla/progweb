function hide ()
{
    console.log("Hello");
    let elem = document.getElementById('accueil');
    if (elem.style.display === 'none')
    {
        elem.style.display = 'block';
    }
    else
    {
        elem.style.display = 'none';
    }
}

const btn = document.getElementById ('accueil-btn');
btn.addEventListener('click', hide);