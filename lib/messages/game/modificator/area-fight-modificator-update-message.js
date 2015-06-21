var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AreaFightModificatorUpdateMessage = module.exports = function() {
    this.spellPairId = 0;

    return this;
};

require('util').inherits(AreaFightModificatorUpdateMessage, d2com.NetworkMessage.class);

AreaFightModificatorUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_AreaFightModificatorUpdateMessage(output);
};

AreaFightModificatorUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AreaFightModificatorUpdateMessage(input);
};

AreaFightModificatorUpdateMessage.prototype.serializeAs_AreaFightModificatorUpdateMessage = function(param1) {
    param1.writeInt(this.spellPairId);
};

AreaFightModificatorUpdateMessage.prototype.deserializeAs_AreaFightModificatorUpdateMessage = function(param1) {
    this.spellPairId = param1.readInt();
};

AreaFightModificatorUpdateMessage.prototype.getMessageId = function() {
    return 6493;
};

AreaFightModificatorUpdateMessage.prototype.getClassName = function() {
    return 'AreaFightModificatorUpdateMessage';
};

module.exports.id = 6493;