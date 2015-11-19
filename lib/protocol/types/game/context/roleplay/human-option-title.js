/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HumanOption = require('./human-option');
var HumanOptionTitle = (function (_super) {
    __extends(HumanOptionTitle, _super);
    function HumanOptionTitle() {
        this.titleId = 0;
        this.titleParam = '';
        _super.call(this);
    }
    HumanOptionTitle.prototype.getTypeId = function () {
        return HumanOptionTitle.ID;
    };
    HumanOptionTitle.prototype.reset = function () {
        this.titleId = 0;
        this.titleParam = '';
    };
    HumanOptionTitle.prototype.serialize = function (param1) {
        this.serializeAs_HumanOptionTitle(param1);
    };
    HumanOptionTitle.prototype.serializeAs_HumanOptionTitle = function (param1) {
        _super.prototype.serializeAs_HumanOption.call(this, param1);
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
        }
        param1.writeVarShort(this.titleId);
        param1.writeUTF(this.titleParam);
    };
    HumanOptionTitle.prototype.deserialize = function (param1) {
        this.deserializeAs_HumanOptionTitle(param1);
    };
    HumanOptionTitle.prototype.deserializeAs_HumanOptionTitle = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.titleId = param1.readVarUhShort();
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element of HumanOptionTitle.titleId.');
        }
        this.titleParam = param1.readUTF();
    };
    HumanOptionTitle.ID = 408;
    return HumanOptionTitle;
})(HumanOption);
module.exports = HumanOptionTitle;
