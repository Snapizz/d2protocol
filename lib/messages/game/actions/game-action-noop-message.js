var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameActionNoopMessage = function() {

};

require('util').inherits(GameActionNoopMessage, d2com.NetworkMessage.class);

GameActionNoopMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionNoopMessage(output);
};

GameActionNoopMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionNoopMessage(input);
};

GameActionNoopMessage.prototype.serializeAs_GameActionNoopMessage = function(param1) {

};

GameActionNoopMessage.prototype.deserializeAs_GameActionNoopMessage = function(param1) {

};

GameActionNoopMessage.prototype.getMessageId = function() {
    return 1002;
};

GameActionNoopMessage.prototype.getClassName = function() {
    return 'GameActionNoopMessage';
};

module.exports.id = 1002;
module.exports.class = GameActionNoopMessage;
module.exports.getInstance = function() {
    return new GameActionNoopMessage;
};