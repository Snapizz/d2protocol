var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var NpcDialogCreationMessage = function() {
    this.mapId = 0;
    this.npcId = 0;
};

require('util').inherits(NpcDialogCreationMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new NpcDialogCreationMessage();
};

NpcDialogCreationMessage.prototype.serialize = function(output) {
    this.serializeAs_NpcDialogCreationMessage(output);
};

NpcDialogCreationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_NpcDialogCreationMessage(input);
};

NpcDialogCreationMessage.prototype.serializeAs_NpcDialogCreationMessage = function(param1) {
    param1.writeInt(this.mapId);
    param1.writeInt(this.npcId);
};

NpcDialogCreationMessage.prototype.deserializeAs_NpcDialogCreationMessage = function(param1) {
    this.mapId = param1.readInt();
    this.npcId = param1.readInt();
};

NpcDialogCreationMessage.prototype.getMessageId = function() {
    return 5618;
};

NpcDialogCreationMessage.prototype.getClassName = function() {
    return 'NpcDialogCreationMessage';
};

module.exports.id = 5618;
module.exports.NpcDialogCreationMessage = NpcDialogCreationMessage;