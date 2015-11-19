/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PortalUseRequestMessage = (function (_super) {
    __extends(PortalUseRequestMessage, _super);
    function PortalUseRequestMessage() {
        this.portalId = 0;
        _super.call(this);
    }
    PortalUseRequestMessage.prototype.getMessageId = function () {
        return PortalUseRequestMessage.ID;
    };
    PortalUseRequestMessage.prototype.reset = function () {
        this.portalId = 0;
    };
    PortalUseRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PortalUseRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PortalUseRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PortalUseRequestMessage(param1);
    };
    PortalUseRequestMessage.prototype.serializeAs_PortalUseRequestMessage = function (param1) {
        if (this.portalId < 0) {
            throw new Error('Forbidden value (' + this.portalId + ') on element portalId.');
        }
        param1.writeVarInt(this.portalId);
    };
    PortalUseRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PortalUseRequestMessage(param1);
    };
    PortalUseRequestMessage.prototype.deserializeAs_PortalUseRequestMessage = function (param1) {
        this.portalId = param1.readVarUhInt();
        if (this.portalId < 0) {
            throw new Error('Forbidden value (' + this.portalId + ') on element of PortalUseRequestMessage.portalId.');
        }
    };
    PortalUseRequestMessage.ID = 6492;
    return PortalUseRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PortalUseRequestMessage;
