var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyMemberEjectedMessage = function() {
    this.kickerId = 0;
};

require('util').inherits(PartyMemberEjectedMessage, require('./party-member-remove-message.js').class);

PartyMemberEjectedMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyMemberEjectedMessage(output);
};

PartyMemberEjectedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyMemberEjectedMessage(input);
};

PartyMemberEjectedMessage.prototype.serializeAs_PartyMemberEjectedMessage = function(param1) {
    this.serializeAs_PartyMemberRemoveMessage(param1);
    if (this.kickerId < 0) {
        throw new Error("Forbidden value (" + this.kickerId + ") on element kickerId.");
    } else {
        param1.writeVarInt(this.kickerId);
        return;
    }
};

PartyMemberEjectedMessage.prototype.deserializeAs_PartyMemberEjectedMessage = function(param1) {
    this.deserializeAs_PartyMemberRemoveMessage(param1);
    this.kickerId = param1.readVarUhInt();
    if (this.kickerId < 0) {
        throw new Error("Forbidden value (" + this.kickerId + ") on element of PartyMemberEjectedMessage.kickerId.");
    } else {
        return;
    }
};

PartyMemberEjectedMessage.prototype.getMessageId = function() {
    return 6252;
};

PartyMemberEjectedMessage.prototype.getClassName = function() {
    return 'PartyMemberEjectedMessage';
};

module.exports.id = 6252;
module.exports.class = PartyMemberEjectedMessage;
module.exports.getInstance = function() {
    return new PartyMemberEjectedMessage;
};