var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var NicknameRefusedMessage = module.exports = function() {
    this.reason = 99;

    return this;
};

require('util').inherits(NicknameRefusedMessage, d2com.NetworkMessage.class);

NicknameRefusedMessage.prototype.serialize = function(output) {
    this.serializeAs_NicknameRefusedMessage(output);
};

NicknameRefusedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NicknameRefusedMessage(input);
};

NicknameRefusedMessage.prototype.serializeAs_NicknameRefusedMessage = function(param1) {
    param1.writeByte(this.reason);
};

NicknameRefusedMessage.prototype.deserializeAs_NicknameRefusedMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of NicknameRefusedMessage.reason.");
    } else {
        return;
    }
};

NicknameRefusedMessage.prototype.getMessageId = function() {
    return 5638;
};

NicknameRefusedMessage.prototype.getClassName = function() {
    return 'NicknameRefusedMessage';
};

module.exports.id = 5638;