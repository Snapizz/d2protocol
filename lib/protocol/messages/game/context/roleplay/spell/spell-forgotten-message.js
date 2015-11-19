/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpellForgottenMessage = (function (_super) {
    __extends(SpellForgottenMessage, _super);
    function SpellForgottenMessage() {
        this.spellsId = [];
        this.boostPoint = 0;
        _super.call(this);
    }
    SpellForgottenMessage.prototype.getMessageId = function () {
        return SpellForgottenMessage.ID;
    };
    SpellForgottenMessage.prototype.reset = function () {
        this.spellsId = [];
        this.boostPoint = 0;
    };
    SpellForgottenMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpellForgottenMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpellForgottenMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpellForgottenMessage(param1);
    };
    SpellForgottenMessage.prototype.serializeAs_SpellForgottenMessage = function (param1) {
        param1.writeShort(this.spellsId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.spellsId.length) {
            if (this.spellsId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.spellsId[_loc2_] + ') on element 1 (starting at 1) of spellsId.');
            }
            param1.writeVarShort(this.spellsId[_loc2_]);
            _loc2_++;
        }
        if (this.boostPoint < 0) {
            throw new Error('Forbidden value (' + this.boostPoint + ') on element boostPoint.');
        }
        param1.writeVarShort(this.boostPoint);
    };
    SpellForgottenMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpellForgottenMessage(param1);
    };
    SpellForgottenMessage.prototype.deserializeAs_SpellForgottenMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of spellsId.');
            }
            this.spellsId.push(_loc4_);
            _loc3_++;
        }
        this.boostPoint = param1.readVarUhShort();
        if (this.boostPoint < 0) {
            throw new Error('Forbidden value (' + this.boostPoint + ') on element of SpellForgottenMessage.boostPoint.');
        }
    };
    SpellForgottenMessage.ID = 5834;
    return SpellForgottenMessage;
})(network_message_1.NetworkMessage);
module.exports = SpellForgottenMessage;
