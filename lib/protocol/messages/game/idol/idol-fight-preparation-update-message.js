/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var Idol = require('../../../types/game/idol/idol');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var IdolFightPreparationUpdateMessage = (function (_super) {
    __extends(IdolFightPreparationUpdateMessage, _super);
    function IdolFightPreparationUpdateMessage() {
        this.idolSource = 0;
        this.idols = [];
        _super.call(this);
    }
    IdolFightPreparationUpdateMessage.prototype.getMessageId = function () {
        return IdolFightPreparationUpdateMessage.ID;
    };
    IdolFightPreparationUpdateMessage.prototype.reset = function () {
        this.idolSource = 0;
        this.idols = [];
    };
    IdolFightPreparationUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolFightPreparationUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolFightPreparationUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolFightPreparationUpdateMessage(param1);
    };
    IdolFightPreparationUpdateMessage.prototype.serializeAs_IdolFightPreparationUpdateMessage = function (param1) {
        param1.writeByte(this.idolSource);
        param1.writeShort(this.idols.length);
        var _loc2_ = 0;
        while (_loc2_ < this.idols.length) {
            param1.writeShort((this.idols[_loc2_]).getTypeId());
            (this.idols[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    IdolFightPreparationUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolFightPreparationUpdateMessage(param1);
    };
    IdolFightPreparationUpdateMessage.prototype.deserializeAs_IdolFightPreparationUpdateMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        this.idolSource = param1.readByte();
        if (this.idolSource < 0) {
            throw new Error('Forbidden value (' + this.idolSource + ') on element of IdolFightPreparationUpdateMessage.idolSource.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(Idol, _loc4_);
            _loc5_.deserialize(param1);
            this.idols.push(_loc5_);
            _loc3_++;
        }
    };
    IdolFightPreparationUpdateMessage.ID = 6586;
    return IdolFightPreparationUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolFightPreparationUpdateMessage;
