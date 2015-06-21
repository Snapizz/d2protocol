var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var DungeonPartyFinderRegisterErrorMessage = function() {

};

require('util').inherits(DungeonPartyFinderRegisterErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new DungeonPartyFinderRegisterErrorMessage();
};

DungeonPartyFinderRegisterErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_DungeonPartyFinderRegisterErrorMessage(output);
};

DungeonPartyFinderRegisterErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DungeonPartyFinderRegisterErrorMessage(input);
};

DungeonPartyFinderRegisterErrorMessage.prototype.serializeAs_DungeonPartyFinderRegisterErrorMessage = function(param1) {

};

DungeonPartyFinderRegisterErrorMessage.prototype.deserializeAs_DungeonPartyFinderRegisterErrorMessage = function(param1) {

};

DungeonPartyFinderRegisterErrorMessage.prototype.getMessageId = function() {
    return 6243;
};

DungeonPartyFinderRegisterErrorMessage.prototype.getClassName = function() {
    return 'DungeonPartyFinderRegisterErrorMessage';
};

module.exports.id = 6243;
module.exports.DungeonPartyFinderRegisterErrorMessage = DungeonPartyFinderRegisterErrorMessage;