var BaseMessage = require('./paddock-informations.js').class,
  util = require('util');

var PaddockBuyableInformations = function() {
  this.price = 0;
  this.locked = false;
};

util.inherits(PaddockBuyableInformations, BaseMessage);

PaddockBuyableInformations.prototype.serialize = function(output) {
  this.serializeAs_PaddockBuyableInformations(output);
};

PaddockBuyableInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockBuyableInformations(input);
};

PaddockBuyableInformations.prototype.serializeAs_PaddockBuyableInformations = function(output) {
  this.serializeAs_PaddockInformations(output);
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element price.")));
  };
  output.writeVarInt(this.price);
  output.writeBoolean(this.locked);
};

PaddockBuyableInformations.prototype.deserializeAs_PaddockBuyableInformations = function(input) {
  this.deserialize(input);
  this.price = input.readVarUhInt();
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element of PaddockBuyableInformations.price.")));
  };
  this.locked = input.readBoolean();
};

PaddockBuyableInformations.prototype.getTypeId = function() {
  return 130;
};

PaddockBuyableInformations.prototype.getClassName = function() {
  return 'PaddockBuyableInformations';
};

module.exports.id = 130;
module.exports.class = PaddockBuyableInformations;