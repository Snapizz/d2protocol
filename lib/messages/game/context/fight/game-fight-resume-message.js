var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameFightSpellCooldown = require('../../../../types/game/context/fight/game-fight-spell-cooldown.js').class;
var FightDispellableEffectExtendedInformations = require('../../../../types/game/action/fight/fight-dispellable-effect-extended-informations.js').class;
var GameActionMark = require('../../../../types/game/actions/fight/game-action-mark.js').class;

var GameFightResumeMessage = module.exports = function() {
    this.spellCooldowns = [];
    this.summonCount = 0;
    this.bombCount = 0;

    return this;
};

require('util').inherits(GameFightResumeMessage, require('./game-fight-spectate-message.js'));

GameFightResumeMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightResumeMessage(output);
};

GameFightResumeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightResumeMessage(input);
};

GameFightResumeMessage.prototype.serializeAs_GameFightResumeMessage = function(param1) {
    this.serializeAs_GameFightSpectateMessage(param1);
    param1.writeShort(this.spellCooldowns.length);
    var _loc2_ = 0;
    while (_loc2_ < this.spellCooldowns.length) {
        (this.spellCooldowns[_loc2_]).serializeAs_GameFightSpellCooldown(param1);
        _loc2_++;
    }
    if (this.summonCount < 0) {
        throw new Error("Forbidden value (" + this.summonCount + ") on element summonCount.");
    } else {
        param1.writeByte(this.summonCount);
        if (this.bombCount < 0) {
            throw new Error("Forbidden value (" + this.bombCount + ") on element bombCount.");
        } else {
            param1.writeByte(this.bombCount);
            return;
        }
    }
};

GameFightResumeMessage.prototype.deserializeAs_GameFightResumeMessage = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_GameFightSpectateMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new GameFightSpellCooldown();
        _loc4_.deserialize(param1);
        this.spellCooldowns.push(_loc4_);
        _loc3_++;
    }
    this.summonCount = param1.readByte();
    if (this.summonCount < 0) {
        throw new Error("Forbidden value (" + this.summonCount + ") on element of GameFightResumeMessage.summonCount.");
    } else {
        this.bombCount = param1.readByte();
        if (this.bombCount < 0) {
            throw new Error("Forbidden value (" + this.bombCount + ") on element of GameFightResumeMessage.bombCount.");
        } else {
            return;
        }
    }
};

GameFightResumeMessage.prototype.getMessageId = function() {
    return 6067;
};

GameFightResumeMessage.prototype.getClassName = function() {
    return 'GameFightResumeMessage';
};

module.exports.id = 6067;