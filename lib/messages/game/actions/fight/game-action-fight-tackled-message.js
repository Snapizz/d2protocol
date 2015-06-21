var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameActionFightTackledMessage = function() {
    this.tacklersIds = [];
};

require('util').inherits(GameActionFightTackledMessage, require('../..../../').class);

GameActionFightTackledMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightTackledMessage(output);
};

GameActionFightTackledMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightTackledMessage(input);
};

GameActionFightTackledMessage.prototype.serializeAs_GameActionFightTackledMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessageAs_AbstractGameActionMessage(param1);
    param1.writeShort(this.tacklersIds.length);
    var _loc2_ = 0;
    while (_loc2_ < this.tacklersIds.length) {
        param1.writeInt(this.tacklersIds[_loc2_]);
        _loc2_++;
    }
};

GameActionFightTackledMessage.prototype.deserializeAs_GameActionFightTackledMessage = function(param1) {
    var _loc4_ = 0;
    this.deserializeAs_AbstractGameActionMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
        this.tacklersIds.push(_loc4_);
        _loc3_++;
    }
};

GameActionFightTackledMessage.prototype.getMessageId = function() {
    return 1004;
};

GameActionFightTackledMessage.prototype.getClassName = function() {
    return 'GameActionFightTackledMessage';
};

module.exports.id = 1004;
module.exports.class = GameActionFightTackledMessage;
module.exports.getInstance = function() {
    return new GameActionFightTackledMessage;
};