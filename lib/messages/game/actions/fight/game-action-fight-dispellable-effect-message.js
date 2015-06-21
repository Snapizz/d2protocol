var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var AbstractFightDispellableEffect = require('../../../../types/game/actions/fight/abstract-fight-dispellable-effect.js').class;

var GameActionFightDispellableEffectMessage = function() {
    this.effect = new AbstractFightDispellableEffect();
};

require('util').inherits(GameActionFightDispellableEffectMessage, require('../..../../').class);

GameActionFightDispellableEffectMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightDispellableEffectMessage(output);
};

GameActionFightDispellableEffectMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightDispellableEffectMessage(input);
};

GameActionFightDispellableEffectMessage.prototype.serializeAs_GameActionFightDispellableEffectMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessageAs_AbstractGameActionMessage(param1);
    param1.writeShort(this.effect.getTypeId());
    this.effect.serialize(param1);
};

GameActionFightDispellableEffectMessage.prototype.deserializeAs_GameActionFightDispellableEffectMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _loc2_);
    this.effect.deserialize(param1);
};

GameActionFightDispellableEffectMessage.prototype.getMessageId = function() {
    return 6070;
};

GameActionFightDispellableEffectMessage.prototype.getClassName = function() {
    return 'GameActionFightDispellableEffectMessage';
};

module.exports.id = 6070;
module.exports.class = GameActionFightDispellableEffectMessage;
module.exports.getInstance = function() {
    return new GameActionFightDispellableEffectMessage;
};