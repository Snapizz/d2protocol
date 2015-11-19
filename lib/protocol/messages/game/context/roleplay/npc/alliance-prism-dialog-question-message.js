/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AlliancePrismDialogQuestionMessage = (function (_super) {
    __extends(AlliancePrismDialogQuestionMessage, _super);
    function AlliancePrismDialogQuestionMessage() {
        _super.call(this);
    }
    AlliancePrismDialogQuestionMessage.prototype.getMessageId = function () {
        return AlliancePrismDialogQuestionMessage.ID;
    };
    AlliancePrismDialogQuestionMessage.prototype.reset = function () {
    };
    AlliancePrismDialogQuestionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AlliancePrismDialogQuestionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AlliancePrismDialogQuestionMessage.prototype.serialize = function (param1) {
        this.serializeAs_AlliancePrismDialogQuestionMessage(param1);
    };
    AlliancePrismDialogQuestionMessage.prototype.serializeAs_AlliancePrismDialogQuestionMessage = function (param1) {
    };
    AlliancePrismDialogQuestionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AlliancePrismDialogQuestionMessage(param1);
    };
    AlliancePrismDialogQuestionMessage.prototype.deserializeAs_AlliancePrismDialogQuestionMessage = function (param1) {
    };
    AlliancePrismDialogQuestionMessage.ID = 6448;
    return AlliancePrismDialogQuestionMessage;
})(network_message_1.NetworkMessage);
module.exports = AlliancePrismDialogQuestionMessage;
