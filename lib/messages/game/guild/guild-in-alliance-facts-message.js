var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var BasicNamedAllianceInformations = require('../../../types/game/context/roleplay/basic-named-alliance-informations.js').class;
var GuildFactSheetInformations = require('../../../types/game/social/guild-fact-sheet-informations.js').class;
var CharacterMinimalInformations = require('../../../types/game/character/character-minimal-informations.js').class;

var GuildInAllianceFactsMessage = function() {
    this.allianceInfos = new BasicNamedAllianceInformations();
};

require('util').inherits(GuildInAllianceFactsMessage, require('./guild-facts-message.js').class);

GuildInAllianceFactsMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInAllianceFactsMessage(output);
};

GuildInAllianceFactsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInAllianceFactsMessage(input);
};

GuildInAllianceFactsMessage.prototype.serializeAs_GuildInAllianceFactsMessage = function(param1) {
    this.serializeAs_GuildFactsMessage(param1);
    this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);
};

GuildInAllianceFactsMessage.prototype.deserializeAs_GuildInAllianceFactsMessage = function(param1) {
    this.deserializeAs_GuildFactsMessage(param1);
    this.allianceInfos = new BasicNamedAllianceInformations();
    this.allianceInfos.deserialize(param1);
};

GuildInAllianceFactsMessage.prototype.getMessageId = function() {
    return 6422;
};

GuildInAllianceFactsMessage.prototype.getClassName = function() {
    return 'GuildInAllianceFactsMessage';
};

module.exports.id = 6422;
module.exports.class = GuildInAllianceFactsMessage;
module.exports.getInstance = function() {
    return new GuildInAllianceFactsMessage;
};