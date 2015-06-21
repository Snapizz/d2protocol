var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var KrosmasterFigure = require('../../../types/web/krosmaster/krosmaster-figure.js').class;

var KrosmasterInventoryMessage = function() {
    this.figures = [];
};

require('util').inherits(KrosmasterInventoryMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new KrosmasterInventoryMessage();
};

KrosmasterInventoryMessage.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterInventoryMessage(output);
};

KrosmasterInventoryMessage.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterInventoryMessage(input);
};

KrosmasterInventoryMessage.prototype.serializeAs_KrosmasterInventoryMessage = function(param1) {
    param1.writeShort(this.figures.length);
    var _loc2_ = 0;
    while (_loc2_ < this.figures.length) {
        (this.figures[_loc2_]).serializeAs_KrosmasterFigure(param1);
        _loc2_++;
    }
};

KrosmasterInventoryMessage.prototype.deserializeAs_KrosmasterInventoryMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new KrosmasterFigure();
        _loc4_.deserialize(param1);
        this.figures.push(_loc4_);
        _loc3_++;
    }
};

KrosmasterInventoryMessage.prototype.getMessageId = function() {
    return 6350;
};

KrosmasterInventoryMessage.prototype.getClassName = function() {
    return 'KrosmasterInventoryMessage';
};

module.exports.id = 6350;
module.exports.KrosmasterInventoryMessage = KrosmasterInventoryMessage;