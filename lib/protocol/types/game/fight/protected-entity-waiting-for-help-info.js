/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ProtectedEntityWaitingForHelpInfo = (function () {
    function ProtectedEntityWaitingForHelpInfo() {
        this.timeLeftBeforeFight = 0;
        this.waitTimeForPlacement = 0;
        this.nbPositionForDefensors = 0;
    }
    ProtectedEntityWaitingForHelpInfo.prototype.getTypeId = function () {
        return ProtectedEntityWaitingForHelpInfo.ID;
    };
    ProtectedEntityWaitingForHelpInfo.prototype.reset = function () {
        this.timeLeftBeforeFight = 0;
        this.waitTimeForPlacement = 0;
        this.nbPositionForDefensors = 0;
    };
    ProtectedEntityWaitingForHelpInfo.prototype.serialize = function (param1) {
        this.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
    };
    ProtectedEntityWaitingForHelpInfo.prototype.serializeAs_ProtectedEntityWaitingForHelpInfo = function (param1) {
        param1.writeInt(this.timeLeftBeforeFight);
        param1.writeInt(this.waitTimeForPlacement);
        if (this.nbPositionForDefensors < 0) {
            throw new Error('Forbidden value (' + this.nbPositionForDefensors + ') on element nbPositionForDefensors.');
        }
        param1.writeByte(this.nbPositionForDefensors);
    };
    ProtectedEntityWaitingForHelpInfo.prototype.deserialize = function (param1) {
        this.deserializeAs_ProtectedEntityWaitingForHelpInfo(param1);
    };
    ProtectedEntityWaitingForHelpInfo.prototype.deserializeAs_ProtectedEntityWaitingForHelpInfo = function (param1) {
        this.timeLeftBeforeFight = param1.readInt();
        this.waitTimeForPlacement = param1.readInt();
        this.nbPositionForDefensors = param1.readByte();
        if (this.nbPositionForDefensors < 0) {
            throw new Error('Forbidden value (' + this.nbPositionForDefensors + ') on element of ProtectedEntityWaitingForHelpInfo.nbPositionForDefensors.');
        }
    };
    ProtectedEntityWaitingForHelpInfo.ID = 186;
    return ProtectedEntityWaitingForHelpInfo;
})();
module.exports = ProtectedEntityWaitingForHelpInfo;
