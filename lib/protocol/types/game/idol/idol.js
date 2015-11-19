/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var Idol = (function () {
    function Idol() {
        this.id = 0;
        this.xpBonusPercent = 0;
        this.dropBonusPercent = 0;
    }
    Idol.prototype.getTypeId = function () {
        return Idol.ID;
    };
    Idol.prototype.reset = function () {
        this.id = 0;
        this.xpBonusPercent = 0;
        this.dropBonusPercent = 0;
    };
    Idol.prototype.serialize = function (param1) {
        this.serializeAs_Idol(param1);
    };
    Idol.prototype.serializeAs_Idol = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        if (this.xpBonusPercent < 0) {
            throw new Error('Forbidden value (' + this.xpBonusPercent + ') on element xpBonusPercent.');
        }
        param1.writeVarShort(this.xpBonusPercent);
        if (this.dropBonusPercent < 0) {
            throw new Error('Forbidden value (' + this.dropBonusPercent + ') on element dropBonusPercent.');
        }
        param1.writeVarShort(this.dropBonusPercent);
    };
    Idol.prototype.deserialize = function (param1) {
        this.deserializeAs_Idol(param1);
    };
    Idol.prototype.deserializeAs_Idol = function (param1) {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of Idol.id.');
        }
        this.xpBonusPercent = param1.readVarUhShort();
        if (this.xpBonusPercent < 0) {
            throw new Error('Forbidden value (' + this.xpBonusPercent + ') on element of Idol.xpBonusPercent.');
        }
        this.dropBonusPercent = param1.readVarUhShort();
        if (this.dropBonusPercent < 0) {
            throw new Error('Forbidden value (' + this.dropBonusPercent + ') on element of Idol.dropBonusPercent.');
        }
    };
    Idol.ID = 489;
    return Idol;
})();
module.exports = Idol;
