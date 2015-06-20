var ContentPart = function() {
  this.id = "";
  this.state = 0;
};



ContentPart.prototype.serialize = function(output) {
  this.serializeAs_ContentPart(output);
};

ContentPart.prototype.deserialize = function(input) {
  this.deserializeAs_ContentPart(input);
};

ContentPart.prototype.serializeAs_ContentPart = function(output) {
  param1.writeUTF(this.id);
  param1.writeByte(this.state);
};

ContentPart.prototype.deserializeAs_ContentPart = function(input) {
  this.id = param1.readUTF();
  this.state = param1.readByte();
  if (this.state < 0) {
    throw new Error("Forbidden value (" + this.state + ") on element of ContentPart.state.");
  } else {
    return;
  }
};

ContentPart.prototype.getTypeId = function() {
  return 350;
};

ContentPart.prototype.getClassName = function() {
  return 'ContentPart';
};

module.exports.id = 350;
module.exports.class = ContentPart;