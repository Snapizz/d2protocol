var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameActionFightTriggerEffectMessage = function() {

};

require('util').inherits(GameActionFightTriggerEffectMessage, require('./game-action-fight-dispell-effect-message.js').class);

GameActionFightTriggerEffectMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightTriggerEffectMessage(output);
};

GameActionFightTriggerEffectMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightTriggerEffectMessage(input);
};

GameActionFightTriggerEffectMessage.prototype.serializeAs_GameActionFightTriggerEffectMessage = function(param1) {
    this.serializeAs_GameActionFightDispellEffectMessageAs_GameActionFightDispellEffectMessage(param1);
};

GameActionFightTriggerEffectMessage.prototype.deserializeAs_GameActionFightTriggerEffectMessage = function(param1) {
    this.deserializeAs_GameActionFightDispellEffectMessage(param1);
};

GameActionFightTriggerEffectMessage.prototype.getMessageId = function() {
    return 6147;
};

GameActionFightTriggerEffectMessage.prototype.getClassName = function() {
    return 'GameActionFightTriggerEffectMessage';
};

module.exports.id = 6147;
module.exports.class = GameActionFightTriggerEffectMessage;
module.exports.getInstance = function() {
    return new GameActionFightTriggerEffectMessage;
};