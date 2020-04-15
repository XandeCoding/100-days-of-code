class cellphone {
    constructor(brand, model) {
	this.brand = brand;
	this.model = model;
	
	this.description = function() {
	    return `Cellphone brand: ${this.brand}, model: ${this.model}`;
	};
    };
};

function cellphone_proto() {
    cellphone_proto.brand = '';
    cellphone.model = '';
};

cellphone_proto.prototype.description = function() {
    return `Cellphone brand: ${this.brand}, model: ${this.model}`;
};

var xiaomiCell = new cellphone('Xiaomi', 'A2');

var xiaomiCell_proto = new cellphone_proto();
xiaomiCell_proto.brand = 'Xiaomi';
xiaomiCell_proto.model = 'A2';

console.log(xiaomiCell.description());
console.log(xiaomiCell_proto.description());
