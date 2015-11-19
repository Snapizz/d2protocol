/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionMessage = require('./../abstract-game-action-message');
var AbstractGameActionFightTargetedAbilityMessage = (function (_super) {
    __extends(AbstractGameActionFightTargetedAbilityMessage, _super);
    function AbstractGameActionFightTargetedAbilityMessage() {
        this.targetId = 0;
        this.destinationCellId = 0;
        this.critical = 1;
        this.silentCast = false;
        _super.call(this);
    }
    AbstractGameActionFightTargetedAbilityMessage.prototype.getMessageId = function () {
        return AbstractGameActionFightTargetedAbilityMessage.ID;
    };
    AbstractGameActionFightTargetedAbilityMessage.prototype.reset = function () {
        this.targetId = 0;
        this.destinationCellId = 0;
        this.critical = 1;
        this.silentCast = false;
    };
    AbstractGameActionFightTargetedAbilityMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AbstractGameActionFightTargetedAbilityMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AbstractGameActionFightTargetedAbilityMessage.prototype.serialize = function (param1) {
        this.serializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
    };
    AbstractGameActionFightTargetedAbilityMessage.prototype.serializeAs_AbstractGameActionFightTargetedAbilityMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.destinationCellId < -1 || this.destinationCellId > 559) {
            throw new Error('Forbidden value (' + this.destinationCellId + ') on element destinationCellId.');
        }
        param1.writeShort(this.destinationCellId);
        param1.writeByte(this.critical);
        param1.writeBoolean(this.silentCast);
    };
    AbstractGameActionFightTargetedAbilityMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractGameActionFightTargetedAbilityMessage(param1);
    };
    AbstractGameActionFightTargetedAbilityMessage.prototype.deserializeAs_AbstractGameActionFightTargetedAbilityMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.destinationCellId = param1.readShort();
        if (this.destinationCellId < -1 || this.destinationCellId > 559) {
            throw new Error('Forbidden value (' + this.destinationCellId + ') on element of AbstractGameActionFightTargetedAbilityMessage.destinationCellId.');
        }
        this.critical = param1.readByte();
        if (this.critical < 0) {
            throw new Error('Forbidden value (' + this.critical + ') on element of AbstractGameActionFightTargetedAbilityMessage.critical.');
        }
        this.silentCast = param1.readBoolean();
    };
    AbstractGameActionFightTargetedAbilityMessage.ID = 6118;
    return AbstractGameActionFightTargetedAbilityMessage;
})(AbstractGameActionMessage);
module.exports = AbstractGameActionFightTargetedAbilityMessage;
