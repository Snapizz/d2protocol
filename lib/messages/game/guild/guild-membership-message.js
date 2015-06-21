var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GuildInformations = require('../../../types/game/context/roleplay/guild-informations.js').class;

var GuildMembershipMessage = module.exports = function() {


    return this;
};

require('util').inherits(GuildMembershipMessage, require('./guild-joined-message.js'));

GuildMembershipMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildMembershipMessage(output);
};

GuildMembershipMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildMembershipMessage(input);
};

GuildMembershipMessage.prototype.serializeAs_GuildMembershipMessage = function(param1) {
    this.serializeAs_GuildJoinedMessage(param1);
};

GuildMembershipMessage.prototype.deserializeAs_GuildMembershipMessage = function(param1) {
    this.deserializeAs_GuildJoinedMessage(param1);
};

GuildMembershipMessage.prototype.getMessageId = function() {
    return 5835;
};

GuildMembershipMessage.prototype.getClassName = function() {
    return 'GuildMembershipMessage';
};

module.exports.id = 5835;