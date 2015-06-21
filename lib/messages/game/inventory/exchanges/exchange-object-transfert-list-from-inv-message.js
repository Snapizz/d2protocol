var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeObjectTransfertListFromInvMessage = function() {
    this.ids = [];
};

require('util').inherits(ExchangeObjectTransfertListFromInvMessage, d2com.NetworkMessage.class);

ExchangeObjectTransfertListFromInvMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectTransfertListFromInvMessage(output);
};

ExchangeObjectTransfertListFromInvMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectTransfertListFromInvMessage(input);
};

ExchangeObjectTransfertListFromInvMessage.prototype.serializeAs_ExchangeObjectTransfertListFromInvMessage = function(param1) {
    param1.writeShort(this.ids.length);
    var _loc2_ = 0;
    while (_loc2_ < this.ids.length) {
        if (this.ids[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.ids[_loc2_] + ") on element 1 (starting at 1) of ids.");
        } else {
            param1.writeVarInt(this.ids[_loc2_]);
            _loc2_++;
            continue;
        }
    }
};

ExchangeObjectTransfertListFromInvMessage.prototype.deserializeAs_ExchangeObjectTransfertListFromInvMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of ids.");
        } else {
            this.ids.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
};

ExchangeObjectTransfertListFromInvMessage.prototype.getMessageId = function() {
    return 6183;
};

ExchangeObjectTransfertListFromInvMessage.prototype.getClassName = function() {
    return 'ExchangeObjectTransfertListFromInvMessage';
};

module.exports.id = 6183;
module.exports.class = ExchangeObjectTransfertListFromInvMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectTransfertListFromInvMessage;
};