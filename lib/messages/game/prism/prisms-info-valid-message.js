var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PrismFightersInformation = require('../../../types/game/prism/prism-fighters-information.js').class;

var PrismsInfoValidMessage = module.exports = function() {
    this.fights = [];

    return this;
};

require('util').inherits(PrismsInfoValidMessage, d2com.NetworkMessage.class);

PrismsInfoValidMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismsInfoValidMessage(output);
};

PrismsInfoValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismsInfoValidMessage(input);
};

PrismsInfoValidMessage.prototype.serializeAs_PrismsInfoValidMessage = function(param1) {
    param1.writeShort(this.fights.length);
    var _loc2_ = 0;
    while (_loc2_ < this.fights.length) {
        (this.fights[_loc2_]).serializeAs_PrismFightersInformation(param1);
        _loc2_++;
    }
};

PrismsInfoValidMessage.prototype.deserializeAs_PrismsInfoValidMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new PrismFightersInformation();
        _loc4_.deserialize(param1);
        this.fights.push(_loc4_);
        _loc3_++;
    }
};

PrismsInfoValidMessage.prototype.getMessageId = function() {
    return 6451;
};

PrismsInfoValidMessage.prototype.getClassName = function() {
    return 'PrismsInfoValidMessage';
};

module.exports.id = 6451;