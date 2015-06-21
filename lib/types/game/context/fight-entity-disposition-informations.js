var FightEntityDispositionInformations = module.exports = function() {
    this.carryingCharacterId = 0;

    return this;
};

require('util').inherits(FightEntityDispositionInformations, require('./entity-disposition-informations.js'));

FightEntityDispositionInformations.prototype.serialize = function(output) {
    this.serializeAs_FightEntityDispositionInformations(output);
};

FightEntityDispositionInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightEntityDispositionInformations(input);
};

FightEntityDispositionInformations.prototype.serializeAs_FightEntityDispositionInformations = function(param1) {
    this.serializeAs_EntityDispositionInformations(param1);
    param1.writeInt(this.carryingCharacterId);
};

FightEntityDispositionInformations.prototype.deserializeAs_FightEntityDispositionInformations = function(param1) {
    this.deserializeAs_EntityDispositionInformations(param1);
    this.carryingCharacterId = param1.readInt();
};

FightEntityDispositionInformations.prototype.getTypeId = function() {
    return 217;
};

FightEntityDispositionInformations.prototype.getClassName = function() {
    return 'FightEntityDispositionInformations';
};

module.exports.id = 217;