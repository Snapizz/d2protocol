var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AdminCommandMessage = function() {
    this.content = "";
};

require('util').inherits(AdminCommandMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AdminCommandMessage();
};

AdminCommandMessage.prototype.serialize = function(output) {
    this.serializeAs_AdminCommandMessage(output);
};

AdminCommandMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AdminCommandMessage(input);
};

AdminCommandMessage.prototype.serializeAs_AdminCommandMessage = function(param1) {
    param1.writeUTF(this.content);
};

AdminCommandMessage.prototype.deserializeAs_AdminCommandMessage = function(param1) {
    this.content = param1.readUTF();
};

AdminCommandMessage.prototype.getMessageId = function() {
    return 76;
};

AdminCommandMessage.prototype.getClassName = function() {
    return 'AdminCommandMessage';
};

module.exports.id = 76;
module.exports.AdminCommandMessage = AdminCommandMessage;