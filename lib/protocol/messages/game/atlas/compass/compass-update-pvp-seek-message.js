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
var CompassUpdatePvpSeekMessage = (function (_super) {
    __extends(CompassUpdatePvpSeekMessage, _super);
    function CompassUpdatePvpSeekMessage() {
        this.memberId = 0;
        this.memberName = '';
        _super.call(this);
    }
    CompassUpdatePvpSeekMessage.prototype.getMessageId = function () {
        return CompassUpdatePvpSeekMessage.ID;
    };
    CompassUpdatePvpSeekMessage.prototype.reset = function () {
        this.memberId = 0;
        this.memberName = '';
    };
    CompassUpdatePvpSeekMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CompassUpdatePvpSeekMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CompassUpdatePvpSeekMessage.prototype.serialize = function (param1) {
        this.serializeAs_CompassUpdatePvpSeekMessage(param1);
    };
    CompassUpdatePvpSeekMessage.prototype.serializeAs_CompassUpdatePvpSeekMessage = function (param1) {
        _super.prototype.serializeAs_CompassUpdateMessage.call(this, param1);
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
        param1.writeUTF(this.memberName);
    };
    CompassUpdatePvpSeekMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CompassUpdatePvpSeekMessage(param1);
    };
    CompassUpdatePvpSeekMessage.prototype.deserializeAs_CompassUpdatePvpSeekMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of CompassUpdatePvpSeekMessage.memberId.');
        }
        this.memberName = param1.readUTF();
    };
    CompassUpdatePvpSeekMessage.ID = 6013;
    return CompassUpdatePvpSeekMessage;
})(CompassUpdateMessage);
module.exports = CompassUpdatePvpSeekMessage;
