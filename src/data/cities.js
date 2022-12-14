const Cities = [
	{
		id: 25,
		name: 'Koh Lao Liang',
		price: 290,
		image: '/assets/cities/Koh.jpeg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 3,
	},
	{
		id: 26,
		name: 'Chiang Rai, Northern Thailand',
		price: 290,
		image: '/assets/cities/Chiang.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 3,
	},
	{
		id: 27,
		name: 'Koh Lanta, Andaman Coast',
		price: 290,
		image: '/assets/cities/Koh.jpeg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 3,
	},
	{
		id: 28,
		name: 'Asturias',
		price: 290,
		image: '/assets/cities/Asturias.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 4,
	},
	{
		id: 28,
		name: 'Tarifa',
		price: 290,
		image: '/assets/cities/Tarifa.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 4,
	},
	{
		id: 29,
		name: 'Cantabria',
		price: 290,
		image: '/assets/cities/Cantabria.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 4,
	},
	{
		id: 30,
		name: ' Kratie',
		price: 290,
		image: '/assets/cities/Kratie.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 5,
	},
	{
		id: 31,
		name: ' Cardamom Mountains',
		price: 290,
		image: '/assets/cities/Cardamom.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 5,
	},
	{
		id: 32,
		name: '  Battambang Bamboo Train',
		price: 290,
		image: '/assets/cities/Battambang.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Less Crowded',
		destinationId: 5,
	},
	{
		id: 1,
		name: 'London',
		price: 500,
		image: '/assets/cities/london.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Crowded',
		destinationId: 1,
	},
	{

		id: 82,
		name: 'Manchester',
		price: 800,
		image: '/assets/cities/manchester.jpg',
		duration: '4 days',
		room: false,
		food: false,
		status: 'Crowded',
		destinationId: 1,
	},
	{

		id: 2,
		name: 'Rutland',
		price: 200,
		image: '/assets/cities/Rutland.jpg',
		duration: '2 days',
		room: true,
		food: true,
		status: 'Less Crowded',
		destinationId: 1,
	},
	{
		id: 83,
		name: 'North Yorkshire',
		price: 200,
		image: '/assets/cities/North Yorkshire.jpg',
		duration: '2 days',
		room: true,
		food: true,
		status: 'Less Crowded',
		destinationId: 1,		
	},
	{
		id: 3,
		name: 'Birmingham',
		price: 300,
		image: '/assets/cities/birmingham.jpg',
		duration: 'one day',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 1,
	},
	{
		id: 4,
		name: 'New York',
		price: 420,
		image: '/assets/cities/new-york.jpg',
		duration: '7 days',
		room: false,
		food: true,
		status: 'Crowded',
		destinationId: 2,
	},
	{
		id: 5,
		name: 'San Francisco',
		price: 520,
		image: '/assets/cities/san-francisco.jpg',
		duration: 'one day',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 2,
	},
	{
		id: 6,
		name: 'Washington',
		price: 450,
		image: '/assets/cities/washington.jpg',
		duration: '3 days',
		room: true,
		food: false,
		status: 'Crowded',
		destinationId: 2,
	},
	{
		id: 7,
		name: 'Bangkok',
		price: 750,
		image: '/assets/cities/bangkok.jpg',
		duration: '8 days',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 3,
	},
	{
		id: 8,
		name: 'Krabi',
		price: 550,
		image: '/assets/cities/krabi.jpg',
		duration: '6 days',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 3,
	},
	{
		id: 9,
		name: 'Phuket',
		price: 250,
		image: '/assets/cities/phuket.jpg',
		duration: 'one day',
		room: false,
		food: false,
		status: 'Crowded',
		destinationId: 3,
	},
	{
		id: 10,
		name: 'Madrid',
		price: 350,
		image: '/assets/cities/madrid.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Crowded',
		destinationId: 4,
	},
	{
		id: 11,
		name: 'Barcelona',
		price: 330,
		image: '/assets/cities/barcelona.jpg',
		duration: '2 days',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 4,
	},
	{
		id: 12,
		name: 'Seville',
		price: 550,
		image: '/assets/cities/seville.jpg',
		duration: '3 days',
		room: false,
		food: false,
		status: 'Crowded',
		destinationId: 4,
	},
	{
		id: 13,
		name: 'Islamabad',
		price: 280,
		image: '/assets/cities/islamabad.jpg',
		duration: 'one day',
		room: true,
		food: false,
		status: 'Crowded',
		destinationId: 5,
	},
	{
		id: 14,
		name: 'Gilgit - Balistan',
		price: 440,
		image: '/assets/cities/gilgit.jpg',
		duration: '2 days',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 5,
	},
	{
		id: 15,
		name: 'Lahore',
		price: 240,
		image: '/assets/cities/lahore.jpg',
		duration: 'one day',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 5,
	},
	{
		id: 16,
		name: 'Paris',
		price: 330,
		image: '/assets/cities/paris.jpg',
		duration: '3 days',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 6,
	},
	{
		id: 17,
		name: 'Marseille',
		price: 340,
		image: '/assets/cities/marseille.jpg',
		duration: 'one day',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 6,
	},
	{
		id: 18,
		name: 'Bordeaux',
		price: 220,
		image: '/assets/cities/bordeaux.jpg',
		duration: '2 days',
		room: false,
		food: false,
		status: 'Crowded',
		destinationId: 6,
	},
	{
		id: 19,
		name: 'Lucerne',
		price: 370,
		image: '/assets/cities/lucerne.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Crowded',
		destinationId: 7,
	},
	{
		id: 20,
		name: 'Lausanne',
		price: 330,
		image: '/assets/cities/lausanne.jpg',
		duration: '4 days',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 7,
	},
	{
		id: 21,
		name: 'Lugano',
		price: 420,
		image: '/assets/cities/lugano.jpg',
		duration: '3 days',
		room: true,
		food: false,
		status: 'Crowded',
		destinationId: 7,
	},
	{
		id: 22,
		name: 'Istanbul',
		price: 280,
		image: '/assets/cities/istanbul.jpg',
		duration: '2 days',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 8,
	},
	{
		id: 23,
		name: 'Ankara',
		price: 520,
		image: '/assets/cities/ankara.jpg',
		duration: '6 days',
		room: true,
		food: true,
		status: 'Crowded',
		destinationId: 8,
	},
	{
		id: 24,
		name: 'Antalya',
		price: 290,
		image: '/assets/cities/antalya.jpg',
		duration: '2 days',
		room: true,
		food: false,
		status: 'Crowded',
		destinationId: 8,
	},
	
];
export default Cities;