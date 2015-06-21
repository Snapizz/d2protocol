var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameFightPlacementPossiblePositionsMessage = function() {
    this.positionsForChallengers = [];
    this.positionsForDefenders = [];
    this.teamNumber = 2;
};

require('util').inherits(GameFightPlacementPossiblePositionsMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameFightPlacementPossiblePositionsMessage();
};

GameFightPlacementPossiblePositionsMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightPlacementPossiblePositionsMessage(output);
};

GameFightPlacementPossiblePositionsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightPlacementPossiblePositionsMessage(input);
};

GameFightPlacementPossiblePositionsMessage.prototype.serializeAs_GameFightPlacementPossiblePositionsMessage = function(param1) {
    param1.writeShort(this.positionsForChallengers.length);
    var _loc2_ = 0;
    while (_loc2_ < this.positionsForChallengers.length) {
        if (this.positionsForChallengers[_loc2_] < 0 || this.positionsForChallengers[_loc2_] > 559) {
            throw new Error("Forbidden value (" + this.positionsForChallengers[_loc2_] + ") on element 1 (starting at 1) of positionsForChallengers.");
        } else {
            param1.writeVarShort(this.positionsForChallengers[_loc2_]);
            _loc2_++;
            continue;
        }
    }
    param1.writeShort(this.positionsForDefenders.length);
    var _loc3_ = 0;
    while (_loc3_ < this.positionsForDefenders.length) {
        if (this.positionsForDefenders[_loc3_] < 0 || this.positionsForDefenders[_loc3_] > 559) {
            throw new Error("Forbidden value (" + this.positionsForDefenders[_loc3_] + ") on element 2 (starting at 1) of positionsForDefenders.");
        } else {
            param1.writeVarShort(this.positionsForDefenders[_loc3_]);
            _loc3_++;
            continue;
        }
    }
    param1.writeByte(this.teamNumber);
};

GameFightPlacementPossiblePositionsMessage.prototype.deserializeAs_GameFightPlacementPossiblePositionsMessage = function(param1) {
    var _loc6_ = 0;
    var _loc7_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
        if (_loc6_ < 0 || _loc6_ > 559) {
            throw new Error("Forbidden value (" + _loc6_ + ") on elements of positionsForChallengers.");
        } else {
            this.positionsForChallengers.push(_loc6_);
            _loc3_++;
            continue;
        }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhShort();
        if (_loc7_ < 0 || _loc7_ > 559) {
            throw new Error("Forbidden value (" + _loc7_ + ") on elements of positionsForDefenders.");
        } else {
            this.positionsForDefenders.push(_loc7_);
            _loc5_++;
            continue;
        }
    }
    this.teamNumber = param1.readByte();
    if (this.teamNumber < 0) {
        throw new Error("Forbidden value (" + this.teamNumber + ") on element of GameFightPlacementPossiblePositionsMessage.teamNumber.");
    } else {
        return;
    }
};

GameFightPlacementPossiblePositionsMessage.prototype.getMessageId = function() {
    return 703;
};

GameFightPlacementPossiblePositionsMessage.prototype.getClassName = function() {
    return 'GameFightPlacementPossiblePositionsMessage';
};

module.exports.id = 703;
module.exports.GameFightPlacementPossiblePositionsMessage = GameFightPlacementPossiblePositionsMessage;