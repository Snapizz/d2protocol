/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PlayerStatus = (function () {
    function PlayerStatus() {
        this.statusId = 1;
    }
    PlayerStatus.prototype.getTypeId = function () {
        return PlayerStatus.ID;
    };
    PlayerStatus.prototype.reset = function () {
        this.statusId = 1;
    };
    PlayerStatus.prototype.serialize = function (param1) {
        this.serializeAs_PlayerStatus(param1);
    };
    PlayerStatus.prototype.serializeAs_PlayerStatus = function (param1) {
        param1.writeByte(this.statusId);
    };
    PlayerStatus.prototype.deserialize = function (param1) {
        this.deserializeAs_PlayerStatus(param1);
    };
    PlayerStatus.prototype.deserializeAs_PlayerStatus = function (param1) {
        this.statusId = param1.readByte();
        if (this.statusId < 0) {
            throw new Error('Forbidden value (' + this.statusId + ') on element of PlayerStatus.statusId.');
        }
    };
    PlayerStatus.ID = 415;
    return PlayerStatus;
})();
module.exports = PlayerStatus;
