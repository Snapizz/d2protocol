var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var MimicryObjectFeedAndAssociateRequestMessage = module.exports = function() {
    this.foodUID = 0;
    this.foodPos = 0;
    this.preview = false;

    return this;
};

require('util').inherits(MimicryObjectFeedAndAssociateRequestMessage, require('./symbiotic-object-associate-request-message.js'));

MimicryObjectFeedAndAssociateRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MimicryObjectFeedAndAssociateRequestMessage(output);
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(input);
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.serializeAs_MimicryObjectFeedAndAssociateRequestMessage = function(param1) {
    this.serializeAs_SymbioticObjectAssociateRequestMessage(param1);
    if (this.foodUID < 0) {
        throw new Error("Forbidden value (" + this.foodUID + ") on element foodUID.");
    } else {
        param1.writeVarInt(this.foodUID);
        if (this.foodPos < 0 || this.foodPos > 255) {
            throw new Error("Forbidden value (" + this.foodPos + ") on element foodPos.");
        } else {
            param1.writeByte(this.foodPos);
            param1.writeBoolean(this.preview);
            return;
        }
    }
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.deserializeAs_MimicryObjectFeedAndAssociateRequestMessage = function(param1) {
    this.deserializeAs_SymbioticObjectAssociateRequestMessage(param1);
    this.foodUID = param1.readVarUhInt();
    if (this.foodUID < 0) {
        throw new Error("Forbidden value (" + this.foodUID + ") on element of MimicryObjectFeedAndAssociateRequestMessage.foodUID.");
    } else {
        this.foodPos = param1.readUnsignedByte();
        if (this.foodPos < 0 || this.foodPos > 255) {
            throw new Error("Forbidden value (" + this.foodPos + ") on element of MimicryObjectFeedAndAssociateRequestMessage.foodPos.");
        } else {
            this.preview = param1.readBoolean();
            return;
        }
    }
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.getMessageId = function() {
    return 6460;
};

MimicryObjectFeedAndAssociateRequestMessage.prototype.getClassName = function() {
    return 'MimicryObjectFeedAndAssociateRequestMessage';
};

module.exports.id = 6460;