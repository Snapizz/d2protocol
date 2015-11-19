/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FightCommonInformations = require('../../../../../types/game/context/fight/fight-common-informations');
var GameRolePlayShowChallengeMessage = (function (_super) {
    __extends(GameRolePlayShowChallengeMessage, _super);
    function GameRolePlayShowChallengeMessage() {
        this.commonsInfos = new FightCommonInformations();
        _super.call(this);
    }
    GameRolePlayShowChallengeMessage.prototype.getMessageId = function () {
        return GameRolePlayShowChallengeMessage.ID;
    };
    GameRolePlayShowChallengeMessage.prototype.reset = function () {
        this.commonsInfos = new FightCommonInformations();
    };
    GameRolePlayShowChallengeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayShowChallengeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayShowChallengeMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayShowChallengeMessage(param1);
    };
    GameRolePlayShowChallengeMessage.prototype.serializeAs_GameRolePlayShowChallengeMessage = function (param1) {
        this.commonsInfos.serializeAs_FightCommonInformations(param1);
    };
    GameRolePlayShowChallengeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayShowChallengeMessage(param1);
    };
    GameRolePlayShowChallengeMessage.prototype.deserializeAs_GameRolePlayShowChallengeMessage = function (param1) {
        this.commonsInfos = new FightCommonInformations();
        this.commonsInfos.deserialize(param1);
    };
    GameRolePlayShowChallengeMessage.ID = 301;
    return GameRolePlayShowChallengeMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayShowChallengeMessage;
