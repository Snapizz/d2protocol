var Item = function() {

};



Item.prototype.serialize = function(output) {
  this.serializeAs_Item(output);
};

Item.prototype.deserialize = function(input) {
  this.deserializeAs_Item(input);
};

Item.prototype.serializeAs_Item = function(param1) {

};

Item.prototype.deserializeAs_Item = function(param1) {

};

Item.prototype.getTypeId = function() {
  return 7;
};

Item.prototype.getClassName = function() {
  return 'Item';
};

module.exports.id = 7;
module.exports.class = Item;
module.exports.getInstance = function() {
  return new Item();
};