var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterSelectedForceMessage = function() {
    this.id = 0;
};

require('util').inherits(CharacterSelectedForceMessage, d2com.NetworkMessage.class);

CharacterSelectedForceMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterSelectedForceMessage(output);
};

CharacterSelectedForceMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterSelectedForceMessage(input);
};

CharacterSelectedForceMessage.prototype.serializeAs_CharacterSelectedForceMessage = function(param1) {
    if (this.id < 1 || this.id > 2147483647) {
        throw new Error("Forbidden value (" + this.id + ") on element id.");
    } else {
        param1.writeInt(this.id);
        return;
    }
};

CharacterSelectedForceMessage.prototype.deserializeAs_CharacterSelectedForceMessage = function(param1) {
    this.id = param1.readInt();
    if (this.id < 1 || this.id > 2147483647) {
        throw new Error("Forbidden value (" + this.id + ") on element of CharacterSelectedForceMessage.id.");
    } else {
        return;
    }
};

CharacterSelectedForceMessage.prototype.getMessageId = function() {
    return 6068;
};

CharacterSelectedForceMessage.prototype.getClassName = function() {
    return 'CharacterSelectedForceMessage';
};

module.exports.id = 6068;
module.exports.class = CharacterSelectedForceMessage;
module.exports.getInstance = function() {
    return new CharacterSelectedForceMessage;
};