var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameContextRemoveMultipleElementsMessage = function() {
    this.id = [];
};

require('util').inherits(GameContextRemoveMultipleElementsMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameContextRemoveMultipleElementsMessage();
};

GameContextRemoveMultipleElementsMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextRemoveMultipleElementsMessage(output);
};

GameContextRemoveMultipleElementsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextRemoveMultipleElementsMessage(input);
};

GameContextRemoveMultipleElementsMessage.prototype.serializeAs_GameContextRemoveMultipleElementsMessage = function(param1) {
    param1.writeShort(this.id.length);
    var _loc2_ = 0;
    while (_loc2_ < this.id.length) {
        param1.writeInt(this.id[_loc2_]);
        _loc2_++;
    }
};

GameContextRemoveMultipleElementsMessage.prototype.deserializeAs_GameContextRemoveMultipleElementsMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
        this.id.push(_loc4_);
        _loc3_++;
    }
};

GameContextRemoveMultipleElementsMessage.prototype.getMessageId = function() {
    return 252;
};

GameContextRemoveMultipleElementsMessage.prototype.getClassName = function() {
    return 'GameContextRemoveMultipleElementsMessage';
};

module.exports.id = 252;
module.exports.GameContextRemoveMultipleElementsMessage = GameContextRemoveMultipleElementsMessage;