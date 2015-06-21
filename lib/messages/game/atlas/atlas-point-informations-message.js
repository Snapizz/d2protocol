var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var AtlasPointsInformations = require('../../../types/game/context/roleplay/atlas-points-informations.js').class;

var AtlasPointInformationsMessage = module.exports = function() {
    this.type = new AtlasPointsInformations();

    return this;
};

require('util').inherits(AtlasPointInformationsMessage, d2com.NetworkMessage.class);

AtlasPointInformationsMessage.prototype.serialize = function(output) {
    this.serializeAs_AtlasPointInformationsMessage(output);
};

AtlasPointInformationsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AtlasPointInformationsMessage(input);
};

AtlasPointInformationsMessage.prototype.serializeAs_AtlasPointInformationsMessage = function(param1) {
    this.type.serializeAs_AtlasPointsInformations(param1);
};

AtlasPointInformationsMessage.prototype.deserializeAs_AtlasPointInformationsMessage = function(param1) {
    this.type = new AtlasPointsInformations();
    this.type.deserialize(param1);
};

AtlasPointInformationsMessage.prototype.getMessageId = function() {
    return 5956;
};

AtlasPointInformationsMessage.prototype.getClassName = function() {
    return 'AtlasPointInformationsMessage';
};

module.exports.id = 5956;