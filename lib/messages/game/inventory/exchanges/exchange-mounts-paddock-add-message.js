var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var MountClientData = require('../../../../types/game/mount/mount-client-data.js').class;

var ExchangeMountsPaddockAddMessage = function() {
    this.mountDescription = [];
};

require('util').inherits(ExchangeMountsPaddockAddMessage, d2com.NetworkMessage.class);

ExchangeMountsPaddockAddMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeMountsPaddockAddMessage(output);
};

ExchangeMountsPaddockAddMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeMountsPaddockAddMessage(input);
};

ExchangeMountsPaddockAddMessage.prototype.serializeAs_ExchangeMountsPaddockAddMessage = function(param1) {
    param1.writeShort(this.mountDescription.length);
    var _loc2_ = 0;
    while (_loc2_ < this.mountDescription.length) {
        (this.mountDescription[_loc2_]).serializeAs_MountClientData(param1);
        _loc2_++;
    }
};

ExchangeMountsPaddockAddMessage.prototype.deserializeAs_ExchangeMountsPaddockAddMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new MountClientData();
        _loc4_.deserialize(param1);
        this.mountDescription.push(_loc4_);
        _loc3_++;
    }
};

ExchangeMountsPaddockAddMessage.prototype.getMessageId = function() {
    return 6561;
};

ExchangeMountsPaddockAddMessage.prototype.getClassName = function() {
    return 'ExchangeMountsPaddockAddMessage';
};

module.exports.id = 6561;
module.exports.class = ExchangeMountsPaddockAddMessage;
module.exports.getInstance = function() {
    return new ExchangeMountsPaddockAddMessage;
};