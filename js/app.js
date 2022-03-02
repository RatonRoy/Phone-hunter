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
			// main container 
			const mainContainer = document.getElementById('main-phone-section');
			// section title 
			const sectionTitle = document.createElement('div');
			sectionTitle.classList.add('phone-section-title');
			sectionTitle.innerHTML = `
				<h2 class="title">featured <span class="subtitle">phones</span></h2>
			`
			// search result 
			const searchResult = document.getElementById('phone-container');
			mainContainer.insertBefore(sectionTitle, searchResult);
			phones.forEach(phone => {
				console.log(phone);
				const article = document.createElement('article');
				article.classList.add('phone-card');
				article.innerHTML = `
					<!-- single Phone -->
						<div class="phone-img-container">
							<img
							src="${phone.image}"
							class="phone-img"
							alt="awesome phone"
							/>
							<p class="phone-date">august 14th, 2019</p>
						</div>
						<!-- tour footer -->
						<div class="phone-footer">
							<h4 class="phone-name">${phone.phone_name}</h4>
							<!-- tour info -->
							<div class="phone-info">
							<p class="phone-brand"> ${phone.brand}</p>
							<div class="phone-details">
								<button>Details</button>
								
							</div>
							</div>
						</div>
					
					<!-- end of single Phone -->
				 
				`
				searchResult.appendChild(article);

			});
		}
	}
	searchPhone();

})
