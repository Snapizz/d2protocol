var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ActorOrientation = require('../../../types/game/context/actor-orientation.js').class;

var GameMapChangeOrientationsMessage = module.exports = function() {
    this.orientations = [];

    return this;
};

require('util').inherits(GameMapChangeOrientationsMessage, d2com.NetworkMessage.class);

GameMapChangeOrientationsMessage.prototype.serialize = function(output) {
    this.serializeAs_GameMapChangeOrientationsMessage(output);
};

GameMapChangeOrientationsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameMapChangeOrientationsMessage(input);
};

GameMapChangeOrientationsMessage.prototype.serializeAs_GameMapChangeOrientationsMessage = function(param1) {
    param1.writeShort(this.orientations.length);
    var _loc2_ = 0;
    while (_loc2_ < this.orientations.length) {
        (this.orientations[_loc2_]).serializeAs_ActorOrientation(param1);
        _loc2_++;
    }
};

GameMapChangeOrientationsMessage.prototype.deserializeAs_GameMapChangeOrientationsMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new ActorOrientation();
        _loc4_.deserialize(param1);
        this.orientations.push(_loc4_);
        _loc3_++;
    }
};

GameMapChangeOrientationsMessage.prototype.getMessageId = function() {
    return 6155;
};

GameMapChangeOrientationsMessage.prototype.getClassName = function() {
    return 'GameMapChangeOrientationsMessage';
};

module.exports.id = 6155;