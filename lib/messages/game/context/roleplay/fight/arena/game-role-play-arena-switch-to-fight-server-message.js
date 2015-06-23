var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GameRolePlayArenaSwitchToFightServerMessage = function() {
    this.address = "";
    this.port = 0;
    this.ticket = [];
};

require('util').inherits(GameRolePlayArenaSwitchToFightServerMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GameRolePlayArenaSwitchToFightServerMessage();
};

GameRolePlayArenaSwitchToFightServerMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayArenaSwitchToFightServerMessage(output);
};

GameRolePlayArenaSwitchToFightServerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayArenaSwitchToFightServerMessage(input);
};

GameRolePlayArenaSwitchToFightServerMessage.prototype.serializeAs_GameRolePlayArenaSwitchToFightServerMessage = function(param1) {
    param1.writeUTF(this.address);
    if (this.port < 0 || this.port > 65535) {
        throw new Error("Forbidden value (" + this.port + ") on element port.");
    } else {
        param1.writeShort(this.port);
        param1.writeVarInt(this.ticket.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ticket.length) {
            param1.writeByte(this.ticket[_loc2_]);
            _loc2_++;
        }
        return;
    }
};

GameRolePlayArenaSwitchToFightServerMessage.prototype.deserializeAs_GameRolePlayArenaSwitchToFightServerMessage = function(param1) {
    var _loc4_ = 0;
    this.address = param1.readUTF();
    this.port = param1.readUnsignedShort();
    if (this.port < 0 || this.port > 65535) {
        throw new Error("Forbidden value (" + this.port + ") on element of GameRolePlayArenaSwitchToFightServerMessage.port.");
    } else {
        var _loc2_ = param1.readVarInt();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            this.ticket.push(_loc4_);
            _loc3_++;
        }
        return;
    }
};

GameRolePlayArenaSwitchToFightServerMessage.prototype.getMessageId = function() {
    return 6575;
};

GameRolePlayArenaSwitchToFightServerMessage.prototype.getClassName = function() {
    return 'GameRolePlayArenaSwitchToFightServerMessage';
};

module.exports.id = 6575;
module.exports.GameRolePlayArenaSwitchToFightServerMessage = GameRolePlayArenaSwitchToFightServerMessage;