var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var SelectedServerDataExtendedMessage = function() {
    this.serverIds = [];
};

require('util').inherits(SelectedServerDataExtendedMessage, require('./selected-server-data-message.js').class);

SelectedServerDataExtendedMessage.prototype.serialize = function(output) {
    this.serializeAs_SelectedServerDataExtendedMessage(output);
};

SelectedServerDataExtendedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SelectedServerDataExtendedMessage(input);
};

SelectedServerDataExtendedMessage.prototype.serializeAs_SelectedServerDataExtendedMessage = function(param1) {
    this.serializeAs_SelectedServerDataMessageAs_SelectedServerDataMessage(param1);
    param1.writeShort(this.serverIds.length);
    var _loc2_ = 0;
    while (_loc2_ < this.serverIds.length) {
        if (this.serverIds[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.serverIds[_loc2_] + ") on element 1 (starting at 1) of serverIds.");
        } else {
            param1.writeVarShort(this.serverIds[_loc2_]);
            _loc2_++;
            continue;
        }
    }
};

SelectedServerDataExtendedMessage.prototype.deserializeAs_SelectedServerDataExtendedMessage = function(param1) {
    var _loc4_ = 0;
    this.deserializeAs_SelectedServerDataMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of serverIds.");
        } else {
            this.serverIds.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
};

SelectedServerDataExtendedMessage.prototype.getMessageId = function() {
    return 6469;
};

SelectedServerDataExtendedMessage.prototype.getClassName = function() {
    return 'SelectedServerDataExtendedMessage';
};

module.exports.id = 6469;
module.exports.class = SelectedServerDataExtendedMessage;
module.exports.getInstance = function() {
    return new SelectedServerDataExtendedMessage;
};