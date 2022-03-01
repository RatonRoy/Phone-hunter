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
			.then(data => console.log(data));
	}
	searchPhone(); 
	
})
