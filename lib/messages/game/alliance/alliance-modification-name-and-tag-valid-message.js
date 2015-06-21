var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceModificationNameAndTagValidMessage = module.exports = function() {
    this.allianceName = "";
    this.allianceTag = "";

    return this;
};

require('util').inherits(AllianceModificationNameAndTagValidMessage, d2com.NetworkMessage.class);

AllianceModificationNameAndTagValidMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceModificationNameAndTagValidMessage(output);
};

AllianceModificationNameAndTagValidMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceModificationNameAndTagValidMessage(input);
};

AllianceModificationNameAndTagValidMessage.prototype.serializeAs_AllianceModificationNameAndTagValidMessage = function(param1) {
    param1.writeUTF(this.allianceName);
    param1.writeUTF(this.allianceTag);
};

AllianceModificationNameAndTagValidMessage.prototype.deserializeAs_AllianceModificationNameAndTagValidMessage = function(param1) {
    this.allianceName = param1.readUTF();
    this.allianceTag = param1.readUTF();
};

AllianceModificationNameAndTagValidMessage.prototype.getMessageId = function() {
    return 6449;
};

AllianceModificationNameAndTagValidMessage.prototype.getClassName = function() {
    return 'AllianceModificationNameAndTagValidMessage';
};

module.exports.id = 6449;