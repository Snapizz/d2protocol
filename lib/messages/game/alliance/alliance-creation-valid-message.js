var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildEmblem = require('../../../types/game/guild/guild-emblem.js').class;

var AllianceCreationValidMessage = module.exports = function() {
    this.allianceName = "";
    this.allianceTag = "";
    this.allianceEmblem = new GuildEmblem();

    return this;
};

require('util').inherits(AllianceCreationValidMessage, d2com.NetworkMessage.class);

AllianceCreationValidMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceCreationValidMessage(output);
};

AllianceCreationValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceCreationValidMessage(input);
};

AllianceCreationValidMessage.prototype.serializeAs_AllianceCreationValidMessage = function(param1) {
    param1.writeUTF(this.allianceName);
    param1.writeUTF(this.allianceTag);
    this.allianceEmblem.serializeAs_GuildEmblem(param1);
};

AllianceCreationValidMessage.prototype.deserializeAs_AllianceCreationValidMessage = function(param1) {
    this.allianceName = param1.readUTF();
    this.allianceTag = param1.readUTF();
    this.allianceEmblem = new GuildEmblem();
    this.allianceEmblem.deserialize(param1);
};

AllianceCreationValidMessage.prototype.getMessageId = function() {
    return 6393;
};

AllianceCreationValidMessage.prototype.getClassName = function() {
    return 'AllianceCreationValidMessage';
};

module.exports.id = 6393;