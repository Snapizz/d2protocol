/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var MonsterInGroupLightInformations = (function () {
    function MonsterInGroupLightInformations() {
        this.creatureGenericId = 0;
        this.grade = 0;
    }
    MonsterInGroupLightInformations.prototype.getTypeId = function () {
        return MonsterInGroupLightInformations.ID;
    };
    MonsterInGroupLightInformations.prototype.reset = function () {
        this.creatureGenericId = 0;
        this.grade = 0;
    };
    MonsterInGroupLightInformations.prototype.serialize = function (param1) {
        this.serializeAs_MonsterInGroupLightInformations(param1);
    };
    MonsterInGroupLightInformations.prototype.serializeAs_MonsterInGroupLightInformations = function (param1) {
        param1.writeInt(this.creatureGenericId);
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element grade.');
        }
        param1.writeByte(this.grade);
    };
    MonsterInGroupLightInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_MonsterInGroupLightInformations(param1);
    };
    MonsterInGroupLightInformations.prototype.deserializeAs_MonsterInGroupLightInformations = function (param1) {
        this.creatureGenericId = param1.readInt();
        this.grade = param1.readByte();
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element of MonsterInGroupLightInformations.grade.');
        }
    };
    MonsterInGroupLightInformations.ID = 395;
    return MonsterInGroupLightInformations;
})();
module.exports = MonsterInGroupLightInformations;
