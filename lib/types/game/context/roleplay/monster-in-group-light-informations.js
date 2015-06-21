var MonsterInGroupLightInformations = function() {
    this.creatureGenericId = 0;
    this.grade = 0;
};

module.exports = function() {
    return new MonsterInGroupLightInformations();
};

MonsterInGroupLightInformations.prototype.serialize = function(output) {
    this.serializeAs_MonsterInGroupLightInformations(output);
};

MonsterInGroupLightInformations.prototype.deserialize = function(input) {
    this.deserializeAs_MonsterInGroupLightInformations(input);
};

MonsterInGroupLightInformations.prototype.serializeAs_MonsterInGroupLightInformations = function(param1) {
    param1.writeInt(this.creatureGenericId);
    if (this.grade < 0) {
        throw new Error("Forbidden value (" + this.grade + ") on element grade.");
    } else {
        param1.writeByte(this.grade);
        return;
    }
};

MonsterInGroupLightInformations.prototype.deserializeAs_MonsterInGroupLightInformations = function(param1) {
    this.creatureGenericId = param1.readInt();
    this.grade = param1.readByte();
    if (this.grade < 0) {
        throw new Error("Forbidden value (" + this.grade + ") on element of MonsterInGroupLightInformations.grade.");
    } else {
        return;
    }
};

MonsterInGroupLightInformations.prototype.getTypeId = function() {
    return 395;
};

MonsterInGroupLightInformations.prototype.getClassName = function() {
    return 'MonsterInGroupLightInformations';
};

module.exports.id = 395;
module.exports.MonsterInGroupLightInformations = MonsterInGroupLightInformations;