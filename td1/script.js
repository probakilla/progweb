function hide (id)
{
    let elem = document.getElementById (id);
    elem.style.display = 'none';
}

function show (id)
{
    let elem = document.getElementById (id);
    elem.style.display = 'block';
}

function changeTitle (txt)
{
    document.getElementById('accueil').innerHTML = txt;
}

function hideList (ids)
{
    for (let i = 0; i < ids.length; ++i)
        hide(ids[i]);
}

function showList (ids)
{
    for (let i = 0; i < ids.length; ++i)
        show (ids[i]);
}

function hideClassList (ids)
{
    for (let i = 0; i < ids.length; ++i)
    {
        let list = document.getElementsByClassName(ids[i]);
        for (let j = 0; j < list.length; ++j)
            list[j].style.display = 'none';
    }
}

function showAllPosts ()
{
    let list = document.getElementsByClassName('post');
    for (let i = 0; i < list.length; ++i)
        list[i].style.display = 'block';
}

function dispReception ()
{
    showAllPosts();
    changeTitle("Accueil");
}

function changeSection (list, title)
{
    showAllPosts();
    hideClassList(list);
    changeTitle(title);
}

const btnAccueil = document.getElementById("btn-accueil");
btnAccueil.addEventListener("click", dispReception, false);

const btnOrtolan = document.getElementById("btn-ortolan");
btnOrtolan.addEventListener("click",function ()
{
    changeSection (['swagg', 'jl'], "Les Ortolans");
},false);