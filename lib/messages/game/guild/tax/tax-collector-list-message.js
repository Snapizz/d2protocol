var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TaxCollectorListMessage = function() {
  this.nbcollectorMax = 0;
  this.informations = [];
  this.fightersInformations = [];
};

util.inherits(TaxCollectorListMessage, BaseMessage);

TaxCollectorListMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorListMessage(output);
};

TaxCollectorListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorListMessage(input);
};

TaxCollectorListMessage.prototype.serializeAs_TaxCollectorListMessage = function(output) {
  if (this.nbcollectorMax < 0) {
    throw (new Error((("Forbidden value (" + this.nbcollectorMax) + ") on element nbcollectorMax.")));
  };
  output.writeByte(this.nbcollectorMax);
  output.writeShort(this.informations.length);
  var _i2;
  while (_i2 < this.informations.length) {
    output.writeShort((this.informations[_i2]).getTypeId());
    (this.informations[_i2]).serialize(output);
    _i2++;
  };
  output.writeShort(this.fightersInformations.length);
  var _i3;
  while (_i3 < this.fightersInformations.length) {
    (this.fightersInformations[_i3]).serializeAs_TaxCollectorFightersInformation(output);
    _i3++;
  };
};

TaxCollectorListMessage.prototype.deserializeAs_TaxCollectorListMessage = function(input) {
  var _id2;
  var _item2;
  var _item3;
  this.nbcollectorMax = input.readByte();
  if (this.nbcollectorMax < 0) {
    throw (new Error((("Forbidden value (" + this.nbcollectorMax) + ") on element of TaxCollectorListMessage.nbcollectorMax.")));
  };
  var _informationsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _informationsLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(TaxCollectorInformations, _id2);
    _item2.deserialize(input);
    this.informations.push(_item2);
    _i2++;
  };
  var _fightersInformationsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _fightersInformationsLen) {
    _item3 = new TaxCollectorFightersInformation();
    _item3.deserialize(input);
    this.fightersInformations.push(_item3);
    _i3++;
  };
};

TaxCollectorListMessage.prototype.getMessageId = function() {
  return 5930;
};

TaxCollectorListMessage.prototype.getClassName = function() {
  return 'TaxCollectorListMessage';
};

module.exports.id = 5930;
module.exports.class = TaxCollectorListMessage;