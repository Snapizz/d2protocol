/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectGroundAddedMessage = (function (_super) {
    __extends(ObjectGroundAddedMessage, _super);
    function ObjectGroundAddedMessage() {
        this.cellId = 0;
        this.objectGID = 0;
        _super.call(this);
    }
    ObjectGroundAddedMessage.prototype.getMessageId = function () {
        return ObjectGroundAddedMessage.ID;
    };
    ObjectGroundAddedMessage.prototype.reset = function () {
        this.cellId = 0;
        this.objectGID = 0;
    };
    ObjectGroundAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectGroundAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectGroundAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectGroundAddedMessage(param1);
    };
    ObjectGroundAddedMessage.prototype.serializeAs_ObjectGroundAddedMessage = function (param1) {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
    };
    ObjectGroundAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectGroundAddedMessage(param1);
    };
    ObjectGroundAddedMessage.prototype.deserializeAs_ObjectGroundAddedMessage = function (param1) {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of ObjectGroundAddedMessage.cellId.');
        }
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectGroundAddedMessage.objectGID.');
        }
    };
    ObjectGroundAddedMessage.ID = 3017;
    return ObjectGroundAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectGroundAddedMessage;
