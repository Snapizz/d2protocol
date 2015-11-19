/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpellForgetUIMessage = (function (_super) {
    __extends(SpellForgetUIMessage, _super);
    function SpellForgetUIMessage() {
        this.open = false;
        _super.call(this);
    }
    SpellForgetUIMessage.prototype.getMessageId = function () {
        return SpellForgetUIMessage.ID;
    };
    SpellForgetUIMessage.prototype.reset = function () {
        this.open = false;
    };
    SpellForgetUIMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpellForgetUIMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpellForgetUIMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpellForgetUIMessage(param1);
    };
    SpellForgetUIMessage.prototype.serializeAs_SpellForgetUIMessage = function (param1) {
        param1.writeBoolean(this.open);
    };
    SpellForgetUIMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpellForgetUIMessage(param1);
    };
    SpellForgetUIMessage.prototype.deserializeAs_SpellForgetUIMessage = function (param1) {
        this.open = param1.readBoolean();
    };
    SpellForgetUIMessage.ID = 5565;
    return SpellForgetUIMessage;
})(network_message_1.NetworkMessage);
module.exports = SpellForgetUIMessage;
