/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildChangeMemberParametersMessage = (function (_super) {
    __extends(GuildChangeMemberParametersMessage, _super);
    function GuildChangeMemberParametersMessage() {
        this.memberId = 0;
        this.rank = 0;
        this.experienceGivenPercent = 0;
        this.rights = 0;
        _super.call(this);
    }
    GuildChangeMemberParametersMessage.prototype.getMessageId = function () {
        return GuildChangeMemberParametersMessage.ID;
    };
    GuildChangeMemberParametersMessage.prototype.reset = function () {
        this.memberId = 0;
        this.rank = 0;
        this.experienceGivenPercent = 0;
        this.rights = 0;
    };
    GuildChangeMemberParametersMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildChangeMemberParametersMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildChangeMemberParametersMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildChangeMemberParametersMessage(param1);
    };
    GuildChangeMemberParametersMessage.prototype.serializeAs_GuildChangeMemberParametersMessage = function (param1) {
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
        if (this.rank < 0) {
            throw new Error('Forbidden value (' + this.rank + ') on element rank.');
        }
        param1.writeVarShort(this.rank);
        if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
            throw new Error('Forbidden value (' + this.experienceGivenPercent + ') on element experienceGivenPercent.');
        }
        param1.writeByte(this.experienceGivenPercent);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeVarInt(this.rights);
    };
    GuildChangeMemberParametersMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildChangeMemberParametersMessage(param1);
    };
    GuildChangeMemberParametersMessage.prototype.deserializeAs_GuildChangeMemberParametersMessage = function (param1) {
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of GuildChangeMemberParametersMessage.memberId.');
        }
        this.rank = param1.readVarUhShort();
        if (this.rank < 0) {
            throw new Error('Forbidden value (' + this.rank + ') on element of GuildChangeMemberParametersMessage.rank.');
        }
        this.experienceGivenPercent = param1.readByte();
        if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
            throw new Error('Forbidden value (' + this.experienceGivenPercent + ') on element of GuildChangeMemberParametersMessage.experienceGivenPercent.');
        }
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of GuildChangeMemberParametersMessage.rights.');
        }
    };
    GuildChangeMemberParametersMessage.ID = 5549;
    return GuildChangeMemberParametersMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildChangeMemberParametersMessage;
