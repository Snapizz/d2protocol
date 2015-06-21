var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var EntityLook = require('../../../types/game/look/entity-look.js').class;

var GameContextRefreshEntityLookMessage = function() {
    this.id = 0;
    this.look = new EntityLook();
};

require('util').inherits(GameContextRefreshEntityLookMessage, d2com.NetworkMessage.class);

GameContextRefreshEntityLookMessage.prototype.serialize = function(output) {
    this.serializeAs_GameContextRefreshEntityLookMessage(output);
};

GameContextRefreshEntityLookMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameContextRefreshEntityLookMessage(input);
};

GameContextRefreshEntityLookMessage.prototype.serializeAs_GameContextRefreshEntityLookMessage = function(param1) {
    param1.writeInt(this.id);
    this.look.serializeAs_EntityLook(param1);
};

GameContextRefreshEntityLookMessage.prototype.deserializeAs_GameContextRefreshEntityLookMessage = function(param1) {
    this.id = param1.readInt();
    this.look = new EntityLook();
    this.look.deserialize(param1);
};

GameContextRefreshEntityLookMessage.prototype.getMessageId = function() {
    return 5637;
};

GameContextRefreshEntityLookMessage.prototype.getClassName = function() {
    return 'GameContextRefreshEntityLookMessage';
};

module.exports.id = 5637;
module.exports.class = GameContextRefreshEntityLookMessage;
module.exports.getInstance = function() {
    return new GameContextRefreshEntityLookMessage;
};