var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceVersatileInfoListMessage = function() {
  this.alliances = [];
};

util.inherits(AllianceVersatileInfoListMessage, BaseMessage);

AllianceVersatileInfoListMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceVersatileInfoListMessage(output);
};

AllianceVersatileInfoListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceVersatileInfoListMessage(input);
};

AllianceVersatileInfoListMessage.prototype.serializeAs_AllianceVersatileInfoListMessage = function(output) {
  output.writeShort(this.alliances.length);
  var _i1 = 0;
  while (_i1 < this.alliances.length) {
    (this.alliances[_i1]).serializeAs_AllianceVersatileInformations(output);
    _i1++;
  };
};

AllianceVersatileInfoListMessage.prototype.deserializeAs_AllianceVersatileInfoListMessage = function(input) {
  var _item1;
  var _alliancesLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _alliancesLen) {
    _item1 = new AllianceVersatileInformations();
    _item1.deserialize(input);
    this.alliances.push(_item1);
    _i1++;
  };
};

AllianceVersatileInfoListMessage.prototype.getMessageId = function() {
  return 6436;
};

AllianceVersatileInfoListMessage.prototype.getClassName = function() {
  return 'AllianceVersatileInfoListMessage';
};

module.exports.id = 6436;
module.exports.class = AllianceVersatileInfoListMessage;