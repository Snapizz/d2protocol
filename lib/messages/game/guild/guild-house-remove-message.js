var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildHouseRemoveMessage = module.exports = function() {
    this.houseId = 0;

    return this;
};

require('util').inherits(GuildHouseRemoveMessage, d2com.NetworkMessage.class);

GuildHouseRemoveMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildHouseRemoveMessage(output);
};

GuildHouseRemoveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildHouseRemoveMessage(input);
};

GuildHouseRemoveMessage.prototype.serializeAs_GuildHouseRemoveMessage = function(param1) {
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
    } else {
        param1.writeVarInt(this.houseId);
        return;
    }
};

GuildHouseRemoveMessage.prototype.deserializeAs_GuildHouseRemoveMessage = function(param1) {
    this.houseId = param1.readVarUhInt();
    if (this.houseId < 0) {
        throw new Error("Forbidden value (" + this.houseId + ") on element of GuildHouseRemoveMessage.houseId.");
    } else {
        return;
    }
};

GuildHouseRemoveMessage.prototype.getMessageId = function() {
    return 6180;
};

GuildHouseRemoveMessage.prototype.getClassName = function() {
    return 'GuildHouseRemoveMessage';
};

module.exports.id = 6180;