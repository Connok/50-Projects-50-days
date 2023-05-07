const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const precentage = document.getElementById('precentage')
const remained = document.getElementById('remained')

updateBigCup()
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups
    [idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }

    })
    updateBigCup()
}
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        precentage.style.visibility = 'hidden'
        precentage.style.height = 0

    } else {
        precentage.style.visibility = 'visible'
        precentage.style.height = `${fullCups / totalCups * 333}px`
        precentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}