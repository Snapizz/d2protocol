var IdentifiedEntityDispositionInformations = function() {
    this.id = 0;
};

require('util').inherits(IdentifiedEntityDispositionInformations, require('./entity-disposition-informations.js').class);

IdentifiedEntityDispositionInformations.prototype.serialize = function(output) {
    this.serializeAs_IdentifiedEntityDispositionInformations(output);
};

IdentifiedEntityDispositionInformations.prototype.deserialize = function(input) {
    this.deserializeAs_IdentifiedEntityDispositionInformations(input);
};

IdentifiedEntityDispositionInformations.prototype.serializeAs_IdentifiedEntityDispositionInformations = function(param1) {
    this.serializeAs_EntityDispositionInformationsAs_EntityDispositionInformations(param1);
    param1.writeInt(this.id);
};

IdentifiedEntityDispositionInformations.prototype.deserializeAs_IdentifiedEntityDispositionInformations = function(param1) {
    this.deserializeAs_EntityDispositionInformations(param1);
    this.id = param1.readInt();
};

IdentifiedEntityDispositionInformations.prototype.getTypeId = function() {
    return 107;
};

IdentifiedEntityDispositionInformations.prototype.getClassName = function() {
    return 'IdentifiedEntityDispositionInformations';
};

module.exports.id = 107;
module.exports.class = IdentifiedEntityDispositionInformations;
module.exports.getInstance = function() {
    return new IdentifiedEntityDispositionInformations;
};