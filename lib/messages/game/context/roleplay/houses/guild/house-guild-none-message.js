var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var HouseGuildNoneMessage = module.exports = function() {
    this.houseId = 0;

    return this;
};

require('util').inherits(HouseGuildNoneMessage, d2com.NetworkMessage.class);

HouseGuildNoneMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseGuildNoneMessage(output);
};

HouseGuildNoneMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseGuildNoneMessage(input);
};

HouseGuildNoneMessage.prototype.serializeAs_HouseGuildNoneMessage = function(param1) {
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
    } else {
        param1.writeVarInt(this.houseId);
        return;
    }
};

HouseGuildNoneMessage.prototype.deserializeAs_HouseGuildNoneMessage = function(param1) {
    this.houseId = param1.readVarUhInt();
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element of HouseGuildNoneMessage.houseId.");
    } else {
        return;
    }
};

HouseGuildNoneMessage.prototype.getMessageId = function() {
    return 5701;
};

HouseGuildNoneMessage.prototype.getClassName = function() {
    return 'HouseGuildNoneMessage';
};

module.exports.id = 5701;