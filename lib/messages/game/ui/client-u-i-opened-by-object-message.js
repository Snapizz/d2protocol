var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

ClientUIOpenedByObjectMessage.prototype.serializeAs_ClientUIOpenedByObjectMessage = function(param1) {
  this.serializeAs_ClientUIOpenedMessage(param1);
  if (this.uid < 0) {
    throw new Error("Forbidden value (" + this.uid + ") on element uid.");
  } else {
    param1.writeVarInt(this.uid);
    return;
  }
};

ClientUIOpenedByObjectMessage.prototype.deserializeAs_ClientUIOpenedByObjectMessage = function(param1) {
  this.deserialize(param1);
  this.uid = param1.readVarUhInt();
  if (this.uid < 0) {
    throw new Error("Forbidden value (" + this.uid + ") on element of ClientUIOpenedByObjectMessage.uid.");
  } else {
    return;
  }
};

ClientUIOpenedByObjectMessage.prototype.getMessageId = function() {
  return 6463;
};

ClientUIOpenedByObjectMessage.prototype.getClassName = function() {
  return 'ClientUIOpenedByObjectMessage';
};

module.exports.id = 6463;
module.exports.class = ClientUIOpenedByObjectMessage;
module.exports.getInstance = function() {
  return new ClientUIOpenedByObjectMessage();
};