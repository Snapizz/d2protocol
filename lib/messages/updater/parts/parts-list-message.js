var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ContentPart = require('../../../types/updater/content-part.js').class;

var PartsListMessage = module.exports = function() {
    this.parts = [];

    return this;
};

require('util').inherits(PartsListMessage, d2com.NetworkMessage.class);

PartsListMessage.prototype.serialize = function(output) {
    this.serializeAs_PartsListMessage(output);
};

PartsListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartsListMessage(input);
};

PartsListMessage.prototype.serializeAs_PartsListMessage = function(param1) {
    param1.writeShort(this.parts.length);
    var _loc2_ = 0;
    while (_loc2_ < this.parts.length) {
        (this.parts[_loc2_]).serializeAs_ContentPart(param1);
        _loc2_++;
    }
};

PartsListMessage.prototype.deserializeAs_PartsListMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new ContentPart();
        _loc4_.deserialize(param1);
        this.parts.push(_loc4_);
        _loc3_++;
    }
};

PartsListMessage.prototype.getMessageId = function() {
    return 1502;
};

PartsListMessage.prototype.getClassName = function() {
    return 'PartsListMessage';
};

module.exports.id = 1502;