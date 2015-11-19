/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterExperienceGainMessage = (function (_super) {
    __extends(CharacterExperienceGainMessage, _super);
    function CharacterExperienceGainMessage() {
        this.experienceCharacter = 0;
        this.experienceMount = 0;
        this.experienceGuild = 0;
        this.experienceIncarnation = 0;
        _super.call(this);
    }
    CharacterExperienceGainMessage.prototype.getMessageId = function () {
        return CharacterExperienceGainMessage.ID;
    };
    CharacterExperienceGainMessage.prototype.reset = function () {
        this.experienceCharacter = 0;
        this.experienceMount = 0;
        this.experienceGuild = 0;
        this.experienceIncarnation = 0;
    };
    CharacterExperienceGainMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterExperienceGainMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterExperienceGainMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterExperienceGainMessage(param1);
    };
    CharacterExperienceGainMessage.prototype.serializeAs_CharacterExperienceGainMessage = function (param1) {
        if (this.experienceCharacter < 0 || this.experienceCharacter > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceCharacter + ') on element experienceCharacter.');
        }
        param1.writeVarLong(this.experienceCharacter);
        if (this.experienceMount < 0 || this.experienceMount > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceMount + ') on element experienceMount.');
        }
        param1.writeVarLong(this.experienceMount);
        if (this.experienceGuild < 0 || this.experienceGuild > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceGuild + ') on element experienceGuild.');
        }
        param1.writeVarLong(this.experienceGuild);
        if (this.experienceIncarnation < 0 || this.experienceIncarnation > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceIncarnation + ') on element experienceIncarnation.');
        }
        param1.writeVarLong(this.experienceIncarnation);
    };
    CharacterExperienceGainMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterExperienceGainMessage(param1);
    };
    CharacterExperienceGainMessage.prototype.deserializeAs_CharacterExperienceGainMessage = function (param1) {
        this.experienceCharacter = param1.readVarUhLong();
        if (this.experienceCharacter < 0 || this.experienceCharacter > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceCharacter + ') on element of CharacterExperienceGainMessage.experienceCharacter.');
        }
        this.experienceMount = param1.readVarUhLong();
        if (this.experienceMount < 0 || this.experienceMount > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceMount + ') on element of CharacterExperienceGainMessage.experienceMount.');
        }
        this.experienceGuild = param1.readVarUhLong();
        if (this.experienceGuild < 0 || this.experienceGuild > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceGuild + ') on element of CharacterExperienceGainMessage.experienceGuild.');
        }
        this.experienceIncarnation = param1.readVarUhLong();
        if (this.experienceIncarnation < 0 || this.experienceIncarnation > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experienceIncarnation + ') on element of CharacterExperienceGainMessage.experienceIncarnation.');
        }
    };
    CharacterExperienceGainMessage.ID = 6321;
    return CharacterExperienceGainMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterExperienceGainMessage;
