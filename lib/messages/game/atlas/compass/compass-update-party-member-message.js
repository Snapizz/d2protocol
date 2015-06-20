var d2com = require('d2com'),
  BaseMessage = require('./compass-update-party-member-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var CompassUpdatePartyMemberMessage = function() {
  this.memberId = 0;
};

util.inherits(CompassUpdatePartyMemberMessage, BaseMessage);

CompassUpdatePartyMemberMessage.prototype.serialize = function(output) {
  this.serializeAs_CompassUpdatePartyMemberMessage(output);
};

CompassUpdatePartyMemberMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CompassUpdatePartyMemberMessage(input);
};

CompassUpdatePartyMemberMessage.prototype.serializeAs_CompassUpdatePartyMemberMessage = function(param1) {
  this.serializeAs_CompassUpdateMessage(param1);
  if (this.memberId < 0) {
    throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
  } else {
    param1.writeVarInt(this.memberId);
    return;
  }
};

CompassUpdatePartyMemberMessage.prototype.deserializeAs_CompassUpdatePartyMemberMessage = function(param1) {
  this.deserialize(param1);
  this.memberId = param1.readVarUhInt();
  if (this.memberId < 0) {
    throw new Error("Forbidden value (" + this.memberId + ") on element of CompassUpdatePartyMemberMessage.memberId.");
  } else {
    return;
  }
};

CompassUpdatePartyMemberMessage.prototype.getMessageId = function() {
  return 5589;
};

CompassUpdatePartyMemberMessage.prototype.getClassName = function() {
  return 'CompassUpdatePartyMemberMessage';
};

module.exports.id = 5589;
module.exports.class = CompassUpdatePartyMemberMessage;
module.exports.getInstance = function() {
  return new CompassUpdatePartyMemberMessage();
};