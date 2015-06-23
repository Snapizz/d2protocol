var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var Idol = require('../../../../types/game/idol/idol.js').Idol;

var GameFightStartMessage = function() {
    this.idols = [];
};

require('util').inherits(GameFightStartMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameFightStartMessage();
};

GameFightStartMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightStartMessage(output);
};

GameFightStartMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightStartMessage(input);
};

GameFightStartMessage.prototype.serializeAs_GameFightStartMessage = function(param1) {
    param1.writeShort(this.idols.length);
    var _loc2_ = 0;
    while (_loc2_ < this.idols.length) {
        (this.idols[_loc2_]).serializeAs_Idol(param1);
        _loc2_++;
    }
};

GameFightStartMessage.prototype.deserializeAs_GameFightStartMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new Idol();
        _loc4_.deserialize(param1);
        this.idols.push(_loc4_);
        _loc3_++;
    }
};

GameFightStartMessage.prototype.getMessageId = function() {
    return 712;
};

GameFightStartMessage.prototype.getClassName = function() {
    return 'GameFightStartMessage';
};

module.exports.id = 712;
module.exports.GameFightStartMessage = GameFightStartMessage;