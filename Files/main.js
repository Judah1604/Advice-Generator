let dice = document.querySelector('.dice'),
	divider = document.querySelector('.divider'),
	id = document.querySelector('.id span'),
	text = document.querySelector('.text span')

dice.addEventListener('click', generateQuote)

document.addEventListener('DOMContentLoaded', function () {
	generateQuote()
	makeImgResponsive()
})

function generateQuote() {
	fetch('https://api.adviceslip.com/advice')
		.then(res => {
			return res.json()
		})
		.then(data => {
			let slip = data.slip
			id.textContent = slip.id
			text.textContent = slip.advice
		})
}

window.addEventListener('resize', makeImgResponsive)

function makeImgResponsive() {
	if (window.innerWidth <= 425) {
		divider.setAttribute('src', 'images/pattern-divider-mobile.svg')
	} else {
		divider.setAttribute('src', 'images/pattern-divider-desktop.svg')
	}
}
