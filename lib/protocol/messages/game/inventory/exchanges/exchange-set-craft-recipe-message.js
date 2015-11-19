/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeSetCraftRecipeMessage = (function (_super) {
    __extends(ExchangeSetCraftRecipeMessage, _super);
    function ExchangeSetCraftRecipeMessage() {
        this.objectGID = 0;
        _super.call(this);
    }
    ExchangeSetCraftRecipeMessage.prototype.getMessageId = function () {
        return ExchangeSetCraftRecipeMessage.ID;
    };
    ExchangeSetCraftRecipeMessage.prototype.reset = function () {
        this.objectGID = 0;
    };
    ExchangeSetCraftRecipeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeSetCraftRecipeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeSetCraftRecipeMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeSetCraftRecipeMessage(param1);
    };
    ExchangeSetCraftRecipeMessage.prototype.serializeAs_ExchangeSetCraftRecipeMessage = function (param1) {
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
    };
    ExchangeSetCraftRecipeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeSetCraftRecipeMessage(param1);
    };
    ExchangeSetCraftRecipeMessage.prototype.deserializeAs_ExchangeSetCraftRecipeMessage = function (param1) {
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ExchangeSetCraftRecipeMessage.objectGID.');
        }
    };
    ExchangeSetCraftRecipeMessage.ID = 6389;
    return ExchangeSetCraftRecipeMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeSetCraftRecipeMessage;
