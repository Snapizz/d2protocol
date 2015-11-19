/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TaxCollectorInformations = require('../../../../types/game/guild/tax/tax-collector-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var AbstractTaxCollectorListMessage = (function (_super) {
    __extends(AbstractTaxCollectorListMessage, _super);
    function AbstractTaxCollectorListMessage() {
        this.informations = [];
        _super.call(this);
    }
    AbstractTaxCollectorListMessage.prototype.getMessageId = function () {
        return AbstractTaxCollectorListMessage.ID;
    };
    AbstractTaxCollectorListMessage.prototype.reset = function () {
        this.informations = [];
    };
    AbstractTaxCollectorListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AbstractTaxCollectorListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AbstractTaxCollectorListMessage.prototype.serialize = function (param1) {
        this.serializeAs_AbstractTaxCollectorListMessage(param1);
    };
    AbstractTaxCollectorListMessage.prototype.serializeAs_AbstractTaxCollectorListMessage = function (param1) {
        param1.writeShort(this.informations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.informations.length) {
            param1.writeShort((this.informations[_loc2_]).getTypeId());
            (this.informations[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    AbstractTaxCollectorListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractTaxCollectorListMessage(param1);
    };
    AbstractTaxCollectorListMessage.prototype.deserializeAs_AbstractTaxCollectorListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(TaxCollectorInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.informations.push(_loc5_);
            _loc3_++;
        }
    };
    AbstractTaxCollectorListMessage.ID = 6568;
    return AbstractTaxCollectorListMessage;
})(network_message_1.NetworkMessage);
module.exports = AbstractTaxCollectorListMessage;
