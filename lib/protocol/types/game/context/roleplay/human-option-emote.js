/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HumanOption = require('./human-option');
var HumanOptionEmote = (function (_super) {
    __extends(HumanOptionEmote, _super);
    function HumanOptionEmote() {
        this.emoteId = 0;
        this.emoteStartTime = 0;
        _super.call(this);
    }
    HumanOptionEmote.prototype.getTypeId = function () {
        return HumanOptionEmote.ID;
    };
    HumanOptionEmote.prototype.reset = function () {
        this.emoteId = 0;
        this.emoteStartTime = 0;
    };
    HumanOptionEmote.prototype.serialize = function (param1) {
        this.serializeAs_HumanOptionEmote(param1);
    };
    HumanOptionEmote.prototype.serializeAs_HumanOptionEmote = function (param1) {
        _super.prototype.serializeAs_HumanOption.call(this, param1);
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);
        if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.emoteStartTime + ') on element emoteStartTime.');
        }
        param1.writeDouble(this.emoteStartTime);
    };
    HumanOptionEmote.prototype.deserialize = function (param1) {
        this.deserializeAs_HumanOptionEmote(param1);
    };
    HumanOptionEmote.prototype.deserializeAs_HumanOptionEmote = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of HumanOptionEmote.emoteId.');
        }
        this.emoteStartTime = param1.readDouble();
        if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.emoteStartTime + ') on element of HumanOptionEmote.emoteStartTime.');
        }
    };
    HumanOptionEmote.ID = 407;
    return HumanOptionEmote;
})(HumanOption);
module.exports = HumanOptionEmote;
