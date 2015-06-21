var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PaddockContentInformations = require('../../../types/game/paddock/paddock-content-informations.js').class;

var GuildPaddockBoughtMessage = module.exports = function() {
    this.paddockInfo = new PaddockContentInformations();

    return this;
};

require('util').inherits(GuildPaddockBoughtMessage, d2com.NetworkMessage.class);

GuildPaddockBoughtMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildPaddockBoughtMessage(output);
};

GuildPaddockBoughtMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildPaddockBoughtMessage(input);
};

GuildPaddockBoughtMessage.prototype.serializeAs_GuildPaddockBoughtMessage = function(param1) {
    this.paddockInfo.serializeAs_PaddockContentInformations(param1);
};

GuildPaddockBoughtMessage.prototype.deserializeAs_GuildPaddockBoughtMessage = function(param1) {
    this.paddockInfo = new PaddockContentInformations();
    this.paddockInfo.deserialize(param1);
};

GuildPaddockBoughtMessage.prototype.getMessageId = function() {
    return 5952;
};

GuildPaddockBoughtMessage.prototype.getClassName = function() {
    return 'GuildPaddockBoughtMessage';
};

module.exports.id = 5952;