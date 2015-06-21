var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameActionFightDispellEffectMessage = function() {
    this.boostUID = 0;
};

require('util').inherits(GameActionFightDispellEffectMessage, require('./game-action-fight-dispell-message.js').class);

GameActionFightDispellEffectMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightDispellEffectMessage(output);
};

GameActionFightDispellEffectMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightDispellEffectMessage(input);
};

GameActionFightDispellEffectMessage.prototype.serializeAs_GameActionFightDispellEffectMessage = function(param1) {
    this.serializeAs_GameActionFightDispellMessageAs_GameActionFightDispellMessage(param1);
    if (this.boostUID < 0) {
        throw new Error("Forbidden value (" + this.boostUID + ") on element boostUID.");
    } else {
        param1.writeInt(this.boostUID);
        return;
    }
};

GameActionFightDispellEffectMessage.prototype.deserializeAs_GameActionFightDispellEffectMessage = function(param1) {
    this.deserializeAs_GameActionFightDispellMessage(param1);
    this.boostUID = param1.readInt();
    if (this.boostUID < 0) {
        throw new Error("Forbidden value (" + this.boostUID + ") on element of GameActionFightDispellEffectMessage.boostUID.");
    } else {
        return;
    }
};

GameActionFightDispellEffectMessage.prototype.getMessageId = function() {
    return 6113;
};

GameActionFightDispellEffectMessage.prototype.getClassName = function() {
    return 'GameActionFightDispellEffectMessage';
};

module.exports.id = 6113;
module.exports.class = GameActionFightDispellEffectMessage;
module.exports.getInstance = function() {
    return new GameActionFightDispellEffectMessage;
};