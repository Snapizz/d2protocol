var d2com = require('d2com'),
  BaseMessage = require('./client-u-i-opened-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ClientUIOpenedByObjectMessage = function() {
  this.uid = 0;
};

util.inherits(ClientUIOpenedByObjectMessage, BaseMessage);

ClientUIOpenedByObjectMessage.prototype.serialize = function(output) {
  this.serializeAs_ClientUIOpenedByObjectMessage(output);
};

ClientUIOpenedByObjectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ClientUIOpenedByObjectMessage(input);
};

ClientUIOpenedByObjectMessage.prototype.serializeAs_ClientUIOpenedByObjectMessage = function(output) {
  this.serializeAs_ClientUIOpenedMessage(output);
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element uid.")));
  };
  output.writeVarInt(this.uid);
};

ClientUIOpenedByObjectMessage.prototype.deserializeAs_ClientUIOpenedByObjectMessage = function(input) {
  this.deserialize(input);
  this.uid = input.readVarUhInt();
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element of ClientUIOpenedByObjectMessage.uid.")));
  };
};

ClientUIOpenedByObjectMessage.prototype.getMessageId = function() {
  return 6463;
};

ClientUIOpenedByObjectMessage.prototype.getClassName = function() {
  return 'ClientUIOpenedByObjectMessage';
};

module.exports.id = 6463;
module.exports.class = ClientUIOpenedByObjectMessage;