var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChangeMapMessage = function() {
  this.mapId = 0;
};

util.inherits(ChangeMapMessage, BaseMessage);

ChangeMapMessage.prototype.serialize = function(output) {
  this.serializeAs_ChangeMapMessage(output);
};

ChangeMapMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChangeMapMessage(input);
};

ChangeMapMessage.prototype.serializeAs_ChangeMapMessage = function(output) {
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element mapId.")));
  };
  output.writeInt(this.mapId);
};

ChangeMapMessage.prototype.deserializeAs_ChangeMapMessage = function(input) {
  this.mapId = input.readInt();
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element of ChangeMapMessage.mapId.")));
  };
};

ChangeMapMessage.prototype.getMessageId = function() {
  return 221;
};

ChangeMapMessage.prototype.getClassName = function() {
  return 'ChangeMapMessage';
};

module.exports.id = 221;
module.exports.class = ChangeMapMessage;