/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFactsMessage = require('./guild-facts-message');
var BasicNamedAllianceInformations = require('../../../types/game/context/roleplay/basic-named-alliance-informations');
var GuildInAllianceFactsMessage = (function (_super) {
    __extends(GuildInAllianceFactsMessage, _super);
    function GuildInAllianceFactsMessage() {
        this.allianceInfos = new BasicNamedAllianceInformations();
        _super.call(this);
    }
    GuildInAllianceFactsMessage.prototype.getMessageId = function () {
        return GuildInAllianceFactsMessage.ID;
    };
    GuildInAllianceFactsMessage.prototype.reset = function () {
        this.allianceInfos = new BasicNamedAllianceInformations();
    };
    GuildInAllianceFactsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInAllianceFactsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInAllianceFactsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInAllianceFactsMessage(param1);
    };
    GuildInAllianceFactsMessage.prototype.serializeAs_GuildInAllianceFactsMessage = function (param1) {
        _super.prototype.serializeAs_GuildFactsMessage.call(this, param1);
        this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);
    };
    GuildInAllianceFactsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInAllianceFactsMessage(param1);
    };
    GuildInAllianceFactsMessage.prototype.deserializeAs_GuildInAllianceFactsMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceInfos = new BasicNamedAllianceInformations();
        this.allianceInfos.deserialize(param1);
    };
    GuildInAllianceFactsMessage.ID = 6422;
    return GuildInAllianceFactsMessage;
})(GuildFactsMessage);
module.exports = GuildInAllianceFactsMessage;
