/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CinematicMessage = (function (_super) {
    __extends(CinematicMessage, _super);
    function CinematicMessage() {
        this.cinematicId = 0;
        _super.call(this);
    }
    CinematicMessage.prototype.getMessageId = function () {
        return CinematicMessage.ID;
    };
    CinematicMessage.prototype.reset = function () {
        this.cinematicId = 0;
    };
    CinematicMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CinematicMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CinematicMessage.prototype.serialize = function (param1) {
        this.serializeAs_CinematicMessage(param1);
    };
    CinematicMessage.prototype.serializeAs_CinematicMessage = function (param1) {
        if (this.cinematicId < 0) {
            throw new Error('Forbidden value (' + this.cinematicId + ') on element cinematicId.');
        }
        param1.writeVarShort(this.cinematicId);
    };
    CinematicMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CinematicMessage(param1);
    };
    CinematicMessage.prototype.deserializeAs_CinematicMessage = function (param1) {
        this.cinematicId = param1.readVarUhShort();
        if (this.cinematicId < 0) {
            throw new Error('Forbidden value (' + this.cinematicId + ') on element of CinematicMessage.cinematicId.');
        }
    };
    CinematicMessage.ID = 6053;
    return CinematicMessage;
})(network_message_1.NetworkMessage);
module.exports = CinematicMessage;
