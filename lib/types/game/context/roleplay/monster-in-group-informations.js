var MonsterInGroupInformations = module.exports = function() {
    this.look = new EntityLook();

    return this;
};

require('util').inherits(MonsterInGroupInformations, require('./monster-in-group-light-informations.js'));

MonsterInGroupInformations.prototype.serialize = function(output) {
    this.serializeAs_MonsterInGroupInformations(output);
};

MonsterInGroupInformations.prototype.deserialize = function(input) {
    this.deserializeAs_MonsterInGroupInformations(input);
};

MonsterInGroupInformations.prototype.serializeAs_MonsterInGroupInformations = function(param1) {
    this.serializeAs_MonsterInGroupLightInformations(param1);
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