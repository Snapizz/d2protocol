var GameRolePlayNpcQuestFlag = function() {
    this.questsToValidId = [];
    this.questsToStartId = [];
};

module.exports = function() {
    return new GameRolePlayNpcQuestFlag();
};

GameRolePlayNpcQuestFlag.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayNpcQuestFlag(output);
};

GameRolePlayNpcQuestFlag.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayNpcQuestFlag(input);
};

GameRolePlayNpcQuestFlag.prototype.serializeAs_GameRolePlayNpcQuestFlag = function(param1) {
    param1.writeShort(this.questsToValidId.length);
    var _loc2_ = 0;
    while (_loc2_ < this.questsToValidId.length) {
        if (this.questsToValidId[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.questsToValidId[_loc2_] + ") on element 1 (starting at 1) of questsToValidId.");
        } else {
            param1.writeVarShort(this.questsToValidId[_loc2_]);
            _loc2_++;
            continue;
        }
    }
    param1.writeShort(this.questsToStartId.length);
    var _loc3_ = 0;
    while (_loc3_ < this.questsToStartId.length) {
        if (this.questsToStartId[_loc3_] < 0) {
            throw new Error("Forbidden value (" + this.questsToStartId[_loc3_] + ") on element 2 (starting at 1) of questsToStartId.");
        } else {
            param1.writeVarShort(this.questsToStartId[_loc3_]);
            _loc3_++;
            continue;
        }
    }
};

GameRolePlayNpcQuestFlag.prototype.deserializeAs_GameRolePlayNpcQuestFlag = function(param1) {
    var _loc6_ = 0;
    var _loc7_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
        if (_loc6_ < 0) {
            throw new Error("Forbidden value (" + _loc6_ + ") on elements of questsToValidId.");
        } else {
            this.questsToValidId.push(_loc6_);
            _loc3_++;
            continue;
        }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhShort();
        if (_loc7_ < 0) {
            throw new Error("Forbidden value (" + _loc7_ + ") on elements of questsToStartId.");
        } else {
            this.questsToStartId.push(_loc7_);
            _loc5_++;
            continue;
        }
    }
};

GameRolePlayNpcQuestFlag.prototype.getTypeId = function() {
    return 384;
};

GameRolePlayNpcQuestFlag.prototype.getClassName = function() {
    return 'GameRolePlayNpcQuestFlag';
};

module.exports.id = 384;
module.exports.GameRolePlayNpcQuestFlag = GameRolePlayNpcQuestFlag;