var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PrismFightersInformation = require('../../../types/game/prism/prism-fighters-information.js').class;

var PrismFightAddedMessage = function() {
    this.fight = new PrismFightersInformation();
};

require('util').inherits(PrismFightAddedMessage, d2com.NetworkMessage.class);

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
module.exports.class = PrismFightAddedMessage;
module.exports.getInstance = function() {
    return new PrismFightAddedMessage;
};