var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PaddockInformations = require('../../../../../types/game/paddock/paddock-informations.js').class;

var PaddockPropertiesMessage = module.exports = function() {
    this.properties = new PaddockInformations();

    return this;
};

require('util').inherits(PaddockPropertiesMessage, d2com.NetworkMessage.class);

PaddockPropertiesMessage.prototype.serialize = function(output) {
    this.serializeAs_PaddockPropertiesMessage(output);
};

PaddockPropertiesMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockPropertiesMessage(input);
};

PaddockPropertiesMessage.prototype.serializeAs_PaddockPropertiesMessage = function(param1) {
    param1.writeShort(this.properties.getTypeId());
    this.properties.serialize(param1);
};

PaddockPropertiesMessage.prototype.deserializeAs_PaddockPropertiesMessage = function(param1) {
    var _loc2_ = param1.readUnsignedShort();
    this.properties = ProtocolTypeManager.getInstance(PaddockInformations, _loc2_);
    this.properties.deserialize(param1);
};

PaddockPropertiesMessage.prototype.getMessageId = function() {
    return 5824;
};

PaddockPropertiesMessage.prototype.getClassName = function() {
    return 'PaddockPropertiesMessage';
};

module.exports.id = 5824;