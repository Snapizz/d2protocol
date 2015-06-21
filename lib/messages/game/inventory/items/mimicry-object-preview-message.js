var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../../types/game/data/items/object-item.js').class;

var MimicryObjectPreviewMessage = module.exports = function() {
    this.result = new ObjectItem();

    return this;
};

require('util').inherits(MimicryObjectPreviewMessage, d2com.NetworkMessage.class);

MimicryObjectPreviewMessage.prototype.serialize = function(output) {
    this.serializeAs_MimicryObjectPreviewMessage(output);
};

MimicryObjectPreviewMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MimicryObjectPreviewMessage(input);
};

MimicryObjectPreviewMessage.prototype.serializeAs_MimicryObjectPreviewMessage = function(param1) {
    this.result.serializeAs_ObjectItem(param1);
};

MimicryObjectPreviewMessage.prototype.deserializeAs_MimicryObjectPreviewMessage = function(param1) {
    this.result = new ObjectItem();
    this.result.deserialize(param1);
};

MimicryObjectPreviewMessage.prototype.getMessageId = function() {
    return 6458;
};

MimicryObjectPreviewMessage.prototype.getClassName = function() {
    return 'MimicryObjectPreviewMessage';
};

module.exports.id = 6458;