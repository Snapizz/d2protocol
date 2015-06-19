var d2com = require('d2com'),
  BaseMessage = require('./compass-update-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

CompassUpdatePartyMemberMessage.prototype.serializeAs_CompassUpdatePartyMemberMessage = function(output) {
  this.serializeAs_CompassUpdateMessage(output);
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element memberId.")));
  };
  output.writeVarInt(this.memberId);
};

CompassUpdatePartyMemberMessage.prototype.deserializeAs_CompassUpdatePartyMemberMessage = function(input) {
  this.deserialize(input);
  this.memberId = input.readVarUhInt();
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element of CompassUpdatePartyMemberMessage.memberId.")));
  };
};

CompassUpdatePartyMemberMessage.prototype.getMessageId = function() {
  return 5589;
};

CompassUpdatePartyMemberMessage.prototype.getClassName = function() {
  return 'CompassUpdatePartyMemberMessage';
};

module.exports.id = 5589;
module.exports.class = CompassUpdatePartyMemberMessage;