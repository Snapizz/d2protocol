/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EntityTalkMessage = (function (_super) {
    __extends(EntityTalkMessage, _super);
    function EntityTalkMessage() {
        this.entityId = 0;
        this.textId = 0;
        this.parameters = [];
        _super.call(this);
    }
    EntityTalkMessage.prototype.getMessageId = function () {
        return EntityTalkMessage.ID;
    };
    EntityTalkMessage.prototype.reset = function () {
        this.entityId = 0;
        this.textId = 0;
        this.parameters = [];
    };
    EntityTalkMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    EntityTalkMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    EntityTalkMessage.prototype.serialize = function (param1) {
        this.serializeAs_EntityTalkMessage(param1);
    };
    EntityTalkMessage.prototype.serializeAs_EntityTalkMessage = function (param1) {
        param1.writeInt(this.entityId);
        if (this.textId < 0) {
            throw new Error('Forbidden value (' + this.textId + ') on element textId.');
        }
        param1.writeVarShort(this.textId);
        param1.writeShort(this.parameters.length);
        var _loc2_ = 0;
        while (_loc2_ < this.parameters.length) {
            param1.writeUTF(this.parameters[_loc2_]);
            _loc2_++;
        }
    };
    EntityTalkMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_EntityTalkMessage(param1);
    };
    EntityTalkMessage.prototype.deserializeAs_EntityTalkMessage = function (param1) {
        var _loc4_ = null;
        this.entityId = param1.readInt();
        this.textId = param1.readVarUhShort();
        if (this.textId < 0) {
            throw new Error('Forbidden value (' + this.textId + ') on element of EntityTalkMessage.textId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }
    };
    EntityTalkMessage.ID = 6110;
    return EntityTalkMessage;
})(network_message_1.NetworkMessage);
module.exports = EntityTalkMessage;
