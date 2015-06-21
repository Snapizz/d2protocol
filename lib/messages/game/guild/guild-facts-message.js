var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildFactSheetInformations = require('../../../types/game/social/guild-fact-sheet-informations.js').class;
var CharacterMinimalInformations = require('../../../types/game/character/character-minimal-informations.js').class;

var GuildFactsMessage = function() {
    this.infos = new GuildFactSheetInformations();
    this.creationDate = 0;
    this.nbTaxCollectors = 0;
    this.enabled = false;
    this.members = [];
};

require('util').inherits(GuildFactsMessage, d2com.NetworkMessage.class);

GuildFactsMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildFactsMessage(output);
};

GuildFactsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildFactsMessage(input);
};

GuildFactsMessage.prototype.serializeAs_GuildFactsMessage = function(param1) {
    param1.writeShort(this.infos.getTypeId());
    this.infos.serialize(param1);
    if (this.creationDate < 0) {
        throw new Error("Forbidden value (" + this.creationDate + ") on element creationDate.");
    } else {
        param1.writeInt(this.creationDate);
        if (this.nbTaxCollectors < 0) {
            throw new Error("Forbidden value (" + this.nbTaxCollectors + ") on element nbTaxCollectors.");
        } else {
            param1.writeVarShort(this.nbTaxCollectors);
            param1.writeBoolean(this.enabled);
            param1.writeShort(this.members.length);
            var _loc2_ = 0;
            while (_loc2_ < this.members.length) {
                (this.members[_loc2_]).serializeAs_CharacterMinimalInformations(param1);
                _loc2_++;
            }
            return;
        }
    }
};

GuildFactsMessage.prototype.deserializeAs_GuildFactsMessage = function(param1) {
    var _loc5_ = null;
    var _loc2_ = param1.readUnsignedShort();
    this.infos = ProtocolTypeManager.getInstance(GuildFactSheetInformations, _loc2_);
    this.infos.deserialize(param1);
    this.creationDate = param1.readInt();
    if (this.creationDate < 0) {
        throw new Error("Forbidden value (" + this.creationDate + ") on element of GuildFactsMessage.creationDate.");
    } else {
        this.nbTaxCollectors = param1.readVarUhShort();
        if (this.nbTaxCollectors < 0) {
            throw new Error("Forbidden value (" + this.nbTaxCollectors + ") on element of GuildFactsMessage.nbTaxCollectors.");
        } else {
            this.enabled = param1.readBoolean();
            var _loc3_ = param1.readUnsignedShort();
            var _loc4_ = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = new CharacterMinimalInformations();
                _loc5_.deserialize(param1);
                this.members.push(_loc5_);
                _loc4_++;
            }
            return;
        }
    }
};

GuildFactsMessage.prototype.getMessageId = function() {
    return 6415;
};

GuildFactsMessage.prototype.getClassName = function() {
    return 'GuildFactsMessage';
};

module.exports.id = 6415;
module.exports.class = GuildFactsMessage;
module.exports.getInstance = function() {
    return new GuildFactsMessage;
};