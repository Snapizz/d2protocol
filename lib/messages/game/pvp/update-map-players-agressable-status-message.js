var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var UpdateMapPlayersAgressableStatusMessage = function() {
  this.playerIds = [];
  this.enable = [];
};

util.inherits(UpdateMapPlayersAgressableStatusMessage, BaseMessage);

UpdateMapPlayersAgressableStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_UpdateMapPlayersAgressableStatusMessage(output);
};

UpdateMapPlayersAgressableStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateMapPlayersAgressableStatusMessage(input);
};

UpdateMapPlayersAgressableStatusMessage.prototype.serializeAs_UpdateMapPlayersAgressableStatusMessage = function(output) {
  output.writeShort(this.playerIds.length);
  var _i1;
  while (_i1 < this.playerIds.length) {
    if (this.playerIds[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.playerIds[_i1]) + ") on element 1 (starting at 1) of playerIds.")));
    };
    output.writeVarInt(this.playerIds[_i1]);
    _i1++;
  };
  output.writeShort(this.enable.length);
  var _i2;
  while (_i2 < this.enable.length) {
    output.writeByte(this.enable[_i2]);
    _i2++;
  };
};

UpdateMapPlayersAgressableStatusMessage.prototype.deserializeAs_UpdateMapPlayersAgressableStatusMessage = function(input) {
  var _val1;
  var _val2;
  var _playerIdsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _playerIdsLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of playerIds.")));
    };
    this.playerIds.push(_val1);
    _i1++;
  };
  var _enableLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _enableLen) {
    _val2 = input.readByte();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of enable.")));
    };
    this.enable.push(_val2);
    _i2++;
  };
};

UpdateMapPlayersAgressableStatusMessage.prototype.getMessageId = function() {
  return 6454;
};

UpdateMapPlayersAgressableStatusMessage.prototype.getClassName = function() {
  return 'UpdateMapPlayersAgressableStatusMessage';
};

module.exports.id = 6454;
module.exports.class = UpdateMapPlayersAgressableStatusMessage;