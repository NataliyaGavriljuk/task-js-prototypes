/*-----------створюємо об'єкт монстра--------------*/
var Monster = {
	initialization: function(name, inital_level){//ф-я ініціалізації
		this.name = name;//ім'я
		this.inital_level = inital_level;//початковий рівень життя
	 	this.current_level = inital_level;//поточний рівень життя
	},
	sayName: function(){//функція, що говорить своє ім'я
		console.log("My name is: " + this.name);
	}
};
/*-----------наслідуємо птахомонстра та котомонстра від монстра---------- */	
var BirdMonster = Object.create(Monster);
BirdMonster.initialization("BirdMonster", 50);

var CatMonster = Object.create(Monster);
CatMonster.initialization("CatMonster", 60);

console.log(BirdMonster, CatMonster);//перевірка створених об'єктів

/*-----------додаємо птахомонстру функцію клювати-----------*/
BirdMonster.peck = function(obj){//obj - об'єкт-ворог 
		console.log("Current level of enemy's( " + obj.name + ") life is: " + obj.current_level);
		obj.current_level -= 3;
		console. log("After peck level is: " + obj.current_level);
}
/* ----------додаємо котомонстру функцію царапатися-------------*/
CatMonster.scrape = function(obj){
		console.log("Current level of enemy's( " + obj.name + ") life is: " + obj.current_level);
		obj.current_level -= 5;
		console. log("After scrape level is: " + obj.current_level);
}

/*створюэмо по декілька обєктів кожного типу та перевіряємо роботу ф-й*/
var BirdMonster1 = {};
BirdMonster1.__proto__ = BirdMonster;
BirdMonster1.name = "BirdMonster1";
console.log(BirdMonster1);

var BirdMonster2 = {};
BirdMonster2.__proto__ = BirdMonster;
BirdMonster2.name = "BirdMonster2";

var BirdMonster3 = {};
BirdMonster3.__proto__ = BirdMonster;
BirdMonster3.name = "BirdMonster3";

var BirdMonster4 = {};
BirdMonster4.__proto__ = BirdMonster;
BirdMonster4.name = "BirdMonster4";

var CatMonster1 = {};
CatMonster1.__proto__ = CatMonster;
CatMonster1.name = "CatMonster1";

var CatMonster2 = {};
CatMonster2.__proto__ = CatMonster;
CatMonster2.name = "CatMonster2";

var CatMonster3 = {};
CatMonster3.__proto__ = CatMonster;
CatMonster3.name = "CatMonster3";



BirdMonster1.peck(CatMonster1);

BirdMonster2.peck(CatMonster1);

BirdMonster3.peck(CatMonster1);

BirdMonster4.peck(CatMonster2);

BirdMonster3.peck(CatMonster3);
/*--------------*/
CatMonster1.scrape(BirdMonster1);

CatMonster2.scrape(BirdMonster1);

CatMonster2.scrape(BirdMonster2);