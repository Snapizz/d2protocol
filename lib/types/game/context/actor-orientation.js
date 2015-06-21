var ActorOrientation = function() {
    this.id = 0;
    this.direction = 1;
};

ActorOrientation.prototype.serialize = function(output) {
    this.serializeAs_ActorOrientation(output);
};

ActorOrientation.prototype.deserialize = function(input) {
    this.deserializeAs_ActorOrientation(input);
};

ActorOrientation.prototype.serializeAs_ActorOrientation = function(param1) {
    param1.writeInt(this.id);
    param1.writeByte(this.direction);
};

ActorOrientation.prototype.deserializeAs_ActorOrientation = function(param1) {
    this.id = param1.readInt();
    this.direction = param1.readByte();
    if (this.direction < 0) {
        throw new Error("Forbidden value (" + this.direction + ") on element of ActorOrientation.direction.");
    } else {
        return;
    }
};

ActorOrientation.prototype.getTypeId = function() {
    return 353;
};

ActorOrientation.prototype.getClassName = function() {
    return 'ActorOrientation';
};

module.exports.id = 353;
module.exports.class = ActorOrientation;
module.exports.getInstance = function() {
    return new ActorOrientation;
};