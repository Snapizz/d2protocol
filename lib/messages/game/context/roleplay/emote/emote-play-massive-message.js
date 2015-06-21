var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var EmotePlayMassiveMessage = function() {
    this.actorIds = [];
};

require('util').inherits(EmotePlayMassiveMessage, require('./emote-play-abstract-message.js').class);

EmotePlayMassiveMessage.prototype.serialize = function(output) {
    this.serializeAs_EmotePlayMassiveMessage(output);
};

EmotePlayMassiveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_EmotePlayMassiveMessage(input);
};

EmotePlayMassiveMessage.prototype.serializeAs_EmotePlayMassiveMessage = function(param1) {
    this.serializeAs_EmotePlayAbstractMessage(param1);
    param1.writeShort(this.actorIds.length);
    var _loc2_ = 0;
    while (_loc2_ < this.actorIds.length) {
        param1.writeInt(this.actorIds[_loc2_]);
        _loc2_++;
    }
};

EmotePlayMassiveMessage.prototype.deserializeAs_EmotePlayMassiveMessage = function(param1) {
    var _loc4_ = 0;
    this.deserializeAs_EmotePlayAbstractMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
        this.actorIds.push(_loc4_);
        _loc3_++;
    }
};

EmotePlayMassiveMessage.prototype.getMessageId = function() {
    return 5691;
};

EmotePlayMassiveMessage.prototype.getClassName = function() {
    return 'EmotePlayMassiveMessage';
};

module.exports.id = 5691;
module.exports.class = EmotePlayMassiveMessage;
module.exports.getInstance = function() {
    return new EmotePlayMassiveMessage;
};