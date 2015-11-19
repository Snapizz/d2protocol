/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
var BasicGuildInformations = require('../../context/roleplay/basic-guild-informations');
var TaxCollectorGuildInformations = (function (_super) {
    __extends(TaxCollectorGuildInformations, _super);
    function TaxCollectorGuildInformations() {
        this.guild = new BasicGuildInformations();
        _super.call(this);
    }
    TaxCollectorGuildInformations.prototype.getTypeId = function () {
        return TaxCollectorGuildInformations.ID;
    };
    TaxCollectorGuildInformations.prototype.reset = function () {
        this.guild = new BasicGuildInformations();
    };
    TaxCollectorGuildInformations.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorGuildInformations(param1);
    };
    TaxCollectorGuildInformations.prototype.serializeAs_TaxCollectorGuildInformations = function (param1) {
        _super.prototype.serializeAs_TaxCollectorComplementaryInformations.call(this, param1);
        this.guild.serializeAs_BasicGuildInformations(param1);
    };
    TaxCollectorGuildInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorGuildInformations(param1);
    };
    TaxCollectorGuildInformations.prototype.deserializeAs_TaxCollectorGuildInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guild = new BasicGuildInformations();
        this.guild.deserialize(param1);
    };
    TaxCollectorGuildInformations.ID = 446;
    return TaxCollectorGuildInformations;
})(TaxCollectorComplementaryInformations);
module.exports = TaxCollectorGuildInformations;
