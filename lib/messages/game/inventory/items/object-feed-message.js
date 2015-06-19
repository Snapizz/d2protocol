var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectFeedMessage = function() {
  this.objectUID = 0;
  this.foodUID = 0;
  this.foodQuantity = 0;
};

util.inherits(ObjectFeedMessage, BaseMessage);

ObjectFeedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectFeedMessage(output);
};

ObjectFeedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectFeedMessage(input);
};

ObjectFeedMessage.prototype.serializeAs_ObjectFeedMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  if (this.foodUID < 0) {
    throw (new Error((("Forbidden value (" + this.foodUID) + ") on element foodUID.")));
  };
  output.writeVarInt(this.foodUID);
  if (this.foodQuantity < 0) {
    throw (new Error((("Forbidden value (" + this.foodQuantity) + ") on element foodQuantity.")));
  };
  output.writeVarInt(this.foodQuantity);
};

ObjectFeedMessage.prototype.deserializeAs_ObjectFeedMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectFeedMessage.objectUID.")));
  };
  this.foodUID = input.readVarUhInt();
  if (this.foodUID < 0) {
    throw (new Error((("Forbidden value (" + this.foodUID) + ") on element of ObjectFeedMessage.foodUID.")));
  };
  this.foodQuantity = input.readVarUhInt();
  if (this.foodQuantity < 0) {
    throw (new Error((("Forbidden value (" + this.foodQuantity) + ") on element of ObjectFeedMessage.foodQuantity.")));
  };
};

ObjectFeedMessage.prototype.getMessageId = function() {
  return 6290;
};

ObjectFeedMessage.prototype.getClassName = function() {
  return 'ObjectFeedMessage';
};

module.exports.id = 6290;
module.exports.class = ObjectFeedMessage;