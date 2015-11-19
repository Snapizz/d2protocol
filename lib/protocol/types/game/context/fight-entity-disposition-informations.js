/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EntityDispositionInformations = require('./entity-disposition-informations');
var FightEntityDispositionInformations = (function (_super) {
    __extends(FightEntityDispositionInformations, _super);
    function FightEntityDispositionInformations() {
        this.carryingCharacterId = 0;
        _super.call(this);
    }
    FightEntityDispositionInformations.prototype.getTypeId = function () {
        return FightEntityDispositionInformations.ID;
    };
    FightEntityDispositionInformations.prototype.reset = function () {
        this.carryingCharacterId = 0;
    };
    FightEntityDispositionInformations.prototype.serialize = function (param1) {
        this.serializeAs_FightEntityDispositionInformations(param1);
    };
    FightEntityDispositionInformations.prototype.serializeAs_FightEntityDispositionInformations = function (param1) {
        _super.prototype.serializeAs_EntityDispositionInformations.call(this, param1);
        param1.writeInt(this.carryingCharacterId);
    };
    FightEntityDispositionInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_FightEntityDispositionInformations(param1);
    };
    FightEntityDispositionInformations.prototype.deserializeAs_FightEntityDispositionInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.carryingCharacterId = param1.readInt();
    };
    FightEntityDispositionInformations.ID = 217;
    return FightEntityDispositionInformations;
})(EntityDispositionInformations);
module.exports = FightEntityDispositionInformations;
