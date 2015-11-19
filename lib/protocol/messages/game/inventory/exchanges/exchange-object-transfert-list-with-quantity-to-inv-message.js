/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectTransfertListWithQuantityToInvMessage = (function (_super) {
    __extends(ExchangeObjectTransfertListWithQuantityToInvMessage, _super);
    function ExchangeObjectTransfertListWithQuantityToInvMessage() {
        this.ids = [];
        this.qtys = [];
        _super.call(this);
    }
    ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.getMessageId = function () {
        return ExchangeObjectTransfertListWithQuantityToInvMessage.ID;
    };
    ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.reset = function () {
        this.ids = [];
        this.qtys = [];
    };
    ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(param1);
    };
    ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage = function (param1) {
        param1.writeShort(this.ids.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ids.length) {
            if (this.ids[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.ids[_loc2_] + ') on element 1 (starting at 1) of ids.');
            }
            param1.writeVarInt(this.ids[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.qtys.length);
        var _loc3_ = 0;
        while (_loc3_ < this.qtys.length) {
            if (this.qtys[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.qtys[_loc3_] + ') on element 2 (starting at 1) of qtys.');
            }
            param1.writeVarInt(this.qtys[_loc3_]);
            _loc3_++;
        }
    };
    ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(param1);
    };
    ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhInt();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of ids.');
            }
            this.ids.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of qtys.');
            }
            this.qtys.push(_loc7_);
            _loc5_++;
        }
    };
    ExchangeObjectTransfertListWithQuantityToInvMessage.ID = 6470;
    return ExchangeObjectTransfertListWithQuantityToInvMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectTransfertListWithQuantityToInvMessage;
