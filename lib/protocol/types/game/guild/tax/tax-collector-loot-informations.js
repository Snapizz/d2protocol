/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
var TaxCollectorLootInformations = (function (_super) {
    __extends(TaxCollectorLootInformations, _super);
    function TaxCollectorLootInformations() {
        this.kamas = 0;
        this.experience = 0;
        this.pods = 0;
        this.itemsValue = 0;
        _super.call(this);
    }
    TaxCollectorLootInformations.prototype.getTypeId = function () {
        return TaxCollectorLootInformations.ID;
    };
    TaxCollectorLootInformations.prototype.reset = function () {
        this.kamas = 0;
        this.experience = 0;
        this.pods = 0;
        this.itemsValue = 0;
    };
    TaxCollectorLootInformations.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorLootInformations(param1);
    };
    TaxCollectorLootInformations.prototype.serializeAs_TaxCollectorLootInformations = function (param1) {
        _super.prototype.serializeAs_TaxCollectorComplementaryInformations.call(this, param1);
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
        }
        param1.writeVarInt(this.kamas);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeVarLong(this.experience);
        if (this.pods < 0) {
            throw new Error('Forbidden value (' + this.pods + ') on element pods.');
        }
        param1.writeVarInt(this.pods);
        if (this.itemsValue < 0) {
            throw new Error('Forbidden value (' + this.itemsValue + ') on element itemsValue.');
        }
        param1.writeVarInt(this.itemsValue);
    };
    TaxCollectorLootInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorLootInformations(param1);
    };
    TaxCollectorLootInformations.prototype.deserializeAs_TaxCollectorLootInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.kamas = param1.readVarUhInt();
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element of TaxCollectorLootInformations.kamas.');
        }
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of TaxCollectorLootInformations.experience.');
        }
        this.pods = param1.readVarUhInt();
        if (this.pods < 0) {
            throw new Error('Forbidden value (' + this.pods + ') on element of TaxCollectorLootInformations.pods.');
        }
        this.itemsValue = param1.readVarUhInt();
        if (this.itemsValue < 0) {
            throw new Error('Forbidden value (' + this.itemsValue + ') on element of TaxCollectorLootInformations.itemsValue.');
        }
    };
    TaxCollectorLootInformations.ID = 372;
    return TaxCollectorLootInformations;
})(TaxCollectorComplementaryInformations);
module.exports = TaxCollectorLootInformations;
