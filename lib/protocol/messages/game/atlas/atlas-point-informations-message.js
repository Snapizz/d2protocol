/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AtlasPointsInformations = require('../../../types/game/context/roleplay/atlas-points-informations');
var AtlasPointInformationsMessage = (function (_super) {
    __extends(AtlasPointInformationsMessage, _super);
    function AtlasPointInformationsMessage() {
        this.type = new AtlasPointsInformations();
        _super.call(this);
    }
    AtlasPointInformationsMessage.prototype.getMessageId = function () {
        return AtlasPointInformationsMessage.ID;
    };
    AtlasPointInformationsMessage.prototype.reset = function () {
        this.type = new AtlasPointsInformations();
    };
    AtlasPointInformationsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AtlasPointInformationsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AtlasPointInformationsMessage.prototype.serialize = function (param1) {
        this.serializeAs_AtlasPointInformationsMessage(param1);
    };
    AtlasPointInformationsMessage.prototype.serializeAs_AtlasPointInformationsMessage = function (param1) {
        this.type.serializeAs_AtlasPointsInformations(param1);
    };
    AtlasPointInformationsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AtlasPointInformationsMessage(param1);
    };
    AtlasPointInformationsMessage.prototype.deserializeAs_AtlasPointInformationsMessage = function (param1) {
        this.type = new AtlasPointsInformations();
        this.type.deserialize(param1);
    };
    AtlasPointInformationsMessage.ID = 5956;
    return AtlasPointInformationsMessage;
})(network_message_1.NetworkMessage);
module.exports = AtlasPointInformationsMessage;
