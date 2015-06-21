var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicWhoIsNoMatchMessage = module.exports = function() {
    this.search = "";

    return this;
};

require('util').inherits(BasicWhoIsNoMatchMessage, d2com.NetworkMessage.class);

BasicWhoIsNoMatchMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicWhoIsNoMatchMessage(output);
};

BasicWhoIsNoMatchMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicWhoIsNoMatchMessage(input);
};

BasicWhoIsNoMatchMessage.prototype.serializeAs_BasicWhoIsNoMatchMessage = function(param1) {
    param1.writeUTF(this.search);
};

BasicWhoIsNoMatchMessage.prototype.deserializeAs_BasicWhoIsNoMatchMessage = function(param1) {
    this.search = param1.readUTF();
};

BasicWhoIsNoMatchMessage.prototype.getMessageId = function() {
    return 179;
};

BasicWhoIsNoMatchMessage.prototype.getClassName = function() {
    return 'BasicWhoIsNoMatchMessage';
};

module.exports.id = 179;