var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var FightDispellableEffectExtendedInformations = require('../../../../types/game/action/fight/fight-dispellable-effect-extended-informations.js').FightDispellableEffectExtendedInformations;
var GameActionMark = require('../../../../types/game/actions/fight/game-action-mark.js').GameActionMark;

var GameFightSpectateMessage = function() {
    this.effects = [];
    this.marks = [];
    this.gameTurn = 0;
    this.fightStart = 0;
};

require('util').inherits(GameFightSpectateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameFightSpectateMessage();
};

GameFightSpectateMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightSpectateMessage(output);
};

GameFightSpectateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightSpectateMessage(input);
};

GameFightSpectateMessage.prototype.serializeAs_GameFightSpectateMessage = function(param1) {
    param1.writeShort(this.effects.length);
    var _loc2_ = 0;
    while (_loc2_ < this.effects.length) {
        (this.effects[_loc2_]).serializeAs_FightDispellableEffectExtendedInformations(param1);
        _loc2_++;
    }
    param1.writeShort(this.marks.length);
    var _loc3_ = 0;
    while (_loc3_ < this.marks.length) {
        (this.marks[_loc3_]).serializeAs_GameActionMark(param1);
        _loc3_++;
    }
    if (this.gameTurn < 0) {
        throw new Error("Forbidden value (" + this.gameTurn + ") on element gameTurn.");
    } else {
        param1.writeVarShort(this.gameTurn);
        if (this.fightStart < 0) {
            throw new Error("Forbidden value (" + this.fightStart + ") on element fightStart.");
        } else {
            param1.writeInt(this.fightStart);
            return;
        }
    }
};

GameFightSpectateMessage.prototype.deserializeAs_GameFightSpectateMessage = function(param1) {
    var _loc6_ = null;
    var _loc7_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc6_ = new FightDispellableEffectExtendedInformations();
        _loc6_.deserialize(param1);
        this.effects.push(_loc6_);
        _loc3_++;
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
        _loc7_ = new GameActionMark();
        _loc7_.deserialize(param1);
        this.marks.push(_loc7_);
        _loc5_++;
    }
    this.gameTurn = param1.readVarUhShort();
    if (this.gameTurn < 0) {
        throw new Error("Forbidden value (" + this.gameTurn + ") on element of GameFightSpectateMessage.gameTurn.");
    } else {
        this.fightStart = param1.readInt();
        if (this.fightStart < 0) {
            throw new Error("Forbidden value (" + this.fightStart + ") on element of GameFightSpectateMessage.fightStart.");
        } else {
            return;
        }
    }
};

GameFightSpectateMessage.prototype.getMessageId = function() {
    return 6069;
};

GameFightSpectateMessage.prototype.getClassName = function() {
    return 'GameFightSpectateMessage';
};

module.exports.id = 6069;
module.exports.GameFightSpectateMessage = GameFightSpectateMessage;