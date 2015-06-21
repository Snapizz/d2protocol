var KrosmasterFigure = module.exports = function() {
    this.uid = "";
    this.figure = 0;
    this.pedestal = 0;
    this.bound = false;

    return this;
};

KrosmasterFigure.prototype.serialize = function(output) {
    this.serializeAs_KrosmasterFigure(output);
};

KrosmasterFigure.prototype.deserialize = function(input) {
    this.deserializeAs_KrosmasterFigure(input);
};

KrosmasterFigure.prototype.serializeAs_KrosmasterFigure = function(param1) {
    param1.writeUTF(this.uid);
    if (this.figure < 0) {
        throw new Error("Forbidden value (" + this.figure + ") on element figure.");
    } else {
        param1.writeVarShort(this.figure);
        if (this.pedestal < 0) {
            throw new Error("Forbidden value (" + this.pedestal + ") on element pedestal.");
        } else {
            param1.writeVarShort(this.pedestal);
            param1.writeBoolean(this.bound);
            return;
        }
    }
};

KrosmasterFigure.prototype.deserializeAs_KrosmasterFigure = function(param1) {
    this.uid = param1.readUTF();
    this.figure = param1.readVarUhShort();
    if (this.figure < 0) {
        throw new Error("Forbidden value (" + this.figure + ") on element of KrosmasterFigure.figure.");
    } else {
        this.pedestal = param1.readVarUhShort();
        if (this.pedestal < 0) {
            throw new Error("Forbidden value (" + this.pedestal + ") on element of KrosmasterFigure.pedestal.");
        } else {
            this.bound = param1.readBoolean();
            return;
        }
    }
};

KrosmasterFigure.prototype.getTypeId = function() {
    return 397;
};

KrosmasterFigure.prototype.getClassName = function() {
    return 'KrosmasterFigure';
};

module.exports.id = 397;