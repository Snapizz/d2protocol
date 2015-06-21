var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SelectedServerRefusedMessage = module.exports = function() {
    this.serverId = 0;
    this.error = 1;
    this.serverStatus = 1;

    return this;
};

require('util').inherits(SelectedServerRefusedMessage, d2com.NetworkMessage.class);

SelectedServerRefusedMessage.prototype.serialize = function(output) {
    this.serializeAs_SelectedServerRefusedMessage(output);
};

SelectedServerRefusedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SelectedServerRefusedMessage(input);
};

SelectedServerRefusedMessage.prototype.serializeAs_SelectedServerRefusedMessage = function(param1) {
    if (this.serverId < 0) {
        throw new Error("Forbidden value (" + this.serverId + ") on element serverId.");
    } else {
        param1.writeVarShort(this.serverId);
        param1.writeByte(this.error);
        param1.writeByte(this.serverStatus);
        return;
    }
};

SelectedServerRefusedMessage.prototype.deserializeAs_SelectedServerRefusedMessage = function(param1) {
    this.serverId = param1.readVarUhShort();
    if (this.serverId < 0) {
        throw new Error("Forbidden value (" + this.serverId + ") on element of SelectedServerRefusedMessage.serverId.");
    } else {
        this.error = param1.readByte();
        if (this.error < 0) {
            throw new Error("Forbidden value (" + this.error + ") on element of SelectedServerRefusedMessage.error.");
        } else {
            this.serverStatus = param1.readByte();
            if (this.serverStatus < 0) {
                throw new Error("Forbidden value (" + this.serverStatus + ") on element of SelectedServerRefusedMessage.serverStatus.");
            } else {
                return;
            }
        }
    }
};

SelectedServerRefusedMessage.prototype.getMessageId = function() {
    return 41;
};

SelectedServerRefusedMessage.prototype.getClassName = function() {
    return 'SelectedServerRefusedMessage';
};

module.exports.id = 41;