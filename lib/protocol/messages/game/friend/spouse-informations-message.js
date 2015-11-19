/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendSpouseInformations = require('../../../types/game/friend/friend-spouse-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var SpouseInformationsMessage = (function (_super) {
    __extends(SpouseInformationsMessage, _super);
    function SpouseInformationsMessage() {
        this.spouse = new FriendSpouseInformations();
        _super.call(this);
    }
    SpouseInformationsMessage.prototype.getMessageId = function () {
        return SpouseInformationsMessage.ID;
    };
    SpouseInformationsMessage.prototype.reset = function () {
        this.spouse = new FriendSpouseInformations();
    };
    SpouseInformationsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpouseInformationsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpouseInformationsMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpouseInformationsMessage(param1);
    };
    SpouseInformationsMessage.prototype.serializeAs_SpouseInformationsMessage = function (param1) {
        param1.writeShort(this.spouse.getTypeId());
        this.spouse.serialize(param1);
    };
    SpouseInformationsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpouseInformationsMessage(param1);
    };
    SpouseInformationsMessage.prototype.deserializeAs_SpouseInformationsMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.spouse = ProtocolTypeManager.getInstance(FriendSpouseInformations, _loc2_);
        this.spouse.deserialize(param1);
    };
    SpouseInformationsMessage.ID = 6356;
    return SpouseInformationsMessage;
})(network_message_1.NetworkMessage);
module.exports = SpouseInformationsMessage;
