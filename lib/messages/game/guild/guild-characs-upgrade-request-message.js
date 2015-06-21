var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildCharacsUpgradeRequestMessage = module.exports = function() {
    this.charaTypeTarget = 0;

    return this;
};

require('util').inherits(GuildCharacsUpgradeRequestMessage, d2com.NetworkMessage.class);

GuildCharacsUpgradeRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildCharacsUpgradeRequestMessage(output);
};

GuildCharacsUpgradeRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildCharacsUpgradeRequestMessage(input);
};

GuildCharacsUpgradeRequestMessage.prototype.serializeAs_GuildCharacsUpgradeRequestMessage = function(param1) {
    param1.writeByte(this.charaTypeTarget);
};

GuildCharacsUpgradeRequestMessage.prototype.deserializeAs_GuildCharacsUpgradeRequestMessage = function(param1) {
    this.charaTypeTarget = param1.readByte();
    if (this.charaTypeTarget < 0) {
        throw new Error("Forbidden value (" + this.charaTypeTarget + ") on element of GuildCharacsUpgradeRequestMessage.charaTypeTarget.");
    } else {
        return;
    }
};

GuildCharacsUpgradeRequestMessage.prototype.getMessageId = function() {
    return 5706;
};

GuildCharacsUpgradeRequestMessage.prototype.getClassName = function() {
    return 'GuildCharacsUpgradeRequestMessage';
};

module.exports.id = 5706;