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
var TaxCollectorMovementAddMessage = (function (_super) {
    __extends(TaxCollectorMovementAddMessage, _super);
    function TaxCollectorMovementAddMessage() {
        this.informations = new TaxCollectorInformations();
        _super.call(this);
    }
    TaxCollectorMovementAddMessage.prototype.getMessageId = function () {
        return TaxCollectorMovementAddMessage.ID;
    };
    TaxCollectorMovementAddMessage.prototype.reset = function () {
        this.informations = new TaxCollectorInformations();
    };
    TaxCollectorMovementAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorMovementAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorMovementAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorMovementAddMessage(param1);
    };
    TaxCollectorMovementAddMessage.prototype.serializeAs_TaxCollectorMovementAddMessage = function (param1) {
        param1.writeShort(this.informations.getTypeId());
        this.informations.serialize(param1);
    };
    TaxCollectorMovementAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorMovementAddMessage(param1);
    };
    TaxCollectorMovementAddMessage.prototype.deserializeAs_TaxCollectorMovementAddMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(TaxCollectorInformations, _loc2_);
        this.informations.deserialize(param1);
    };
    TaxCollectorMovementAddMessage.ID = 5917;
    return TaxCollectorMovementAddMessage;
})(network_message_1.NetworkMessage);
module.exports = TaxCollectorMovementAddMessage;
