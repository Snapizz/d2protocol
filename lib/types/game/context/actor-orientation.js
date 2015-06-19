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

ActorOrientation.prototype.serializeAs_ActorOrientation = function(output) {
  output.writeInt(this.id);
  output.writeByte(this.direction);
};

ActorOrientation.prototype.deserializeAs_ActorOrientation = function(input) {
  this.id = input.readInt();
  this.direction = input.readByte();
  if (this.direction < 0) {
    throw (new Error((("Forbidden value (" + this.direction) + ") on element of ActorOrientation.direction.")));
  };
};

ActorOrientation.prototype.getTypeId = function() {
  return 353;
};

ActorOrientation.prototype.getClassName = function() {
  return 'ActorOrientation';
};

module.exports.id = 353;
module.exports.class = ActorOrientation;