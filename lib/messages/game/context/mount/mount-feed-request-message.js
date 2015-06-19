var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountFeedRequestMessage = function() {
  this.mountUid = 0;
  this.mountLocation = 0;
  this.mountFoodUid = 0;
  this.quantity = 0;
};

util.inherits(MountFeedRequestMessage, BaseMessage);

MountFeedRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MountFeedRequestMessage(output);
};

MountFeedRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountFeedRequestMessage(input);
};

MountFeedRequestMessage.prototype.serializeAs_MountFeedRequestMessage = function(output) {
  if ((((this.mountUid < 0)) || ((this.mountUid > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountUid) + ") on element mountUid.")));
  };
  output.writeVarLong(this.mountUid);
  output.writeByte(this.mountLocation);
  if (this.mountFoodUid < 0) {
    throw (new Error((("Forbidden value (" + this.mountFoodUid) + ") on element mountFoodUid.")));
  };
  output.writeVarInt(this.mountFoodUid);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

MountFeedRequestMessage.prototype.deserializeAs_MountFeedRequestMessage = function(input) {
  this.mountUid = input.readVarUhLong();
  if ((((this.mountUid < 0)) || ((this.mountUid > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountUid) + ") on element of MountFeedRequestMessage.mountUid.")));
  };
  this.mountLocation = input.readByte();
  this.mountFoodUid = input.readVarUhInt();
  if (this.mountFoodUid < 0) {
    throw (new Error((("Forbidden value (" + this.mountFoodUid) + ") on element of MountFeedRequestMessage.mountFoodUid.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of MountFeedRequestMessage.quantity.")));
  };
};

MountFeedRequestMessage.prototype.getMessageId = function() {
  return 6189;
};

MountFeedRequestMessage.prototype.getClassName = function() {
  return 'MountFeedRequestMessage';
};

module.exports.id = 6189;
module.exports.class = MountFeedRequestMessage;