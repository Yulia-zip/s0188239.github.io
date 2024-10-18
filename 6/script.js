function getPrices() {
	return {
		goods: [5500000, 3000000, 5000000],
		prodOptions: {
			option1: 50000,
			option2: 70000,
			option3: 40000,
			option4: 30000,
		},
		prodProperties: {
			prop1: 100000,
			prop2: 70000,
		},
	}
}

function updateOptionsAndProperties() {
	const prices = getPrices()
	const radioProduct = document.querySelector("input[name='tovarrr']:checked")

	if (radioProduct) {
		const selectedProductId = radioProduct.id

		let selectDiv = document.getElementById('selectt')
		let checkDiv = document.getElementById('checkboxes')

		if (selectedProductId === 'tov_1') {
			selectDiv.style.display = 'none'
			checkDiv.style.display = 'none'
		} else if (selectedProductId === 'tov_2') {
			selectDiv.style.display = 'block'
			checkDiv.style.display = 'none'
		} else if (selectedProductId === 'tov_3') {
			selectDiv.style.display = 'none'
			checkDiv.style.display = 'block'
		}
	}
}

function calculateTotalPrice() {
	let price = 0
	const prices = getPrices()
	const radioProduct = document.querySelector("input[name='tovarrr']:checked")

	if (radioProduct) {
		const priceIndex = parseInt(radioProduct.value)
		price += priceIndex

		const selectedProductId = radioProduct.id

		if (selectedProductId === 'tov_2') {
			let selects = document.querySelector('#selectt select')
			if (selects) {
				let selectedOption = selects.options[selects.selectedIndex].value
				let optionPrice = prices.prodOptions[selectedOption]
				if (optionPrice !== undefined) {
					price += optionPrice
				}
			}
		}

		if (selectedProductId === 'tov_3') {
			let checkboxes = document.querySelectorAll('#checkboxes input')
			checkboxes.forEach(function (checkbox) {
				if (checkbox.checked) {
					let propPrice = prices.prodProperties[checkbox.name]
					if (propPrice !== undefined) {
						price += propPrice
					}
				}
			})
		}

		const quantityInput = document.getElementById('kol').value
		const regular = /^[1-9][0-9]*$/

		if (!regular.test(quantityInput)) {
			alert('Введите корректное количество товара!!!')
		} else {
			const quantity = parseInt(quantityInput)
			price *= quantity

			let resultDiv = document.getElementById('result')
			resultDiv.innerHTML = 'Итоговая стоимость: ' + price.toLocaleString() + ' рублей'
		}
	} else {
		alert('Пожалуйста, выберите товар.')
	}
}

window.addEventListener('DOMContentLoaded', function () {
	document.getElementById('btn').addEventListener('click', function () {
		calculateTotalPrice()
	})

	const radioButtons = document.querySelectorAll("input[name='tovarrr']")
	radioButtons.forEach(function (radio) {
		radio.addEventListener('change', function () {
			updateOptionsAndProperties()
		})
	})

	document.getElementById('selectt').style.display = 'none'
	document.getElementById('checkboxes').style.display = 'none'
})
