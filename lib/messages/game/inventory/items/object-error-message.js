var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ObjectErrorMessage = function() {
    this.reason = 0;
};

require('util').inherits(ObjectErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ObjectErrorMessage();
};

ObjectErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_ObjectErrorMessage(output);
};

ObjectErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectErrorMessage(input);
};

ObjectErrorMessage.prototype.serializeAs_ObjectErrorMessage = function(param1) {
    param1.writeByte(this.reason);
};

ObjectErrorMessage.prototype.deserializeAs_ObjectErrorMessage = function(param1) {
    this.reason = param1.readByte();
};

ObjectErrorMessage.prototype.getMessageId = function() {
    return 3004;
};

ObjectErrorMessage.prototype.getClassName = function() {
    return 'ObjectErrorMessage';
};

module.exports.id = 3004;
module.exports.ObjectErrorMessage = ObjectErrorMessage;