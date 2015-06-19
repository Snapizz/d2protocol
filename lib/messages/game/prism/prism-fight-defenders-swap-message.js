var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismFightDefendersSwapMessage = function() {
  this.subAreaId = 0;
  this.fightId = 0;
  this.fighterId1 = 0;
  this.fighterId2 = 0;
};

util.inherits(PrismFightDefendersSwapMessage, BaseMessage);

PrismFightDefendersSwapMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightDefendersSwapMessage(output);
};

PrismFightDefendersSwapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightDefendersSwapMessage(input);
};

PrismFightDefendersSwapMessage.prototype.serializeAs_PrismFightDefendersSwapMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeShort(this.subAreaId);
  if ((((this.fightId < -9007199254740992)) || ((this.fightId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeDouble(this.fightId);
  if (this.fighterId1 < 0) {
    throw (new Error((("Forbidden value (" + this.fighterId1) + ") on element fighterId1.")));
  };
  output.writeInt(this.fighterId1);
  if (this.fighterId2 < 0) {
    throw (new Error((("Forbidden value (" + this.fighterId2) + ") on element fighterId2.")));
  };
  output.writeInt(this.fighterId2);
};

PrismFightDefendersSwapMessage.prototype.deserializeAs_PrismFightDefendersSwapMessage = function(input) {
  this.subAreaId = input.readShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismFightDefendersSwapMessage.subAreaId.")));
  };
  this.fightId = input.readDouble();
  if ((((this.fightId < -9007199254740992)) || ((this.fightId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of PrismFightDefendersSwapMessage.fightId.")));
  };
  this.fighterId1 = input.readInt();
  if (this.fighterId1 < 0) {
    throw (new Error((("Forbidden value (" + this.fighterId1) + ") on element of PrismFightDefendersSwapMessage.fighterId1.")));
  };
  this.fighterId2 = input.readInt();
  if (this.fighterId2 < 0) {
    throw (new Error((("Forbidden value (" + this.fighterId2) + ") on element of PrismFightDefendersSwapMessage.fighterId2.")));
  };
};

PrismFightDefendersSwapMessage.prototype.getMessageId = function() {
  return 5902;
};

PrismFightDefendersSwapMessage.prototype.getClassName = function() {
  return 'PrismFightDefendersSwapMessage';
};

module.exports.id = 5902;
module.exports.class = PrismFightDefendersSwapMessage;