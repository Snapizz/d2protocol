var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildHousesInformationMessage = function() {
  this.housesInformations = [];
};

util.inherits(GuildHousesInformationMessage, BaseMessage);

GuildHousesInformationMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildHousesInformationMessage(output);
};

GuildHousesInformationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildHousesInformationMessage(input);
};

GuildHousesInformationMessage.prototype.serializeAs_GuildHousesInformationMessage = function(output) {
  output.writeShort(this.housesInformations.length);
  var _i1 = 0;
  while (_i1 < this.housesInformations.length) {
    (this.housesInformations[_i1]).serializeAs_HouseInformationsForGuild(output);
    _i1++;
  };
};

GuildHousesInformationMessage.prototype.deserializeAs_GuildHousesInformationMessage = function(input) {
  var _item1;
  var _housesInformationsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _housesInformationsLen) {
    _item1 = new HouseInformationsForGuild();
    _item1.deserialize(input);
    this.housesInformations.push(_item1);
    _i1++;
  };
};

GuildHousesInformationMessage.prototype.getMessageId = function() {
  return 5919;
};

GuildHousesInformationMessage.prototype.getClassName = function() {
  return 'GuildHousesInformationMessage';
};

module.exports.id = 5919;
module.exports.class = GuildHousesInformationMessage;