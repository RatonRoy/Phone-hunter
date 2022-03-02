document.getElementById('search-btn').addEventListener('click', function () {
	const searchPhone = () => {
		const searchField = document.getElementById('search-field');
		const searchValue = searchField.value;
		// console.log(searchValue)
		searchField.value = '';
		const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
		// console.log(url);
		fetch(url)
			.then(res => res.json())
			.then(data => displayPhone(data.data));
		// display  Phone functions 
		const displayPhone = (phones) => {
			console.log(phones);
			phones.forEach(phone => {
				const 
			});
		}
	}
	searchPhone(); 
	
})
