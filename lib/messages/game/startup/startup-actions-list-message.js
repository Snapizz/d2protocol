var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var StartupActionAddObject = require('../../../types/game/startup/startup-action-add-object.js').class;

var StartupActionsListMessage = function() {
    this.actions = [];
};

require('util').inherits(StartupActionsListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new StartupActionsListMessage();
};

StartupActionsListMessage.prototype.serialize = function(output) {
    this.serializeAs_StartupActionsListMessage(output);
};

StartupActionsListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StartupActionsListMessage(input);
};

StartupActionsListMessage.prototype.serializeAs_StartupActionsListMessage = function(param1) {
    param1.writeShort(this.actions.length);
    var _loc2_ = 0;
    while (_loc2_ < this.actions.length) {
        (this.actions[_loc2_]).serializeAs_StartupActionAddObject(param1);
        _loc2_++;
    }
};

StartupActionsListMessage.prototype.deserializeAs_StartupActionsListMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new StartupActionAddObject();
        _loc4_.deserialize(param1);
        this.actions.push(_loc4_);
        _loc3_++;
    }
};

StartupActionsListMessage.prototype.getMessageId = function() {
    return 1301;
};

StartupActionsListMessage.prototype.getClassName = function() {
    return 'StartupActionsListMessage';
};

module.exports.id = 1301;
module.exports.StartupActionsListMessage = StartupActionsListMessage;