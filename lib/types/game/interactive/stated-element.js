var StatedElement = module.exports = function() {
    this.elementId = 0;
    this.elementCellId = 0;
    this.elementState = 0;

    return this;
};

StatedElement.prototype.serialize = function(output) {
    this.serializeAs_StatedElement(output);
};

StatedElement.prototype.deserialize = function(input) {
    this.deserializeAs_StatedElement(input);
};

StatedElement.prototype.serializeAs_StatedElement = function(param1) {
    if (this.elementId < 0) {
        throw new Error("Forbidden value (" + this.elementId + ") on element elementId.");
    } else {
        param1.writeInt(this.elementId);
        if (this.elementCellId < 0 || this.elementCellId > 559) {
            throw new Error("Forbidden value (" + this.elementCellId + ") on element elementCellId.");
        } else {
            param1.writeVarShort(this.elementCellId);
            if (this.elementState < 0) {
                throw new Error("Forbidden value (" + this.elementState + ") on element elementState.");
            } else {
                param1.writeVarInt(this.elementState);
                return;
            }
        }
    }
};

StatedElement.prototype.deserializeAs_StatedElement = function(param1) {
    this.elementId = param1.readInt();
    if (this.elementId < 0) {
        throw new Error("Forbidden value (" + this.elementId + ") on element of StatedElement.elementId.");
    } else {
        this.elementCellId = param1.readVarUhShort();
        if (this.elementCellId < 0 || this.elementCellId > 559) {
            throw new Error("Forbidden value (" + this.elementCellId + ") on element of StatedElement.elementCellId.");
        } else {
            this.elementState = param1.readVarUhInt();
            if (this.elementState < 0) {
                throw new Error("Forbidden value (" + this.elementState + ") on element of StatedElement.elementState.");
            } else {
                return;
            }
        }
    }
};

StatedElement.prototype.getTypeId = function() {
    return 108;
};

StatedElement.prototype.getClassName = function() {
    return 'StatedElement';
};

module.exports.id = 108;