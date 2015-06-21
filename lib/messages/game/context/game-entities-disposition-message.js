var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var IdentifiedEntityDispositionInformations = require('../../../types/game/context/identified-entity-disposition-informations.js').IdentifiedEntityDispositionInformations;

var GameEntitiesDispositionMessage = function() {
    this.dispositions = [];
};

require('util').inherits(GameEntitiesDispositionMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameEntitiesDispositionMessage();
};

GameEntitiesDispositionMessage.prototype.serialize = function(output) {
    this.serializeAs_GameEntitiesDispositionMessage(output);
};

GameEntitiesDispositionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameEntitiesDispositionMessage(input);
};

GameEntitiesDispositionMessage.prototype.serializeAs_GameEntitiesDispositionMessage = function(param1) {
    param1.writeShort(this.dispositions.length);
    var _loc2_ = 0;
    while (_loc2_ < this.dispositions.length) {
        (this.dispositions[_loc2_]).serializeAs_IdentifiedEntityDispositionInformations(param1);
        _loc2_++;
    }
};

GameEntitiesDispositionMessage.prototype.deserializeAs_GameEntitiesDispositionMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new IdentifiedEntityDispositionInformations();
        _loc4_.deserialize(param1);
        this.dispositions.push(_loc4_);
        _loc3_++;
    }
};

GameEntitiesDispositionMessage.prototype.getMessageId = function() {
    return 5696;
};

GameEntitiesDispositionMessage.prototype.getClassName = function() {
    return 'GameEntitiesDispositionMessage';
};

module.exports.id = 5696;
module.exports.GameEntitiesDispositionMessage = GameEntitiesDispositionMessage;