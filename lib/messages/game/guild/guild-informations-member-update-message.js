var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildMember = require('../../../types/game/guild/guild-member.js').class;

var GuildInformationsMemberUpdateMessage = module.exports = function() {
    this.member = new GuildMember();

    return this;
};

require('util').inherits(GuildInformationsMemberUpdateMessage, d2com.NetworkMessage.class);

GuildInformationsMemberUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInformationsMemberUpdateMessage(output);
};

GuildInformationsMemberUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInformationsMemberUpdateMessage(input);
};

GuildInformationsMemberUpdateMessage.prototype.serializeAs_GuildInformationsMemberUpdateMessage = function(param1) {
    this.member.serializeAs_GuildMember(param1);
};

GuildInformationsMemberUpdateMessage.prototype.deserializeAs_GuildInformationsMemberUpdateMessage = function(param1) {
    this.member = new GuildMember();
    this.member.deserialize(param1);
};

GuildInformationsMemberUpdateMessage.prototype.getMessageId = function() {
    return 5597;
};

GuildInformationsMemberUpdateMessage.prototype.getClassName = function() {
    return 'GuildInformationsMemberUpdateMessage';
};

module.exports.id = 5597;