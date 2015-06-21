var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var DecraftedItemStackInfo = require('../../../../types/game/context/roleplay/job/decrafted-item-stack-info.js').class;

var DecraftResultMessage = function() {
    this.results = [];
};

require('util').inherits(DecraftResultMessage, d2com.NetworkMessage.class);

DecraftResultMessage.prototype.serialize = function(output) {
    this.serializeAs_DecraftResultMessage(output);
};

DecraftResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DecraftResultMessage(input);
};

DecraftResultMessage.prototype.serializeAs_DecraftResultMessage = function(param1) {
    param1.writeShort(this.results.length);
    var _loc2_ = 0;
    while (_loc2_ < this.results.length) {
        (this.results[_loc2_]).serializeAs_DecraftedItemStackInfo(param1);
        _loc2_++;
    }
};

DecraftResultMessage.prototype.deserializeAs_DecraftResultMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new DecraftedItemStackInfo();
        _loc4_.deserialize(param1);
        this.results.push(_loc4_);
        _loc3_++;
    }
};

DecraftResultMessage.prototype.getMessageId = function() {
    return 6569;
};

DecraftResultMessage.prototype.getClassName = function() {
    return 'DecraftResultMessage';
};

module.exports.id = 6569;
module.exports.class = DecraftResultMessage;
module.exports.getInstance = function() {
    return new DecraftResultMessage;
};