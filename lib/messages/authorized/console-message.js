var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ConsoleMessage = function() {
    this.type = 0;
    this.content = "";
};

require('util').inherits(ConsoleMessage, d2com.NetworkMessage.class);

ConsoleMessage.prototype.serialize = function(output) {
    this.serializeAs_ConsoleMessage(output);
};

ConsoleMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ConsoleMessage(input);
};

ConsoleMessage.prototype.serializeAs_ConsoleMessage = function(param1) {
    param1.writeByte(this.type);
    param1.writeUTF(this.content);
};

ConsoleMessage.prototype.deserializeAs_ConsoleMessage = function(param1) {
    this.type = param1.readByte();
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element of ConsoleMessage.type.");
    } else {
        this.content = param1.readUTF();
        return;
    }
};

ConsoleMessage.prototype.getMessageId = function() {
    return 75;
};

ConsoleMessage.prototype.getClassName = function() {
    return 'ConsoleMessage';
};

module.exports.id = 75;
module.exports.class = ConsoleMessage;
module.exports.getInstance = function() {
    return new ConsoleMessage;
};