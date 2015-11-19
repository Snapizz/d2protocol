/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var GameRolePlayNpcQuestFlag = (function () {
    function GameRolePlayNpcQuestFlag() {
        this.questsToValidId = [];
        this.questsToStartId = [];
    }
    GameRolePlayNpcQuestFlag.prototype.getTypeId = function () {
        return GameRolePlayNpcQuestFlag.ID;
    };
    GameRolePlayNpcQuestFlag.prototype.reset = function () {
        this.questsToValidId = [];
        this.questsToStartId = [];
    };
    GameRolePlayNpcQuestFlag.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayNpcQuestFlag(param1);
    };
    GameRolePlayNpcQuestFlag.prototype.serializeAs_GameRolePlayNpcQuestFlag = function (param1) {
        param1.writeShort(this.questsToValidId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.questsToValidId.length) {
            if (this.questsToValidId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.questsToValidId[_loc2_] + ') on element 1 (starting at 1) of questsToValidId.');
            }
            param1.writeVarShort(this.questsToValidId[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.questsToStartId.length);
        var _loc3_ = 0;
        while (_loc3_ < this.questsToStartId.length) {
            if (this.questsToStartId[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.questsToStartId[_loc3_] + ') on element 2 (starting at 1) of questsToStartId.');
            }
            param1.writeVarShort(this.questsToStartId[_loc3_]);
            _loc3_++;
        }
    };
    GameRolePlayNpcQuestFlag.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayNpcQuestFlag(param1);
    };
    GameRolePlayNpcQuestFlag.prototype.deserializeAs_GameRolePlayNpcQuestFlag = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of questsToValidId.');
            }
            this.questsToValidId.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of questsToStartId.');
            }
            this.questsToStartId.push(_loc7_);
            _loc5_++;
        }
    };
    GameRolePlayNpcQuestFlag.ID = 384;
    return GameRolePlayNpcQuestFlag;
})();
module.exports = GameRolePlayNpcQuestFlag;
