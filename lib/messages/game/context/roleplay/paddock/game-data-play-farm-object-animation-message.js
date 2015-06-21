var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameDataPlayFarmObjectAnimationMessage = function() {
    this.cellId = [];
};

require('util').inherits(GameDataPlayFarmObjectAnimationMessage, d2com.NetworkMessage.class);

GameDataPlayFarmObjectAnimationMessage.prototype.serialize = function(output) {
    this.serializeAs_GameDataPlayFarmObjectAnimationMessage(output);
};

GameDataPlayFarmObjectAnimationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameDataPlayFarmObjectAnimationMessage(input);
};

GameDataPlayFarmObjectAnimationMessage.prototype.serializeAs_GameDataPlayFarmObjectAnimationMessage = function(param1) {
    param1.writeShort(this.cellId.length);
    var _loc2_ = 0;
    while (_loc2_ < this.cellId.length) {
        if (this.cellId[_loc2_] < 0 || this.cellId[_loc2_] > 559) {
            throw new Error("Forbidden value (" + this.cellId[_loc2_] + ") on element 1 (starting at 1) of cellId.");
        } else {
            param1.writeVarShort(this.cellId[_loc2_]);
            _loc2_++;
            continue;
        }
    }
};

GameDataPlayFarmObjectAnimationMessage.prototype.deserializeAs_GameDataPlayFarmObjectAnimationMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
        if (_loc4_ < 0 || _loc4_ > 559) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of cellId.");
        } else {
            this.cellId.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
};

GameDataPlayFarmObjectAnimationMessage.prototype.getMessageId = function() {
    return 6026;
};

GameDataPlayFarmObjectAnimationMessage.prototype.getClassName = function() {
    return 'GameDataPlayFarmObjectAnimationMessage';
};

module.exports.id = 6026;
module.exports.class = GameDataPlayFarmObjectAnimationMessage;
module.exports.getInstance = function() {
    return new GameDataPlayFarmObjectAnimationMessage;
};