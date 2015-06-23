var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SelectedServerDataMessage = function() {
    this.serverId = 0;
    this.address = "";
    this.port = 0;
    this.canCreateNewCharacter = false;
    this.ticket = [];
};

require('util').inherits(SelectedServerDataMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new SelectedServerDataMessage();
};

SelectedServerDataMessage.prototype.serialize = function(output) {
    this.serializeAs_SelectedServerDataMessage(output);
};

SelectedServerDataMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SelectedServerDataMessage(input);
};

SelectedServerDataMessage.prototype.serializeAs_SelectedServerDataMessage = function(param1) {
    if (this.serverId < 0) {
        throw new Error("Forbidden value (" + this.serverId + ") on element serverId.");
    } else {
        param1.writeVarShort(this.serverId);
        param1.writeUTF(this.address);
        if (this.port < 0 || this.port > 65535) {
            throw new Error("Forbidden value (" + this.port + ") on element port.");
        } else {
            param1.writeShort(this.port);
            param1.writeBoolean(this.canCreateNewCharacter);
            param1.writeVarInt(this.ticket.length);
            var _loc2_ = 0;
            while (_loc2_ < this.ticket.length) {
                param1.writeByte(this.ticket[_loc2_]);
                _loc2_++;
            }
            return;
        }
    }
};

SelectedServerDataMessage.prototype.deserializeAs_SelectedServerDataMessage = function(param1) {
    var _loc4_ = 0;
    this.serverId = param1.readVarUhShort();
    if (this.serverId < 0) {
        throw new Error("Forbidden value (" + this.serverId + ") on element of SelectedServerDataMessage.serverId.");
    } else {
        this.address = param1.readUTF();
        this.port = param1.readUnsignedShort();
        if (this.port < 0 || this.port > 65535) {
            throw new Error("Forbidden value (" + this.port + ") on element of SelectedServerDataMessage.port.");
        } else {
            this.canCreateNewCharacter = param1.readBoolean();
            var _loc2_ = param1.readVarInt();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.ticket.push(_loc4_);
                _loc3_++;
            }
            return;
        }
    }
};

SelectedServerDataMessage.prototype.getMessageId = function() {
    return 42;
};

SelectedServerDataMessage.prototype.getClassName = function() {
    return 'SelectedServerDataMessage';
};

module.exports.id = 42;
module.exports.SelectedServerDataMessage = SelectedServerDataMessage;