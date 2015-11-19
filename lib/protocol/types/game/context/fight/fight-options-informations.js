/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
var FightOptionsInformations = (function () {
    function FightOptionsInformations() {
        this.isSecret = false;
        this.isRestrictedToPartyOnly = false;
        this.isClosed = false;
        this.isAskingForHelp = false;
    }
    FightOptionsInformations.prototype.getTypeId = function () {
        return FightOptionsInformations.ID;
    };
    FightOptionsInformations.prototype.reset = function () {
        this.isSecret = false;
        this.isRestrictedToPartyOnly = false;
        this.isClosed = false;
        this.isAskingForHelp = false;
    };
    FightOptionsInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightOptionsInformations(param1);
    };
    FightOptionsInformations.prototype.serializeAs_FightOptionsInformations = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isSecret);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isRestrictedToPartyOnly);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isClosed);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.isAskingForHelp);
        param1.writeByte(_loc2_);
    };
    FightOptionsInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightOptionsInformations(param1);
    };
    FightOptionsInformations.prototype.deserializeAs_FightOptionsInformations = function (param1) {
        var _loc2_ = param1.readByte();
        this.isSecret = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.isRestrictedToPartyOnly = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.isClosed = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.isAskingForHelp = BooleanByteWrapper.getFlag(_loc2_, 3);
    };
    FightOptionsInformations.ID = 20;
    return FightOptionsInformations;
})();
module.exports = FightOptionsInformations;
