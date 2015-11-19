/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HumanOption = require('./human-option');
var HumanOptionObjectUse = (function (_super) {
    __extends(HumanOptionObjectUse, _super);
    function HumanOptionObjectUse() {
        this.delayTypeId = 0;
        this.delayEndTime = 0;
        this.objectGID = 0;
        _super.call(this);
    }
    HumanOptionObjectUse.prototype.getTypeId = function () {
        return HumanOptionObjectUse.ID;
    };
    HumanOptionObjectUse.prototype.reset = function () {
        this.delayTypeId = 0;
        this.delayEndTime = 0;
        this.objectGID = 0;
    };
    HumanOptionObjectUse.prototype.serialize = function (param1) {
        this.serializeAs_HumanOptionObjectUse(param1);
    };
    HumanOptionObjectUse.prototype.serializeAs_HumanOptionObjectUse = function (param1) {
        _super.prototype.serializeAs_HumanOption.call(this, param1);
        param1.writeByte(this.delayTypeId);
        if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.delayEndTime + ') on element delayEndTime.');
        }
        param1.writeDouble(this.delayEndTime);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
    };
    HumanOptionObjectUse.prototype.deserialize = function (param1) {
        this.deserializeAs_HumanOptionObjectUse(param1);
    };
    HumanOptionObjectUse.prototype.deserializeAs_HumanOptionObjectUse = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.delayTypeId = param1.readByte();
        if (this.delayTypeId < 0) {
            throw new Error('Forbidden value (' + this.delayTypeId + ') on element of HumanOptionObjectUse.delayTypeId.');
        }
        this.delayEndTime = param1.readDouble();
        if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.delayEndTime + ') on element of HumanOptionObjectUse.delayEndTime.');
        }
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of HumanOptionObjectUse.objectGID.');
        }
    };
    HumanOptionObjectUse.ID = 449;
    return HumanOptionObjectUse;
})(HumanOption);
module.exports = HumanOptionObjectUse;
