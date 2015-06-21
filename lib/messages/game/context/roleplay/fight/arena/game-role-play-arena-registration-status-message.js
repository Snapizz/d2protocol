var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayArenaRegistrationStatusMessage = module.exports = function() {
    this.registered = false;
    this.step = 0;
    this.battleMode = 3;

    return this;
};

require('util').inherits(GameRolePlayArenaRegistrationStatusMessage, d2com.NetworkMessage.class);

GameRolePlayArenaRegistrationStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayArenaRegistrationStatusMessage(output);
};

GameRolePlayArenaRegistrationStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayArenaRegistrationStatusMessage(input);
};

GameRolePlayArenaRegistrationStatusMessage.prototype.serializeAs_GameRolePlayArenaRegistrationStatusMessage = function(param1) {
    param1.writeBoolean(this.registered);
    param1.writeByte(this.step);
    param1.writeInt(this.battleMode);
};

GameRolePlayArenaRegistrationStatusMessage.prototype.deserializeAs_GameRolePlayArenaRegistrationStatusMessage = function(param1) {
    this.registered = param1.readBoolean();
    this.step = param1.readByte();
    if (this.step < 0) {
        throw new Error("Forbidden value (" + this.step + ") on element of GameRolePlayArenaRegistrationStatusMessage.step.");
    } else {
        this.battleMode = param1.readInt();
        if (this.battleMode < 0) {
            throw new Error("Forbidden value (" + this.battleMode + ") on element of GameRolePlayArenaRegistrationStatusMessage.battleMode.");
        } else {
            return;
        }
    }
};

GameRolePlayArenaRegistrationStatusMessage.prototype.getMessageId = function() {
    return 6284;
};

GameRolePlayArenaRegistrationStatusMessage.prototype.getClassName = function() {
    return 'GameRolePlayArenaRegistrationStatusMessage';
};

module.exports.id = 6284;