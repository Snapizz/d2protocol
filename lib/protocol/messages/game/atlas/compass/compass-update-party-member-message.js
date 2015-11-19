/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CompassUpdateMessage = require('./compass-update-message');
var CompassUpdatePartyMemberMessage = (function (_super) {
    __extends(CompassUpdatePartyMemberMessage, _super);
    function CompassUpdatePartyMemberMessage() {
        this.memberId = 0;
        _super.call(this);
    }
    CompassUpdatePartyMemberMessage.prototype.getMessageId = function () {
        return CompassUpdatePartyMemberMessage.ID;
    };
    CompassUpdatePartyMemberMessage.prototype.reset = function () {
        this.memberId = 0;
    };
    CompassUpdatePartyMemberMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CompassUpdatePartyMemberMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CompassUpdatePartyMemberMessage.prototype.serialize = function (param1) {
        this.serializeAs_CompassUpdatePartyMemberMessage(param1);
    };
    CompassUpdatePartyMemberMessage.prototype.serializeAs_CompassUpdatePartyMemberMessage = function (param1) {
        _super.prototype.serializeAs_CompassUpdateMessage.call(this, param1);
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
    };
    CompassUpdatePartyMemberMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CompassUpdatePartyMemberMessage(param1);
    };
    CompassUpdatePartyMemberMessage.prototype.deserializeAs_CompassUpdatePartyMemberMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of CompassUpdatePartyMemberMessage.memberId.');
        }
    };
    CompassUpdatePartyMemberMessage.ID = 5589;
    return CompassUpdatePartyMemberMessage;
})(CompassUpdateMessage);
module.exports = CompassUpdatePartyMemberMessage;
