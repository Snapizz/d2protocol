var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChallengeFightJoinRefusedMessage = function() {
  this.playerId = 0;
  this.reason = 0;
};

util.inherits(ChallengeFightJoinRefusedMessage, BaseMessage);

ChallengeFightJoinRefusedMessage.prototype.serialize = function(output) {
  this.serializeAs_ChallengeFightJoinRefusedMessage(output);
};

ChallengeFightJoinRefusedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChallengeFightJoinRefusedMessage(input);
};

ChallengeFightJoinRefusedMessage.prototype.serializeAs_ChallengeFightJoinRefusedMessage = function(output) {
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeByte(this.reason);
};

ChallengeFightJoinRefusedMessage.prototype.deserializeAs_ChallengeFightJoinRefusedMessage = function(input) {
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of ChallengeFightJoinRefusedMessage.playerId.")));
  };
  this.reason = input.readByte();
};

ChallengeFightJoinRefusedMessage.prototype.getMessageId = function() {
  return 5908;
};

ChallengeFightJoinRefusedMessage.prototype.getClassName = function() {
  return 'ChallengeFightJoinRefusedMessage';
};

module.exports.id = 5908;
module.exports.class = ChallengeFightJoinRefusedMessage;