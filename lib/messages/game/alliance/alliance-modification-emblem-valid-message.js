var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').class;

var AllianceModificationEmblemValidMessage = function() {
    this.Alliancemblem = new GuildEmblem();
};

require('util').inherits(AllianceModificationEmblemValidMessage, d2com.NetworkMessage.class);

AllianceModificationEmblemValidMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceModificationEmblemValidMessage(output);
};

AllianceModificationEmblemValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceModificationEmblemValidMessage(input);
};

AllianceModificationEmblemValidMessage.prototype.serializeAs_AllianceModificationEmblemValidMessage = function(param1) {
    this.Alliancemblem.serializeAs_GuildEmblem(param1);
};

AllianceModificationEmblemValidMessage.prototype.deserializeAs_AllianceModificationEmblemValidMessage = function(param1) {
    this.Alliancemblem = new GuildEmblem();
    this.Alliancemblem.deserialize(param1);
};

AllianceModificationEmblemValidMessage.prototype.getMessageId = function() {
    return 6447;
};

AllianceModificationEmblemValidMessage.prototype.getClassName = function() {
    return 'AllianceModificationEmblemValidMessage';
};

module.exports.id = 6447;
module.exports.class = AllianceModificationEmblemValidMessage;
module.exports.getInstance = function() {
    return new AllianceModificationEmblemValidMessage;
};