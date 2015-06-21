var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GetPartInfoMessage = function() {
    this.id = "";
};

require('util').inherits(GetPartInfoMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GetPartInfoMessage();
};

GetPartInfoMessage.prototype.serialize = function(output) {
    this.serializeAs_GetPartInfoMessage(output);
};

GetPartInfoMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GetPartInfoMessage(input);
};

GetPartInfoMessage.prototype.serializeAs_GetPartInfoMessage = function(param1) {
    param1.writeUTF(this.id);
};

GetPartInfoMessage.prototype.deserializeAs_GetPartInfoMessage = function(param1) {
    this.id = param1.readUTF();
};

GetPartInfoMessage.prototype.getMessageId = function() {
    return 1506;
};

GetPartInfoMessage.prototype.getClassName = function() {
    return 'GetPartInfoMessage';
};

module.exports.id = 1506;
module.exports.GetPartInfoMessage = GetPartInfoMessage;