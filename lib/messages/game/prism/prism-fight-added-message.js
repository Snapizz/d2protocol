var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PrismFightersInformation = require('../../../types/game/prism/prism-fighters-information.js').PrismFightersInformation;

var PrismFightAddedMessage = function() {
    this.fight = new PrismFightersInformation();
};

require('util').inherits(PrismFightAddedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PrismFightAddedMessage();
};

PrismFightAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismFightAddedMessage(output);
};

PrismFightAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismFightAddedMessage(input);
};

PrismFightAddedMessage.prototype.serializeAs_PrismFightAddedMessage = function(param1) {
    this.fight.serializeAs_PrismFightersInformation(param1);
};

PrismFightAddedMessage.prototype.deserializeAs_PrismFightAddedMessage = function(param1) {
    this.fight = new PrismFightersInformation();
    this.fight.deserialize(param1);
};

PrismFightAddedMessage.prototype.getMessageId = function() {
    return 6452;
};

PrismFightAddedMessage.prototype.getClassName = function() {
    return 'PrismFightAddedMessage';
};

module.exports.id = 6452;
module.exports.PrismFightAddedMessage = PrismFightAddedMessage;