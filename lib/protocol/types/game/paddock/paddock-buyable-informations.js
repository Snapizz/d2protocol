/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PaddockInformations = require('./paddock-informations');
var PaddockBuyableInformations = (function (_super) {
    __extends(PaddockBuyableInformations, _super);
    function PaddockBuyableInformations() {
        this.price = 0;
        this.locked = false;
        _super.call(this);
    }
    PaddockBuyableInformations.prototype.getTypeId = function () {
        return PaddockBuyableInformations.ID;
    };
    PaddockBuyableInformations.prototype.reset = function () {
        this.price = 0;
        this.locked = false;
    };
    PaddockBuyableInformations.prototype.serialize = function (param1) {
        this.serializeAs_PaddockBuyableInformations(param1);
    };
    PaddockBuyableInformations.prototype.serializeAs_PaddockBuyableInformations = function (param1) {
        _super.prototype.serializeAs_PaddockInformations.call(this, param1);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
        param1.writeBoolean(this.locked);
    };
    PaddockBuyableInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockBuyableInformations(param1);
    };
    PaddockBuyableInformations.prototype.deserializeAs_PaddockBuyableInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PaddockBuyableInformations.price.');
        }
        this.locked = param1.readBoolean();
    };
    PaddockBuyableInformations.ID = 130;
    return PaddockBuyableInformations;
})(PaddockInformations);
module.exports = PaddockBuyableInformations;
