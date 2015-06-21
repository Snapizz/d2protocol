var SubEntity = function() {
    this.bindingPointCategory = 0;
    this.bindingPointIndex = 0;
    this.subEntityLook = new EntityLook();
};

SubEntity.prototype.serialize = function(output) {
    this.serializeAs_SubEntity(output);
};

SubEntity.prototype.deserialize = function(input) {
    this.deserializeAs_SubEntity(input);
};

SubEntity.prototype.serializeAs_SubEntity = function(param1) {
    param1.writeByte(this.bindingPointCategory);
    if (this.bindingPointIndex < 0) {
        throw new Error("Forbidden value (" + this.bindingPointIndex + ") on element bindingPointIndex.");
    } else {
        param1.writeByte(this.bindingPointIndex);
        this.subEntityLook.serializeAs_EntityLook(param1);
        return;
    }
};

SubEntity.prototype.deserializeAs_SubEntity = function(param1) {
    this.bindingPointCategory = param1.readByte();
    if (this.bindingPointCategory < 0) {
        throw new Error("Forbidden value (" + this.bindingPointCategory + ") on element of SubEntity.bindingPointCategory.");
    } else {
        this.bindingPointIndex = param1.readByte();
        if (this.bindingPointIndex < 0) {
            throw new Error("Forbidden value (" + this.bindingPointIndex + ") on element of SubEntity.bindingPointIndex.");
        } else {
            this.subEntityLook = new EntityLook();
            this.subEntityLook.deserialize(param1);
            return;
        }
    }
};

SubEntity.prototype.getTypeId = function() {
    return 54;
};

SubEntity.prototype.getClassName = function() {
    return 'SubEntity';
};

module.exports.id = 54;
module.exports.class = SubEntity;
module.exports.getInstance = function() {
    return new SubEntity;
};