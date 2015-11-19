/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyIdol = require('../../../types/game/idol/party-idol');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var IdolListMessage = (function (_super) {
    __extends(IdolListMessage, _super);
    function IdolListMessage() {
        this.chosenIdols = [];
        this.partyChosenIdols = [];
        this.partyIdols = [];
        _super.call(this);
    }
    IdolListMessage.prototype.getMessageId = function () {
        return IdolListMessage.ID;
    };
    IdolListMessage.prototype.reset = function () {
        this.chosenIdols = [];
        this.partyChosenIdols = [];
        this.partyIdols = [];
    };
    IdolListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolListMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolListMessage(param1);
    };
    IdolListMessage.prototype.serializeAs_IdolListMessage = function (param1) {
        param1.writeShort(this.chosenIdols.length);
        var _loc2_ = 0;
        while (_loc2_ < this.chosenIdols.length) {
            if (this.chosenIdols[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.chosenIdols[_loc2_] + ') on element 1 (starting at 1) of chosenIdols.');
            }
            param1.writeVarShort(this.chosenIdols[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.partyChosenIdols.length);
        var _loc3_ = 0;
        while (_loc3_ < this.partyChosenIdols.length) {
            if (this.partyChosenIdols[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.partyChosenIdols[_loc3_] + ') on element 2 (starting at 1) of partyChosenIdols.');
            }
            param1.writeVarShort(this.partyChosenIdols[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.partyIdols.length);
        var _loc4_ = 0;
        while (_loc4_ < this.partyIdols.length) {
            param1.writeShort((this.partyIdols[_loc4_]).getTypeId());
            (this.partyIdols[_loc4_]).serialize(param1);
            _loc4_++;
        }
    };
    IdolListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolListMessage(param1);
    };
    IdolListMessage.prototype.deserializeAs_IdolListMessage = function (param1) {
        var _loc8_ = 0;
        var _loc9_ = 0;
        var _loc10_ = 0;
        var _loc11_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc8_ = param1.readVarUhShort();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of chosenIdols.');
            }
            this.chosenIdols.push(_loc8_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc9_ = param1.readVarUhShort();
            if (_loc9_ < 0) {
                throw new Error('Forbidden value (' + _loc9_ + ') on elements of partyChosenIdols.');
            }
            this.partyChosenIdols.push(_loc9_);
            _loc5_++;
        }
        var _loc6_ = param1.readUnsignedShort();
        var _loc7_ = 0;
        while (_loc7_ < _loc6_) {
            _loc10_ = param1.readUnsignedShort();
            _loc11_ = ProtocolTypeManager.getInstance(PartyIdol, _loc10_);
            _loc11_.deserialize(param1);
            this.partyIdols.push(_loc11_);
            _loc7_++;
        }
    };
    IdolListMessage.ID = 6585;
    return IdolListMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolListMessage;
