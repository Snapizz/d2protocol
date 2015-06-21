var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PrismSubareaEmptyInfo = require('../../../types/game/prism/prism-subarea-empty-info.js').class;

var PrismsListMessage = module.exports = function() {
    this.prisms = [];

    return this;
};

require('util').inherits(PrismsListMessage, d2com.NetworkMessage.class);

PrismsListMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismsListMessage(output);
};

PrismsListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismsListMessage(input);
};

PrismsListMessage.prototype.serializeAs_PrismsListMessage = function(param1) {
    param1.writeShort(this.prisms.length);
    var _loc2_ = 0;
    while (_loc2_ < this.prisms.length) {
        param1.writeShort((this.prisms[_loc2_]).getTypeId());
        (this.prisms[_loc2_]).serialize(param1);
        _loc2_++;
    }
};

PrismsListMessage.prototype.deserializeAs_PrismsListMessage = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
        _loc5_ = ProtocolTypeManager.getInstance(PrismSubareaEmptyInfo, _loc4_);
        _loc5_.deserialize(param1);
        this.prisms.push(_loc5_);
        _loc3_++;
    }
};

PrismsListMessage.prototype.getMessageId = function() {
    return 6440;
};

PrismsListMessage.prototype.getClassName = function() {
    return 'PrismsListMessage';
};

module.exports.id = 6440;