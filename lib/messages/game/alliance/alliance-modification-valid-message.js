var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').class;

var AllianceModificationValidMessage = module.exports = function() {
    this.allianceName = "";
    this.allianceTag = "";
    this.Alliancemblem = new GuildEmblem();

    return this;
};

require('util').inherits(AllianceModificationValidMessage, d2com.NetworkMessage.class);

AllianceModificationValidMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceModificationValidMessage(output);
};

AllianceModificationValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceModificationValidMessage(input);
};

AllianceModificationValidMessage.prototype.serializeAs_AllianceModificationValidMessage = function(param1) {
    param1.writeUTF(this.allianceName);
    param1.writeUTF(this.allianceTag);
    this.Alliancemblem.serializeAs_GuildEmblem(param1);
};

AllianceModificationValidMessage.prototype.deserializeAs_AllianceModificationValidMessage = function(param1) {
    this.allianceName = param1.readUTF();
    this.allianceTag = param1.readUTF();
    this.Alliancemblem = new GuildEmblem();
    this.Alliancemblem.deserialize(param1);
};

AllianceModificationValidMessage.prototype.getMessageId = function() {
    return 6450;
};

AllianceModificationValidMessage.prototype.getClassName = function() {
    return 'AllianceModificationValidMessage';
};

module.exports.id = 6450;