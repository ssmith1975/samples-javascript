//books.js

exports.findAll = function(req, res){
	res.send([{name:'book1'}, {name: 'book2'}]);	
};

exports.findById = function(req, res){
	res.send({id:req.params.id, name: "The Name", description: "description"});
}