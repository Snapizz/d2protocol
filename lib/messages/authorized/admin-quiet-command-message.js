var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var AdminQuietCommandMessage = function() {

};

require('util').inherits(AdminQuietCommandMessage, require('./admin-command-message.js').class);

AdminQuietCommandMessage.prototype.serialize = function(output) {
    this.serializeAs_AdminQuietCommandMessage(output);
};

AdminQuietCommandMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AdminQuietCommandMessage(input);
};

AdminQuietCommandMessage.prototype.serializeAs_AdminQuietCommandMessage = function(param1) {
    this.serializeAs_AdminCommandMessage(param1);
};

AdminQuietCommandMessage.prototype.deserializeAs_AdminQuietCommandMessage = function(param1) {
    this.deserializeAs_AdminCommandMessage(param1);
};

AdminQuietCommandMessage.prototype.getMessageId = function() {
    return 5662;
};

AdminQuietCommandMessage.prototype.getClassName = function() {
    return 'AdminQuietCommandMessage';
};

module.exports.id = 5662;
module.exports.class = AdminQuietCommandMessage;
module.exports.getInstance = function() {
    return new AdminQuietCommandMessage;
};