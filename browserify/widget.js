var domify = require('domify');

var elem = domify('<div>Hello <span class="name"></span>!</div>'); 
function setName(str){
	elem.querySelector('span.name').textContent = str;
}

function appendTo(target){
	target.appendChild(elem);
}

module.exports = function(){
	return {
		setName: setName,
		appendTo: appendTo			
	};
};

