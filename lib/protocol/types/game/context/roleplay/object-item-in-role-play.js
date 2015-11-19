/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ObjectItemInRolePlay = (function () {
    function ObjectItemInRolePlay() {
        this.cellId = 0;
        this.objectGID = 0;
    }
    ObjectItemInRolePlay.prototype.getTypeId = function () {
        return ObjectItemInRolePlay.ID;
    };
    ObjectItemInRolePlay.prototype.reset = function () {
        this.cellId = 0;
        this.objectGID = 0;
    };
    ObjectItemInRolePlay.prototype.serialize = function (param1) {
        this.serializeAs_ObjectItemInRolePlay(param1);
    };
    ObjectItemInRolePlay.prototype.serializeAs_ObjectItemInRolePlay = function (param1) {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
    };
    ObjectItemInRolePlay.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectItemInRolePlay(param1);
    };
    ObjectItemInRolePlay.prototype.deserializeAs_ObjectItemInRolePlay = function (param1) {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of ObjectItemInRolePlay.cellId.');
        }
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemInRolePlay.objectGID.');
        }
    };
    ObjectItemInRolePlay.ID = 198;
    return ObjectItemInRolePlay;
})();
module.exports = ObjectItemInRolePlay;
