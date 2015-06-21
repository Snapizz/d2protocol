var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameActionFightActivateGlyphTrapMessage = function() {
    this.markId = 0;
    this.active = false;
};

require('util').inherits(GameActionFightActivateGlyphTrapMessage, require('../abstract-game-action-message.js').class);

GameActionFightActivateGlyphTrapMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightActivateGlyphTrapMessage(output);
};

GameActionFightActivateGlyphTrapMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightActivateGlyphTrapMessage(input);
};

GameActionFightActivateGlyphTrapMessage.prototype.serializeAs_GameActionFightActivateGlyphTrapMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeShort(this.markId);
    param1.writeBoolean(this.active);
};

GameActionFightActivateGlyphTrapMessage.prototype.deserializeAs_GameActionFightActivateGlyphTrapMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.markId = param1.readShort();
    this.active = param1.readBoolean();
};

GameActionFightActivateGlyphTrapMessage.prototype.getMessageId = function() {
    return 6545;
};

GameActionFightActivateGlyphTrapMessage.prototype.getClassName = function() {
    return 'GameActionFightActivateGlyphTrapMessage';
};

module.exports.id = 6545;
module.exports.class = GameActionFightActivateGlyphTrapMessage;
module.exports.getInstance = function() {
    return new GameActionFightActivateGlyphTrapMessage;
};