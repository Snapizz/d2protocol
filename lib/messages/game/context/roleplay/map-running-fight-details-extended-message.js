var d2com = require('d2com'),
  BaseMessage = require('./map-running-fight-details-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapRunningFightDetailsExtendedMessage = function() {
  this.namedPartyTeams = [];
};

util.inherits(MapRunningFightDetailsExtendedMessage, BaseMessage);

MapRunningFightDetailsExtendedMessage.prototype.serialize = function(output) {
  this.serializeAs_MapRunningFightDetailsExtendedMessage(output);
};

MapRunningFightDetailsExtendedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapRunningFightDetailsExtendedMessage(input);
};

MapRunningFightDetailsExtendedMessage.prototype.serializeAs_MapRunningFightDetailsExtendedMessage = function(output) {
  this.serializeAs_MapRunningFightDetailsMessage(output);
  output.writeShort(this.namedPartyTeams.length);
  var _i1;
  while (_i1 < this.namedPartyTeams.length) {
    (this.namedPartyTeams[_i1]).serializeAs_NamedPartyTeam(output);
    _i1++;
  };
};

MapRunningFightDetailsExtendedMessage.prototype.deserializeAs_MapRunningFightDetailsExtendedMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _namedPartyTeamsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _namedPartyTeamsLen) {
    _item1 = new NamedPartyTeam();
    _item1.deserialize(input);
    this.namedPartyTeams.push(_item1);
    _i1++;
  };
};

MapRunningFightDetailsExtendedMessage.prototype.getMessageId = function() {
  return 6500;
};

MapRunningFightDetailsExtendedMessage.prototype.getClassName = function() {
  return 'MapRunningFightDetailsExtendedMessage';
};

module.exports.id = 6500;
module.exports.class = MapRunningFightDetailsExtendedMessage;