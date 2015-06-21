var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectTransfertListWithQuantityToInvMessage = module.exports = function() {
    this.ids = [];
    this.qtys = [];

    return this;
};

require('util').inherits(ExchangeObjectTransfertListWithQuantityToInvMessage, d2com.NetworkMessage.class);

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(output);
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(input);
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage = function(param1) {
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
    param1.writeShort(this.qtys.length);
    var _loc3_ = 0;
    while (_loc3_ < this.qtys.length) {
        if (this.qtys[_loc3_] < 0) {
            throw new Error("Forbidden value (" + this.qtys[_loc3_] + ") on element 2 (starting at 1) of qtys.");
        } else {
            param1.writeVarInt(this.qtys[_loc3_]);
            _loc3_++;
            continue;
        }
    }
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage = function(param1) {
    var _loc6_ = 0;
    var _loc7_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhInt();
        if (_loc6_ < 0) {
            throw new Error("Forbidden value (" + _loc6_ + ") on elements of ids.");
        } else {
            this.ids.push(_loc6_);
            _loc3_++;
            continue;
        }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
        _loc7_ = param1.readVarUhInt();
        if (_loc7_ < 0) {
            throw new Error("Forbidden value (" + _loc7_ + ") on elements of qtys.");
        } else {
            this.qtys.push(_loc7_);
            _loc5_++;
            continue;
        }
    }
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.getMessageId = function() {
    return 6470;
};

ExchangeObjectTransfertListWithQuantityToInvMessage.prototype.getClassName = function() {
    return 'ExchangeObjectTransfertListWithQuantityToInvMessage';
};

module.exports.id = 6470;