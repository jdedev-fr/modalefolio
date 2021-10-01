let blocs = document.querySelectorAll('article')

for (let b = 0; b < blocs.length; b++) {
    blocs[b].addEventListener('click', (e) => {
        console.log(e.target.parentElement.childNodes[1])
        document.querySelector(".modale>img").src = e.target.parentElement.childNodes[1].src
        document.querySelector(".modale").style.display = "flex";
    })
}

document.querySelector('.fermer').addEventListener('click', () => {
    document.querySelector(".modale").style.display = "none";
})