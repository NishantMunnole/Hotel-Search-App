const bookForm = document.querySelector('#bookFrom');
const input = document.querySelector('#searchInput');
const checkIn = document.querySelector("#check-in");
const checkOut = document.querySelector("#check-out");
let cardDeck = document.querySelector('#card-deck');
const pagination = document.querySelector(".pagination");
let pageNo = 1;


document.addEventListener('DOMContentLoaded', beforeLoad);

function beforeLoad(e) {
	// cardDeck.innerHTML = "";
	// pagination.style.display = "none";
}


// bookForm.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	const location = {
// 		method: 'GET',
// 		url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
// 		params: { query: `${searchReq}`, locale: 'en_US', currency: 'USD' },
// 		headers: { 'x-rapidapi-host': 'hotels4.p.rapidapi.com', 'x-rapidapi-key': '36d2771b29mshf37c6076d8af31ep18bdfdjsn7af263d63282' }
// 	};
// 	axios.request(location)
// 		.then(function (response) {
// 			const suggestions = response.data.suggestions;
// 			for (suggest of suggestions) {
// 				const entites = suggest.entities;
// 				for (entity of entites) {
// 					const destinationID = entity.destinationId;
// 					const hotels = {
// 						method: 'GET',
// 						url: 'https://hotels4.p.rapidapi.com/properties/list',
// 						params: {
// 							destinationId: `${destinationID}`,
// 							pageNumber: '1',
// 							pageSize: '25',
// 							checkIn: `${checkIn.value}`,
// 							checkOut: `${checkOut.value}`,
// 							adults1: '1',
// 							sortOrder: 'PRICE',
// 							locale: 'en_US',
// 							currency: 'USD'
// 						},
// 						headers: {
// 							'x-rapidapi-host': 'hotels4.p.rapidapi.com',
// 							'x-rapidapi-key': '36d2771b29mshf37c6076d8af31ep18bdfdjsn7af263d63282'
// 						}
// 					};

// 					axios.request(hotels)
// 						.then(function (response) {
// 							const hotelList = response.data.data.body.searchResults.results;
// 							const results = hotelList.map(function (hotel) {
// 								return `<div class="card px-2 py-2" style="width: 18rem;">
// 						<img class="card-img-top" src="${hotel.optimizedThumbUrls.srpDesktop}" alt="${hotel.name}-Pic">
// 						<div class="card-body">
// 							<h5>${hotel.name}</h5>
// 							<p class="card-text"><small class="text-muted">${hotel.address.streetAddress} ${hotel.address.extendedAddress} ${hotel.address.locality} ${hotel.address.locality} ${hotel.address.countryCode}-${hotel.address.postalCode}</small></p>
// 						</div>
// 						<button class="btn btn-outline-primary">Know More</button>
// 						</div>`
// 							})
// 							cardDeck.innerHTML = '';
// 							for (let i = 0; i < results.length; i++) {
// 								const allResults = results[i];
// 								cardDeck.innerHTML += allResults;
// 							}
// 							pagination.style.display = "block";
// 						}).catch(function (error) {
// 							console.error(error);
// 						});
// 				}
// 			}
// 		})
// 		.catch(function (error) {
// 			console.error(error);
// 		});
// });




async function destinationID() {
	const searchReq = input.value;
	const config = { params: { query: `london`, locale: 'en_US', currency: 'USD' }, headers: { 'x-rapidapi-host': 'hotels4.p.rapidapi.com', 'x-rapidapi-key': '36d2771b29mshf37c6076d8af31ep18bdfdjsn7af263d63282' } }
	const res = await axios.get('https://hotels4.p.rapidapi.com/locations/v2/search', config);
	const data = await res.data;
	const suggestions = data.suggestions;
	console.log(suggestions);
};

console.log(destinationID());

pagination.addEventListener('click', function (event) {
	const val = event.target.parentElement.value;
})

