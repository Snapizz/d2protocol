var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextRemoveElementMessage = module.exports = function() {
    this.id = 0;

    return this;
};

require('util').inherits(GameContextRemoveElementMessage, d2com.NetworkMessage.class);

GameContextRemoveElementMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextRemoveElementMessage(output);
};

GameContextRemoveElementMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextRemoveElementMessage(input);
};

GameContextRemoveElementMessage.prototype.serializeAs_GameContextRemoveElementMessage = function(param1) {
    param1.writeInt(this.id);
};

GameContextRemoveElementMessage.prototype.deserializeAs_GameContextRemoveElementMessage = function(param1) {
    this.id = param1.readInt();
};

GameContextRemoveElementMessage.prototype.getMessageId = function() {
    return 251;
};

GameContextRemoveElementMessage.prototype.getClassName = function() {
    return 'GameContextRemoveElementMessage';
};

module.exports.id = 251;