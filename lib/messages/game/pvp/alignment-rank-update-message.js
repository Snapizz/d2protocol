var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AlignmentRankUpdateMessage = function() {
    this.alignmentRank = 0;
    this.verbose = false;
};

require('util').inherits(AlignmentRankUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AlignmentRankUpdateMessage();
};

AlignmentRankUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_AlignmentRankUpdateMessage(output);
};

AlignmentRankUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AlignmentRankUpdateMessage(input);
};

AlignmentRankUpdateMessage.prototype.serializeAs_AlignmentRankUpdateMessage = function(param1) {
    if (this.alignmentRank < 0) {
        throw new Error("Forbidden value (" + this.alignmentRank + ") on element alignmentRank.");
    } else {
        param1.writeByte(this.alignmentRank);
        param1.writeBoolean(this.verbose);
        return;
    }
};

AlignmentRankUpdateMessage.prototype.deserializeAs_AlignmentRankUpdateMessage = function(param1) {
    this.alignmentRank = param1.readByte();
    if (this.alignmentRank < 0) {
        throw new Error("Forbidden value (" + this.alignmentRank + ") on element of AlignmentRankUpdateMessage.alignmentRank.");
    } else {
        this.verbose = param1.readBoolean();
        return;
    }
};

AlignmentRankUpdateMessage.prototype.getMessageId = function() {
    return 6058;
};

AlignmentRankUpdateMessage.prototype.getClassName = function() {
    return 'AlignmentRankUpdateMessage';
};

module.exports.id = 6058;
module.exports.AlignmentRankUpdateMessage = AlignmentRankUpdateMessage;