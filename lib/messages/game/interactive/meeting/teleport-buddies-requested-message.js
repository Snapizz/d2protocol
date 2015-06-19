var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TeleportBuddiesRequestedMessage = function() {
  this.dungeonId = 0;
  this.inviterId = 0;
  this.invalidBuddiesIds = [];
};

util.inherits(TeleportBuddiesRequestedMessage, BaseMessage);

TeleportBuddiesRequestedMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportBuddiesRequestedMessage(output);
};

TeleportBuddiesRequestedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportBuddiesRequestedMessage(input);
};

TeleportBuddiesRequestedMessage.prototype.serializeAs_TeleportBuddiesRequestedMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
  if (this.inviterId < 0) {
    throw (new Error((("Forbidden value (" + this.inviterId) + ") on element inviterId.")));
  };
  output.writeVarInt(this.inviterId);
  output.writeShort(this.invalidBuddiesIds.length);
  var _i3;
  while (_i3 < this.invalidBuddiesIds.length) {
    if (this.invalidBuddiesIds[_i3] < 0) {
      throw (new Error((("Forbidden value (" + this.invalidBuddiesIds[_i3]) + ") on element 3 (starting at 1) of invalidBuddiesIds.")));
    };
    output.writeVarInt(this.invalidBuddiesIds[_i3]);
    _i3++;
  };
};

TeleportBuddiesRequestedMessage.prototype.deserializeAs_TeleportBuddiesRequestedMessage = function(input) {
  var _val3;
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of TeleportBuddiesRequestedMessage.dungeonId.")));
  };
  this.inviterId = input.readVarUhInt();
  if (this.inviterId < 0) {
    throw (new Error((("Forbidden value (" + this.inviterId) + ") on element of TeleportBuddiesRequestedMessage.inviterId.")));
  };
  var _invalidBuddiesIdsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _invalidBuddiesIdsLen) {
    _val3 = input.readVarUhInt();
    if (_val3 < 0) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of invalidBuddiesIds.")));
    };
    this.invalidBuddiesIds.push(_val3);
    _i3++;
  };
};

TeleportBuddiesRequestedMessage.prototype.getMessageId = function() {
  return 6302;
};

TeleportBuddiesRequestedMessage.prototype.getClassName = function() {
  return 'TeleportBuddiesRequestedMessage';
};

module.exports.id = 6302;
module.exports.class = TeleportBuddiesRequestedMessage;