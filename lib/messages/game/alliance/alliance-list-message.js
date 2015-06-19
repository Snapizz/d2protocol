var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceListMessage = function() {
  this.alliances = [];
};

util.inherits(AllianceListMessage, BaseMessage);

AllianceListMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceListMessage(output);
};

AllianceListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceListMessage(input);
};

AllianceListMessage.prototype.serializeAs_AllianceListMessage = function(output) {
  output.writeShort(this.alliances.length);
  var _i1;
  while (_i1 < this.alliances.length) {
    (this.alliances[_i1]).serializeAs_AllianceFactSheetInformations(output);
    _i1++;
  };
};

AllianceListMessage.prototype.deserializeAs_AllianceListMessage = function(input) {
  var _item1;
  var _alliancesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _alliancesLen) {
    _item1 = new AllianceFactSheetInformations();
    _item1.deserialize(input);
    this.alliances.push(_item1);
    _i1++;
  };
};

AllianceListMessage.prototype.getMessageId = function() {
  return 6408;
};

AllianceListMessage.prototype.getClassName = function() {
  return 'AllianceListMessage';
};

module.exports.id = 6408;
module.exports.class = AllianceListMessage;