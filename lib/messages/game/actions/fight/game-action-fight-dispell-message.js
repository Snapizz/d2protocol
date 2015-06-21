var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameActionFightDispellMessage = function() {
    this.targetId = 0;
};

require('util').inherits(GameActionFightDispellMessage, require('../..../../').class);

GameActionFightDispellMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightDispellMessage(output);
};

GameActionFightDispellMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightDispellMessage(input);
};

GameActionFightDispellMessage.prototype.serializeAs_GameActionFightDispellMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessageAs_AbstractGameActionMessage(param1);
    param1.writeInt(this.targetId);
};

GameActionFightDispellMessage.prototype.deserializeAs_GameActionFightDispellMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    this.targetId = param1.readInt();
};

GameActionFightDispellMessage.prototype.getMessageId = function() {
    return 5533;
};

GameActionFightDispellMessage.prototype.getClassName = function() {
    return 'GameActionFightDispellMessage';
};

module.exports.id = 5533;
module.exports.class = GameActionFightDispellMessage;
module.exports.getInstance = function() {
    return new GameActionFightDispellMessage;
};