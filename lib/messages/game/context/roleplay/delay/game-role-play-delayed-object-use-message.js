var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayDelayedObjectUseMessage = module.exports = function() {
    this.objectGID = 0;

    return this;
};

require('util').inherits(GameRolePlayDelayedObjectUseMessage, require('./game-role-play-delayed-action-message.js'));

GameRolePlayDelayedObjectUseMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayDelayedObjectUseMessage(output);
};

GameRolePlayDelayedObjectUseMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayDelayedObjectUseMessage(input);
};

GameRolePlayDelayedObjectUseMessage.prototype.serializeAs_GameRolePlayDelayedObjectUseMessage = function(param1) {
    this.serializeAs_GameRolePlayDelayedActionMessage(param1);
    if (this.objectGID < 0) {
        throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
    } else {
        param1.writeVarShort(this.objectGID);
        return;
    }
};

GameRolePlayDelayedObjectUseMessage.prototype.deserializeAs_GameRolePlayDelayedObjectUseMessage = function(param1) {
    this.deserializeAs_GameRolePlayDelayedActionMessage(param1);
    this.objectGID = param1.readVarUhShort();
    if (this.objectGID < 0) {
        throw new Error("Forbidden value (" + this.objectGID + ") on element of GameRolePlayDelayedObjectUseMessage.objectGID.");
    } else {
        return;
    }
};

GameRolePlayDelayedObjectUseMessage.prototype.getMessageId = function() {
    return 6425;
};

GameRolePlayDelayedObjectUseMessage.prototype.getClassName = function() {
    return 'GameRolePlayDelayedObjectUseMessage';
};

module.exports.id = 6425;