var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var AcquaintanceSearchMessage = function() {
    this.nickname = "";
};

require('util').inherits(AcquaintanceSearchMessage, d2com.NetworkMessage.class);

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
module.exports.class = AcquaintanceSearchMessage;
module.exports.getInstance = function() {
    return new AcquaintanceSearchMessage;
};