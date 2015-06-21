var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ContentPart = require('../../../types/updater/content-part.js').ContentPart;

var PartInfoMessage = function() {
    this.part = new ContentPart();
    this.installationPercent = 0;
};

require('util').inherits(PartInfoMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PartInfoMessage();
};

PartInfoMessage.prototype.serialize = function(output) {
    this.serializeAs_PartInfoMessage(output);
};

PartInfoMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartInfoMessage(input);
};

PartInfoMessage.prototype.serializeAs_PartInfoMessage = function(param1) {
    this.part.serializeAs_ContentPart(param1);
    param1.writeFloat(this.installationPercent);
};

PartInfoMessage.prototype.deserializeAs_PartInfoMessage = function(param1) {
    this.part = new ContentPart();
    this.part.deserialize(param1);
    this.installationPercent = param1.readFloat();
};

PartInfoMessage.prototype.getMessageId = function() {
    return 1508;
};

PartInfoMessage.prototype.getClassName = function() {
    return 'PartInfoMessage';
};

module.exports.id = 1508;
module.exports.PartInfoMessage = PartInfoMessage;