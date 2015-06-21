var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItem = require('../../../types/game/data/items/object-item.js').class;

var ChatServerCopyWithObjectMessage = function() {
    this.objects = [];
};

require('util').inherits(ChatServerCopyWithObjectMessage, require('./chat-server-copy-message.js'));

module.exports = function() {
    return new ChatServerCopyWithObjectMessage();
};

ChatServerCopyWithObjectMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatServerCopyWithObjectMessage(output);
};

ChatServerCopyWithObjectMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatServerCopyWithObjectMessage(input);
};

ChatServerCopyWithObjectMessage.prototype.serializeAs_ChatServerCopyWithObjectMessage = function(param1) {
    this.serializeAs_ChatServerCopyMessage(param1);
    param1.writeShort(this.objects.length);
    var _loc2_ = 0;
    while (_loc2_ < this.objects.length) {
        (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
        _loc2_++;
    }
};

ChatServerCopyWithObjectMessage.prototype.deserializeAs_ChatServerCopyWithObjectMessage = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_ChatServerCopyMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItem();
        _loc4_.deserialize(param1);
        this.objects.push(_loc4_);
        _loc3_++;
    }
};

ChatServerCopyWithObjectMessage.prototype.getMessageId = function() {
    return 884;
};

ChatServerCopyWithObjectMessage.prototype.getClassName = function() {
    return 'ChatServerCopyWithObjectMessage';
};

module.exports.id = 884;
module.exports.ChatServerCopyWithObjectMessage = ChatServerCopyWithObjectMessage;