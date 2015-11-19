/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TaxCollectorDialogQuestionExtendedMessage = require('./tax-collector-dialog-question-extended-message');
var BasicNamedAllianceInformations = require('../../../../../types/game/context/roleplay/basic-named-alliance-informations');
var AllianceTaxCollectorDialogQuestionExtendedMessage = (function (_super) {
    __extends(AllianceTaxCollectorDialogQuestionExtendedMessage, _super);
    function AllianceTaxCollectorDialogQuestionExtendedMessage() {
        this.alliance = new BasicNamedAllianceInformations();
        _super.call(this);
    }
    AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.getMessageId = function () {
        return AllianceTaxCollectorDialogQuestionExtendedMessage.ID;
    };
    AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.reset = function () {
        this.alliance = new BasicNamedAllianceInformations();
    };
    AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1);
    };
    AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage = function (param1) {
        _super.prototype.serializeAs_TaxCollectorDialogQuestionExtendedMessage.call(this, param1);
        this.alliance.serializeAs_BasicNamedAllianceInformations(param1);
    };
    AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1);
    };
    AllianceTaxCollectorDialogQuestionExtendedMessage.prototype.deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.alliance = new BasicNamedAllianceInformations();
        this.alliance.deserialize(param1);
    };
    AllianceTaxCollectorDialogQuestionExtendedMessage.ID = 6445;
    return AllianceTaxCollectorDialogQuestionExtendedMessage;
})(TaxCollectorDialogQuestionExtendedMessage);
module.exports = AllianceTaxCollectorDialogQuestionExtendedMessage;
