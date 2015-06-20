var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var AlignmentRankUpdateMessage = function() {
  this.alignmentRank = 0;
  this.verbose = false;
};

util.inherits(AlignmentRankUpdateMessage, BaseMessage);

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
module.exports.class = AlignmentRankUpdateMessage;