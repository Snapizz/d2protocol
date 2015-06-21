var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations.js').class;

var GameRolePlayShowActorWithEventMessage = module.exports = function() {
    this.actorEventId = 0;

    return this;
};

require('util').inherits(GameRolePlayShowActorWithEventMessage, require('./game-role-play-show-actor-message.js'));

GameRolePlayShowActorWithEventMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayShowActorWithEventMessage(output);
};

GameRolePlayShowActorWithEventMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayShowActorWithEventMessage(input);
};

GameRolePlayShowActorWithEventMessage.prototype.serializeAs_GameRolePlayShowActorWithEventMessage = function(param1) {
    this.serializeAs_GameRolePlayShowActorMessage(param1);
    if (this.actorEventId < 0) {
        throw new Error("Forbidden value (" + this.actorEventId + ") on element actorEventId.");
    } else {
        param1.writeByte(this.actorEventId);
        return;
    }
};

GameRolePlayShowActorWithEventMessage.prototype.deserializeAs_GameRolePlayShowActorWithEventMessage = function(param1) {
    this.deserializeAs_GameRolePlayShowActorMessage(param1);
    this.actorEventId = param1.readByte();
    if (this.actorEventId < 0) {
        throw new Error("Forbidden value (" + this.actorEventId + ") on element of GameRolePlayShowActorWithEventMessage.actorEventId.");
    } else {
        return;
    }
};

GameRolePlayShowActorWithEventMessage.prototype.getMessageId = function() {
    return 6407;
};

GameRolePlayShowActorWithEventMessage.prototype.getClassName = function() {
    return 'GameRolePlayShowActorWithEventMessage';
};

module.exports.id = 6407;