var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ServerSessionConstant = require('../../../types/game/approach/server-session-constant.js').ServerSessionConstant;

var ServerSessionConstantsMessage = function() {
    this.variables = [];
};

require('util').inherits(ServerSessionConstantsMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ServerSessionConstantsMessage();
};

ServerSessionConstantsMessage.prototype.serialize = function(output) {
    this.serializeAs_ServerSessionConstantsMessage(output);
};

ServerSessionConstantsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ServerSessionConstantsMessage(input);
};

ServerSessionConstantsMessage.prototype.serializeAs_ServerSessionConstantsMessage = function(param1) {
    param1.writeShort(this.variables.length);
    var _loc2_ = 0;
    while (_loc2_ < this.variables.length) {
        param1.writeShort((this.variables[_loc2_]).getTypeId());
        (this.variables[_loc2_]).serialize(param1);
        _loc2_++;
    }
};

ServerSessionConstantsMessage.prototype.deserializeAs_ServerSessionConstantsMessage = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
        _loc5_ = ProtocolTypeManager.getInstance(ServerSessionConstant, _loc4_);
        _loc5_.deserialize(param1);
        this.variables.push(_loc5_);
        _loc3_++;
    }
};

ServerSessionConstantsMessage.prototype.getMessageId = function() {
    return 6434;
};

ServerSessionConstantsMessage.prototype.getClassName = function() {
    return 'ServerSessionConstantsMessage';
};

module.exports.id = 6434;
module.exports.ServerSessionConstantsMessage = ServerSessionConstantsMessage;