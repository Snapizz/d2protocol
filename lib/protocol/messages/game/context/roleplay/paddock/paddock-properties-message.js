/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockInformations = require('../../../../../types/game/paddock/paddock-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var PaddockPropertiesMessage = (function (_super) {
    __extends(PaddockPropertiesMessage, _super);
    function PaddockPropertiesMessage() {
        this.properties = new PaddockInformations();
        _super.call(this);
    }
    PaddockPropertiesMessage.prototype.getMessageId = function () {
        return PaddockPropertiesMessage.ID;
    };
    PaddockPropertiesMessage.prototype.reset = function () {
        this.properties = new PaddockInformations();
    };
    PaddockPropertiesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockPropertiesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockPropertiesMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockPropertiesMessage(param1);
    };
    PaddockPropertiesMessage.prototype.serializeAs_PaddockPropertiesMessage = function (param1) {
        param1.writeShort(this.properties.getTypeId());
        this.properties.serialize(param1);
    };
    PaddockPropertiesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockPropertiesMessage(param1);
    };
    PaddockPropertiesMessage.prototype.deserializeAs_PaddockPropertiesMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.properties = ProtocolTypeManager.getInstance(PaddockInformations, _loc2_);
        this.properties.deserialize(param1);
    };
    PaddockPropertiesMessage.ID = 5824;
    return PaddockPropertiesMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockPropertiesMessage;
