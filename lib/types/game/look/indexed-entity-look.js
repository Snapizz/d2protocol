var IndexedEntityLook = module.exports = function() {
    this.look = new EntityLook();
    this.index = 0;

    return this;
};

IndexedEntityLook.prototype.serialize = function(output) {
    this.serializeAs_IndexedEntityLook(output);
};

IndexedEntityLook.prototype.deserialize = function(input) {
    this.deserializeAs_IndexedEntityLook(input);
};

IndexedEntityLook.prototype.serializeAs_IndexedEntityLook = function(param1) {
    this.look.serializeAs_EntityLook(param1);
    if (this.index < 0) {
        throw new Error("Forbidden value (" + this.index + ") on element index.");
    } else {
        param1.writeByte(this.index);
        return;
    }
};

IndexedEntityLook.prototype.deserializeAs_IndexedEntityLook = function(param1) {
    this.look = new EntityLook();
    this.look.deserialize(param1);
    this.index = param1.readByte();
    if (this.index < 0) {
        throw new Error("Forbidden value (" + this.index + ") on element of IndexedEntityLook.index.");
    } else {
        return;
    }
};

IndexedEntityLook.prototype.getTypeId = function() {
    return 405;
};

IndexedEntityLook.prototype.getClassName = function() {
    return 'IndexedEntityLook';
};

module.exports.id = 405;