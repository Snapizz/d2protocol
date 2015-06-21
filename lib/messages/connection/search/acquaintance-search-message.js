var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AcquaintanceSearchMessage = function() {
    this.nickname = "";
};

require('util').inherits(AcquaintanceSearchMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AcquaintanceSearchMessage();
};

AcquaintanceSearchMessage.prototype.serialize = function(output) {
    this.serializeAs_AcquaintanceSearchMessage(output);
};

AcquaintanceSearchMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AcquaintanceSearchMessage(input);
};

AcquaintanceSearchMessage.prototype.serializeAs_AcquaintanceSearchMessage = function(param1) {
    param1.writeUTF(this.nickname);
};

AcquaintanceSearchMessage.prototype.deserializeAs_AcquaintanceSearchMessage = function(param1) {
    this.nickname = param1.readUTF();
};

AcquaintanceSearchMessage.prototype.getMessageId = function() {
    return 6144;
};

AcquaintanceSearchMessage.prototype.getClassName = function() {
    return 'AcquaintanceSearchMessage';
};

module.exports.id = 6144;
module.exports.AcquaintanceSearchMessage = AcquaintanceSearchMessage;