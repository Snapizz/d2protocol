var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismInfoJoinLeaveRequestMessage = module.exports = function() {
    this.join = false;

    return this;
};

require('util').inherits(PrismInfoJoinLeaveRequestMessage, d2com.NetworkMessage.class);

PrismInfoJoinLeaveRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismInfoJoinLeaveRequestMessage(output);
};

PrismInfoJoinLeaveRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismInfoJoinLeaveRequestMessage(input);
};

PrismInfoJoinLeaveRequestMessage.prototype.serializeAs_PrismInfoJoinLeaveRequestMessage = function(param1) {
    param1.writeBoolean(this.join);
};

PrismInfoJoinLeaveRequestMessage.prototype.deserializeAs_PrismInfoJoinLeaveRequestMessage = function(param1) {
    this.join = param1.readBoolean();
};

PrismInfoJoinLeaveRequestMessage.prototype.getMessageId = function() {
    return 5844;
};

PrismInfoJoinLeaveRequestMessage.prototype.getClassName = function() {
    return 'PrismInfoJoinLeaveRequestMessage';
};

module.exports.id = 5844;