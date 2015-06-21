var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PlayerStatus = require('../../../../types/game/character/status/player-status.js').class;

var PlayerStatusUpdateMessage = function() {
    this.accountId = 0;
    this.playerId = 0;
    this.status = new PlayerStatus();
};

require('util').inherits(PlayerStatusUpdateMessage, d2com.NetworkMessage.class);

PlayerStatusUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_PlayerStatusUpdateMessage(output);
};

PlayerStatusUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PlayerStatusUpdateMessage(input);
};

PlayerStatusUpdateMessage.prototype.serializeAs_PlayerStatusUpdateMessage = function(param1) {
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
        param1.writeInt(this.accountId);
        if (this.playerId < 0) {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        } else {
            param1.writeVarInt(this.playerId);
            param1.writeShort(this.status.getTypeId());
            this.status.serialize(param1);
            return;
        }
    }
};

PlayerStatusUpdateMessage.prototype.deserializeAs_PlayerStatusUpdateMessage = function(param1) {
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element of PlayerStatusUpdateMessage.accountId.");
    } else {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error("Forbidden value (" + this.playerId + ") on element of PlayerStatusUpdateMessage.playerId.");
        } else {
            var _loc2_ = param1.readUnsignedShort();
            this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
            return;
        }
    }
};

PlayerStatusUpdateMessage.prototype.getMessageId = function() {
    return 6386;
};

PlayerStatusUpdateMessage.prototype.getClassName = function() {
    return 'PlayerStatusUpdateMessage';
};

module.exports.id = 6386;
module.exports.class = PlayerStatusUpdateMessage;
module.exports.getInstance = function() {
    return new PlayerStatusUpdateMessage;
};