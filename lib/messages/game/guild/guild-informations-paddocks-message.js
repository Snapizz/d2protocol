var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInformationsPaddocksMessage = function() {
  this.nbPaddockMax = 0;
  this.paddocksInformations = [];
};

util.inherits(GuildInformationsPaddocksMessage, BaseMessage);

GuildInformationsPaddocksMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInformationsPaddocksMessage(output);
};

GuildInformationsPaddocksMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInformationsPaddocksMessage(input);
};

GuildInformationsPaddocksMessage.prototype.serializeAs_GuildInformationsPaddocksMessage = function(output) {
  if (this.nbPaddockMax < 0) {
    throw (new Error((("Forbidden value (" + this.nbPaddockMax) + ") on element nbPaddockMax.")));
  };
  output.writeByte(this.nbPaddockMax);
  output.writeShort(this.paddocksInformations.length);
  var _i2;
  while (_i2 < this.paddocksInformations.length) {
    (this.paddocksInformations[_i2]).serializeAs_PaddockContentInformations(output);
    _i2++;
  };
};

GuildInformationsPaddocksMessage.prototype.deserializeAs_GuildInformationsPaddocksMessage = function(input) {
  var _item2;
  this.nbPaddockMax = input.readByte();
  if (this.nbPaddockMax < 0) {
    throw (new Error((("Forbidden value (" + this.nbPaddockMax) + ") on element of GuildInformationsPaddocksMessage.nbPaddockMax.")));
  };
  var _paddocksInformationsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _paddocksInformationsLen) {
    _item2 = new PaddockContentInformations();
    _item2.deserialize(input);
    this.paddocksInformations.push(_item2);
    _i2++;
  };
};

GuildInformationsPaddocksMessage.prototype.getMessageId = function() {
  return 5959;
};

GuildInformationsPaddocksMessage.prototype.getClassName = function() {
  return 'GuildInformationsPaddocksMessage';
};

module.exports.id = 5959;
module.exports.class = GuildInformationsPaddocksMessage;