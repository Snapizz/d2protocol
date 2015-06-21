var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations.js').class;
var GuildInAllianceInformations = require('../../../types/game/context/roleplay/guild-in-alliance-informations.js').class;

var AllianceFactsMessage = module.exports = function() {
    this.infos = new AllianceFactSheetInformations();
    this.guilds = [];
    this.controlledSubareaIds = [];
    this.leaderCharacterId = 0;
    this.leaderCharacterName = "";

    return this;
};

require('util').inherits(AllianceFactsMessage, d2com.NetworkMessage.class);

AllianceFactsMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceFactsMessage(output);
};

AllianceFactsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceFactsMessage(input);
};

AllianceFactsMessage.prototype.serializeAs_AllianceFactsMessage = function(param1) {
    param1.writeShort(this.infos.getTypeId());
    this.infos.serialize(param1);
    param1.writeShort(this.guilds.length);
    var _loc2_ = 0;
    while (_loc2_ < this.guilds.length) {
        (this.guilds[_loc2_]).serializeAs_GuildInAllianceInformations(param1);
        _loc2_++;
    }
    param1.writeShort(this.controlledSubareaIds.length);
    var _loc3_ = 0;
    while (_loc3_ < this.controlledSubareaIds.length) {
        if (this.controlledSubareaIds[_loc3_] < 0) {
            throw new Error("Forbidden value (" + this.controlledSubareaIds[_loc3_] + ") on element 3 (starting at 1) of controlledSubareaIds.");
        } else {
            param1.writeVarShort(this.controlledSubareaIds[_loc3_]);
            _loc3_++;
            continue;
        }
    }
    if (this.leaderCharacterId < 0) {
        throw new Error("Forbidden value (" + this.leaderCharacterId + ") on element leaderCharacterId.");
    } else {
        param1.writeVarInt(this.leaderCharacterId);
        param1.writeUTF(this.leaderCharacterName);
        return;
    }
};

AllianceFactsMessage.prototype.deserializeAs_AllianceFactsMessage = function(param1) {
    var _loc7_ = null;
    var _loc8_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    this.infos = ProtocolTypeManager.getInstance(AllianceFactSheetInformations, _loc2_);
    this.infos.deserialize(param1);
    var _loc3_ = param1.readUnsignedShort();
    var _loc4_ = 0;
    while (_loc4_ < _loc3_) {
        _loc7_ = new GuildInAllianceInformations();
        _loc7_.deserialize(param1);
        this.guilds.push(_loc7_);
        _loc4_++;
    }
    var _loc5_ = param1.readUnsignedShort();
    var _loc6_ = 0;
    while (_loc6_ < _loc5_) {
        _loc8_ = param1.readVarUhShort();
        if (_loc8_ < 0) {
            throw new Error("Forbidden value (" + _loc8_ + ") on elements of controlledSubareaIds.");
        } else {
            this.controlledSubareaIds.push(_loc8_);
            _loc6_++;
            continue;
        }
    }
    this.leaderCharacterId = param1.readVarUhInt();
    if (this.leaderCharacterId < 0) {
        throw new Error("Forbidden value (" + this.leaderCharacterId + ") on element of AllianceFactsMessage.leaderCharacterId.");
    } else {
        this.leaderCharacterName = param1.readUTF();
        return;
    }
};

AllianceFactsMessage.prototype.getMessageId = function() {
    return 6414;
};

AllianceFactsMessage.prototype.getClassName = function() {
    return 'AllianceFactsMessage';
};

module.exports.id = 6414;