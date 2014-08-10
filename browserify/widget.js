var domify = require('domify');

var html = '<div>Hello <span class="name"></span>!</div>'; 

module.exports = Widget;

function Widget(){
	if(!(this instanceof Widget)) return new Widget;
	this.elem = domify(html);
}

Widget.prototype.setName = function (str){
	this.elem.querySelector('span.name').textContent = str;
}

Widget.prototype.appendTo = function(target){
	target.appendChild(this.elem);
}


