var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var IgnoredDeleteResultMessage = function() {
    this.success = false;
    this.name = "";
    this.session = false;
};

require('util').inherits(IgnoredDeleteResultMessage, d2com.NetworkMessage.class);

IgnoredDeleteResultMessage.prototype.serialize = function(output) {
    this.serializeAs_IgnoredDeleteResultMessage(output);
};

IgnoredDeleteResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IgnoredDeleteResultMessage(input);
};

IgnoredDeleteResultMessage.prototype.serializeAs_IgnoredDeleteResultMessage = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.success);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.session);
    param1.writeByte(_loc2_);
    param1.writeUTF(this.name);
};

IgnoredDeleteResultMessage.prototype.deserializeAs_IgnoredDeleteResultMessage = function(param1) {
    var _loc2_ = param1.readByte();
    this.success = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.session = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.name = param1.readUTF();
};

IgnoredDeleteResultMessage.prototype.getMessageId = function() {
    return 5677;
};

IgnoredDeleteResultMessage.prototype.getClassName = function() {
    return 'IgnoredDeleteResultMessage';
};

module.exports.id = 5677;
module.exports.class = IgnoredDeleteResultMessage;
module.exports.getInstance = function() {
    return new IgnoredDeleteResultMessage;
};