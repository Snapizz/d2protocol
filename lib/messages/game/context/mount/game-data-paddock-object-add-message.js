var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PaddockItem = require('../../../../types/game/paddock/paddock-item.js').class;

var GameDataPaddockObjectAddMessage = module.exports = function() {
    this.paddockItemDescription = new PaddockItem();

    return this;
};

require('util').inherits(GameDataPaddockObjectAddMessage, d2com.NetworkMessage.class);

GameDataPaddockObjectAddMessage.prototype.serialize = function(output) {
    this.serializeAs_GameDataPaddockObjectAddMessage(output);
};

GameDataPaddockObjectAddMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameDataPaddockObjectAddMessage(input);
};

GameDataPaddockObjectAddMessage.prototype.serializeAs_GameDataPaddockObjectAddMessage = function(param1) {
    this.paddockItemDescription.serializeAs_PaddockItem(param1);
};

GameDataPaddockObjectAddMessage.prototype.deserializeAs_GameDataPaddockObjectAddMessage = function(param1) {
    this.paddockItemDescription = new PaddockItem();
    this.paddockItemDescription.deserialize(param1);
};

GameDataPaddockObjectAddMessage.prototype.getMessageId = function() {
    return 5990;
};

GameDataPaddockObjectAddMessage.prototype.getClassName = function() {
    return 'GameDataPaddockObjectAddMessage';
};

module.exports.id = 5990;