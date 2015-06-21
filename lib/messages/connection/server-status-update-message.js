var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameServerInformations = require('../../types/connection/game-server-informations.js').class;

var ServerStatusUpdateMessage = module.exports = function() {
    this.server = new GameServerInformations();

    return this;
};

require('util').inherits(ServerStatusUpdateMessage, d2com.NetworkMessage.class);

ServerStatusUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_ServerStatusUpdateMessage(output);
};

ServerStatusUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ServerStatusUpdateMessage(input);
};

ServerStatusUpdateMessage.prototype.serializeAs_ServerStatusUpdateMessage = function(param1) {
    this.server.serializeAs_GameServerInformations(param1);
};

ServerStatusUpdateMessage.prototype.deserializeAs_ServerStatusUpdateMessage = function(param1) {
    this.server = new GameServerInformations();
    this.server.deserialize(param1);
};

ServerStatusUpdateMessage.prototype.getMessageId = function() {
    return 50;
};

ServerStatusUpdateMessage.prototype.getClassName = function() {
    return 'ServerStatusUpdateMessage';
};

module.exports.id = 50;