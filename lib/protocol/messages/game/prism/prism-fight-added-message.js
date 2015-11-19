/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismFightersInformation = require('../../../types/game/prism/prism-fighters-information');
var PrismFightAddedMessage = (function (_super) {
    __extends(PrismFightAddedMessage, _super);
    function PrismFightAddedMessage() {
        this.fight = new PrismFightersInformation();
        _super.call(this);
    }
    PrismFightAddedMessage.prototype.getMessageId = function () {
        return PrismFightAddedMessage.ID;
    };
    PrismFightAddedMessage.prototype.reset = function () {
        this.fight = new PrismFightersInformation();
    };
    PrismFightAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightAddedMessage(param1);
    };
    PrismFightAddedMessage.prototype.serializeAs_PrismFightAddedMessage = function (param1) {
        this.fight.serializeAs_PrismFightersInformation(param1);
    };
    PrismFightAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightAddedMessage(param1);
    };
    PrismFightAddedMessage.prototype.deserializeAs_PrismFightAddedMessage = function (param1) {
        this.fight = new PrismFightersInformation();
        this.fight.deserialize(param1);
    };
    PrismFightAddedMessage.ID = 6452;
    return PrismFightAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightAddedMessage;
