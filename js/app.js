document.getElementById('search-btn').addEventListener('click', function () {
	const searchPhone = () => {
		const searchField = document.getElementById('search-field');
		const searchValue = searchField.value;
		// clear data 
		searchField.value = '';
		
		// load data 
		const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
		fetch(url)
			.then(res => res.json())
			.then(data => displayPhone(data.data));
		// display  Phone functions 
		const displayPhone = (phones) => {
			const searchResult = document.getElementById('phone-container');
			searchResult.textContent = '';
			phones.forEach(phone => {
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
								<button onClick = "lordPhoneDetailes('${phone.slug}')">Details</button>
								
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

});

const lordPhoneDetailes = (phoneId) => {
	const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
	console.log(url);
	fetch(url)
		.then(res => res.json())
		.then(data => displayPhoneDetailes(data.data));
}

const displayPhoneDetailes = (phone) => {
	console.log(phone);
	const showPhoneContainer = document.getElementById('show-phone-container');
	const div = document.createElement('div');
	div.innerHTML = `
		<div class="show-phone-image">
			<img src="${phone.image}" alt="awesome phone" srcset="">
		</div>
		<div class="show-phone-header">
			<h2 class="show-phone-name">${phone.name}</h2>
			<h3 class="phone-date">${phone.releaseDate}</h3>
		</div>
		<div class="show-phone-information">
			<ul>
				<li class="list-item">${phone.mainFeatures.chipSet}</li>
				<li class="list-item">${phone.mainFeatures.displaySize}</li>
				<li class="list-item">${phone.mainFeatures.memory}</li>
				<li class="list-item">${phone.mainFeatures.storage}</li>
				<li class="list-item">Sensors
					<ul class="list-wraper-2">
						<li class="list-item">${phone.mainFeatures.sensors[0]}</li>
						<li class="list-item">${phone.mainFeatures.sensors[1]}</li>
						<li class="list-item">${phone.mainFeatures.sensors[2]}</li>
						<li class="list-item">${phone.mainFeatures.sensors[3]}</li>
					</ul>
				</li>
				<li class="list-item">${phone.slug}</li>
			</ul>
		</div>
	`
	showPhoneContainer.appendChild(div);
}
