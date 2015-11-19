/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseInformations = require('../../../../../types/game/house/house-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var HousePropertiesMessage = (function (_super) {
    __extends(HousePropertiesMessage, _super);
    function HousePropertiesMessage() {
        this.properties = new HouseInformations();
        _super.call(this);
    }
    HousePropertiesMessage.prototype.getMessageId = function () {
        return HousePropertiesMessage.ID;
    };
    HousePropertiesMessage.prototype.reset = function () {
        this.properties = new HouseInformations();
    };
    HousePropertiesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HousePropertiesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HousePropertiesMessage.prototype.serialize = function (param1) {
        this.serializeAs_HousePropertiesMessage(param1);
    };
    HousePropertiesMessage.prototype.serializeAs_HousePropertiesMessage = function (param1) {
        param1.writeShort(this.properties.getTypeId());
        this.properties.serialize(param1);
    };
    HousePropertiesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HousePropertiesMessage(param1);
    };
    HousePropertiesMessage.prototype.deserializeAs_HousePropertiesMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.properties = ProtocolTypeManager.getInstance(HouseInformations, _loc2_);
        this.properties.deserialize(param1);
    };
    HousePropertiesMessage.ID = 5734;
    return HousePropertiesMessage;
})(network_message_1.NetworkMessage);
module.exports = HousePropertiesMessage;
