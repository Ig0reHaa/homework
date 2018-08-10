let money,
	name,
	time,
	price

function start() {
	while ( isNaN(money) || money == "" || money == null ) {
		money = prompt("Ваш бюджет на месяц?", 90000);
	}

	name = prompt( "Название вашего магазина?", "amazon");
	time = 21;
}

start();

// function uCase(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// name = uCase(name);

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "Техника " + [i]);

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != "" && a.length < 50) {
			console.log('Всё верно!')
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}

chooseGoods();

// 										WHILE

// i = 0

// while ( i < 5 ) {
// 	let a = prompt("Какой тип товаров будем продавать?", "Техника " + [i]);

// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != "" && a.length < 50) {
// 		console.log('Всё верно!')
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		i = i - 1;
// 	}

// 	i++
// }

// 										DO WHILE

// i = 0

// do {
// 	let a = prompt("Какой тип товаров будем продавать?", "Техника " + [i]);

// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != "" && a.length < 50) {
// 		console.log('Всё верно!')
// 		mainList.shopGoods[i] = a;
// 	} else {
// 		i = i - 1;
// 	}
// 	i++
// }
// while ( i < 5 );

function workTime() {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
				}
}

workTime();
	
alert( "Ваш ежедневный бюджет : " + mainList.budget / 30);

console.log(mainList);
