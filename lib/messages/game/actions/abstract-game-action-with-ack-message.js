var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var AbstractGameActionWithAckMessage = function() {
    this.waitAckId = 0;
};

require('util').inherits(AbstractGameActionWithAckMessage, require('./abstract-game-action-message.js').class);

AbstractGameActionWithAckMessage.prototype.serialize = function(output) {
    this.serializeAs_AbstractGameActionWithAckMessage(output);
};

AbstractGameActionWithAckMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AbstractGameActionWithAckMessage(input);
};

AbstractGameActionWithAckMessage.prototype.serializeAs_AbstractGameActionWithAckMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessageAs_AbstractGameActionMessage(param1);
    param1.writeShort(this.waitAckId);
};

AbstractGameActionWithAckMessage.prototype.deserializeAs_AbstractGameActionWithAckMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.waitAckId = param1.readShort();
};

AbstractGameActionWithAckMessage.prototype.getMessageId = function() {
    return 1001;
};

AbstractGameActionWithAckMessage.prototype.getClassName = function() {
    return 'AbstractGameActionWithAckMessage';
};

module.exports.id = 1001;
module.exports.class = AbstractGameActionWithAckMessage;
module.exports.getInstance = function() {
    return new AbstractGameActionWithAckMessage;
};