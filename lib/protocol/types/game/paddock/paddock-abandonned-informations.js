/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PaddockBuyableInformations = require('./paddock-buyable-informations');
var PaddockAbandonnedInformations = (function (_super) {
    __extends(PaddockAbandonnedInformations, _super);
    function PaddockAbandonnedInformations() {
        this.guildId = 0;
        _super.call(this);
    }
    PaddockAbandonnedInformations.prototype.getTypeId = function () {
        return PaddockAbandonnedInformations.ID;
    };
    PaddockAbandonnedInformations.prototype.reset = function () {
        this.guildId = 0;
    };
    PaddockAbandonnedInformations.prototype.serialize = function (param1) {
        this.serializeAs_PaddockAbandonnedInformations(param1);
    };
    PaddockAbandonnedInformations.prototype.serializeAs_PaddockAbandonnedInformations = function (param1) {
        _super.prototype.serializeAs_PaddockBuyableInformations.call(this, param1);
        param1.writeInt(this.guildId);
    };
    PaddockAbandonnedInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockAbandonnedInformations(param1);
    };
    PaddockAbandonnedInformations.prototype.deserializeAs_PaddockAbandonnedInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guildId = param1.readInt();
    };
    PaddockAbandonnedInformations.ID = 133;
    return PaddockAbandonnedInformations;
})(PaddockBuyableInformations);
module.exports = PaddockAbandonnedInformations;
