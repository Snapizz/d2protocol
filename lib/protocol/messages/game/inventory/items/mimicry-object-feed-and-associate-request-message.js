/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SymbioticObjectAssociateRequestMessage = require('./symbiotic-object-associate-request-message');
var MimicryObjectFeedAndAssociateRequestMessage = (function (_super) {
    __extends(MimicryObjectFeedAndAssociateRequestMessage, _super);
    function MimicryObjectFeedAndAssociateRequestMessage() {
        this.foodUID = 0;
        this.foodPos = 0;
        this.preview = false;
        _super.call(this);
    }
    MimicryObjectFeedAndAssociateRequestMessage.prototype.getMessageId = function () {
        return MimicryObjectFeedAndAssociateRequestMessage.ID;
    };
    MimicryObjectFeedAndAssociateRequestMessage.prototype.reset = function () {
        this.foodUID = 0;
        this.foodPos = 0;
        this.preview = false;
    };
    MimicryObjectFeedAndAssociateRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MimicryObjectFeedAndAssociateRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MimicryObjectFeedAndAssociateRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1);
    };
    MimicryObjectFeedAndAssociateRequestMessage.prototype.serializeAs_MimicryObjectFeedAndAssociateRequestMessage = function (param1) {
        _super.prototype.serializeAs_SymbioticObjectAssociateRequestMessage.call(this, param1);
        if (this.foodUID < 0) {
            throw new Error('Forbidden value (' + this.foodUID + ') on element foodUID.');
        }
        param1.writeVarInt(this.foodUID);
        if (this.foodPos < 0 || this.foodPos > 255) {
            throw new Error('Forbidden value (' + this.foodPos + ') on element foodPos.');
        }
        param1.writeByte(this.foodPos);
        param1.writeBoolean(this.preview);
    };
    MimicryObjectFeedAndAssociateRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1);
    };
    MimicryObjectFeedAndAssociateRequestMessage.prototype.deserializeAs_MimicryObjectFeedAndAssociateRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.foodUID = param1.readVarUhInt();
        if (this.foodUID < 0) {
            throw new Error('Forbidden value (' + this.foodUID + ') on element of MimicryObjectFeedAndAssociateRequestMessage.foodUID.');
        }
        this.foodPos = param1.readUnsignedByte();
        if (this.foodPos < 0 || this.foodPos > 255) {
            throw new Error('Forbidden value (' + this.foodPos + ') on element of MimicryObjectFeedAndAssociateRequestMessage.foodPos.');
        }
        this.preview = param1.readBoolean();
    };
    MimicryObjectFeedAndAssociateRequestMessage.ID = 6460;
    return MimicryObjectFeedAndAssociateRequestMessage;
})(SymbioticObjectAssociateRequestMessage);
module.exports = MimicryObjectFeedAndAssociateRequestMessage;
