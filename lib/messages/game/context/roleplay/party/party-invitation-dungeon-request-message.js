var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyInvitationDungeonRequestMessage = function() {
    this.dungeonId = 0;
};

require('util').inherits(PartyInvitationDungeonRequestMessage, require('./party-invitation-request-message.js').class);

PartyInvitationDungeonRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyInvitationDungeonRequestMessage(output);
};

PartyInvitationDungeonRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyInvitationDungeonRequestMessage(input);
};

PartyInvitationDungeonRequestMessage.prototype.serializeAs_PartyInvitationDungeonRequestMessage = function(param1) {
    this.serializeAs_PartyInvitationRequestMessage(param1);
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
    } else {
        param1.writeVarShort(this.dungeonId);
        return;
    }
};

PartyInvitationDungeonRequestMessage.prototype.deserializeAs_PartyInvitationDungeonRequestMessage = function(param1) {
    this.deserializeAs_PartyInvitationRequestMessage(param1);
    this.dungeonId = param1.readVarUhShort();
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element of PartyInvitationDungeonRequestMessage.dungeonId.");
    } else {
        return;
    }
};

PartyInvitationDungeonRequestMessage.prototype.getMessageId = function() {
    return 6245;
};

PartyInvitationDungeonRequestMessage.prototype.getClassName = function() {
    return 'PartyInvitationDungeonRequestMessage';
};

module.exports.id = 6245;
module.exports.class = PartyInvitationDungeonRequestMessage;
module.exports.getInstance = function() {
    return new PartyInvitationDungeonRequestMessage;
};