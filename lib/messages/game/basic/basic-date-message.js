var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var BasicDateMessage = function() {
    this.day = 0;
    this.month = 0;
    this.year = 0;
};

require('util').inherits(BasicDateMessage, d2com.NetworkMessage.class);

BasicDateMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicDateMessage(output);
};

BasicDateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicDateMessage(input);
};

BasicDateMessage.prototype.serializeAs_BasicDateMessage = function(param1) {
    if (this.day < 0) {
        throw new Error("Forbidden value (" + this.day + ") on element day.");
    } else {
        param1.writeByte(this.day);
        if (this.month < 0) {
            throw new Error("Forbidden value (" + this.month + ") on element month.");
        } else {
            param1.writeByte(this.month);
            if (this.year < 0) {
                throw new Error("Forbidden value (" + this.year + ") on element year.");
            } else {
                param1.writeShort(this.year);
                return;
            }
        }
    }
};

BasicDateMessage.prototype.deserializeAs_BasicDateMessage = function(param1) {
    this.day = param1.readByte();
    if (this.day < 0) {
        throw new Error("Forbidden value (" + this.day + ") on element of BasicDateMessage.day.");
    } else {
        this.month = param1.readByte();
        if (this.month < 0) {
            throw new Error("Forbidden value (" + this.month + ") on element of BasicDateMessage.month.");
        } else {
            this.year = param1.readShort();
            if (this.year < 0) {
                throw new Error("Forbidden value (" + this.year + ") on element of BasicDateMessage.year.");
            } else {
                return;
            }
        }
    }
};

BasicDateMessage.prototype.getMessageId = function() {
    return 177;
};

BasicDateMessage.prototype.getClassName = function() {
    return 'BasicDateMessage';
};

module.exports.id = 177;
module.exports.class = BasicDateMessage;
module.exports.getInstance = function() {
    return new BasicDateMessage;
};