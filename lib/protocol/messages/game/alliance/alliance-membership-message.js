/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceJoinedMessage = require('./alliance-joined-message');
var AllianceMembershipMessage = (function (_super) {
    __extends(AllianceMembershipMessage, _super);
    function AllianceMembershipMessage() {
        _super.call(this);
    }
    AllianceMembershipMessage.prototype.getMessageId = function () {
        return AllianceMembershipMessage.ID;
    };
    AllianceMembershipMessage.prototype.reset = function () {
    };
    AllianceMembershipMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceMembershipMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceMembershipMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceMembershipMessage(param1);
    };
    AllianceMembershipMessage.prototype.serializeAs_AllianceMembershipMessage = function (param1) {
        _super.prototype.serializeAs_AllianceJoinedMessage.call(this, param1);
    };
    AllianceMembershipMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceMembershipMessage(param1);
    };
    AllianceMembershipMessage.prototype.deserializeAs_AllianceMembershipMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    AllianceMembershipMessage.ID = 6390;
    return AllianceMembershipMessage;
})(AllianceJoinedMessage);
module.exports = AllianceMembershipMessage;
