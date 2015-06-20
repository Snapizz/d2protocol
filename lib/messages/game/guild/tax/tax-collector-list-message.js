var d2com = require('d2com'),
  BaseMessage = require('./tax-collector-list-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var TaxCollectorListMessage = function() {
  this.nbcollectorMax = 0;
  this.fightersInformations = [];
};

util.inherits(TaxCollectorListMessage, BaseMessage);

TaxCollectorListMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorListMessage(output);
};

TaxCollectorListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorListMessage(input);
};

TaxCollectorListMessage.prototype.serializeAs_TaxCollectorListMessage = function(param1) {
  this.serializeAs_AbstractTaxCollectorListMessage(param1);
  if (this.nbcollectorMax < 0) {
    throw new Error("Forbidden value (" + this.nbcollectorMax + ") on element nbcollectorMax.");
  } else {
    param1.writeByte(this.nbcollectorMax);
    param1.writeShort(this.fightersInformations.length);
    var _loc2_ = 0;
    while (_loc2_ < this.fightersInformations.length) {
      (this.fightersInformations[_loc2_]).serializeAs_TaxCollectorFightersInformation(param1);
      _loc2_++;
    }
    return;
  }
};

TaxCollectorListMessage.prototype.deserializeAs_TaxCollectorListMessage = function(param1) {
  var _loc4_ = null;
  this.deserialize(param1);
  this.nbcollectorMax = param1.readByte();
  if (this.nbcollectorMax < 0) {
    throw new Error("Forbidden value (" + this.nbcollectorMax + ") on element of TaxCollectorListMessage.nbcollectorMax.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = new TaxCollectorFightersInformation();
      _loc4_.deserialize(param1);
      this.fightersInformations.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

TaxCollectorListMessage.prototype.getMessageId = function() {
  return 5930;
};

TaxCollectorListMessage.prototype.getClassName = function() {
  return 'TaxCollectorListMessage';
};

module.exports.id = 5930;
module.exports.class = TaxCollectorListMessage;
module.exports.getInstance = function() {
  return new TaxCollectorListMessage();
};