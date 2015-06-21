var MonsterInGroupInformations = function() {
    this.look = new EntityLook();
};

require('util').inherits(MonsterInGroupInformations, require('./monster-in-group-light-informations.js').class);

MonsterInGroupInformations.prototype.serialize = function(output) {
    this.serializeAs_MonsterInGroupInformations(output);
};

MonsterInGroupInformations.prototype.deserialize = function(input) {
    this.deserializeAs_MonsterInGroupInformations(input);
};

MonsterInGroupInformations.prototype.serializeAs_MonsterInGroupInformations = function(param1) {
    this.serializeAs_MonsterInGroupLightInformationsAs_MonsterInGroupLightInformations(param1);
    this.look.serializeAs_EntityLook(param1);
};

MonsterInGroupInformations.prototype.deserializeAs_MonsterInGroupInformations = function(param1) {
    this.deserializeAs_MonsterInGroupLightInformations(param1);
    this.look = new EntityLook();
    this.look.deserialize(param1);
};

MonsterInGroupInformations.prototype.getTypeId = function() {
    return 144;
};

MonsterInGroupInformations.prototype.getClassName = function() {
    return 'MonsterInGroupInformations';
};

module.exports.id = 144;
module.exports.class = MonsterInGroupInformations;
module.exports.getInstance = function() {
    return new MonsterInGroupInformations;
};