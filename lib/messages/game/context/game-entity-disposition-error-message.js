var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameEntityDispositionErrorMessage = function() {

};

require('util').inherits(GameEntityDispositionErrorMessage, d2com.NetworkMessage.class);

GameEntityDispositionErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_GameEntityDispositionErrorMessage(output);
};

GameEntityDispositionErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameEntityDispositionErrorMessage(input);
};

GameEntityDispositionErrorMessage.prototype.serializeAs_GameEntityDispositionErrorMessage = function(param1) {

};

GameEntityDispositionErrorMessage.prototype.deserializeAs_GameEntityDispositionErrorMessage = function(param1) {

};

GameEntityDispositionErrorMessage.prototype.getMessageId = function() {
    return 5695;
};

GameEntityDispositionErrorMessage.prototype.getClassName = function() {
    return 'GameEntityDispositionErrorMessage';
};

module.exports.id = 5695;
module.exports.class = GameEntityDispositionErrorMessage;
module.exports.getInstance = function() {
    return new GameEntityDispositionErrorMessage;
};