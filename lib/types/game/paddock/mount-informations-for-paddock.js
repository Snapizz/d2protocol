var MountInformationsForPaddock = function() {
  this.modelId = 0;
  this.name = "";
  this.ownerName = "";
};



MountInformationsForPaddock.prototype.serialize = function(output) {
  this.serializeAs_MountInformationsForPaddock(output);
};

MountInformationsForPaddock.prototype.deserialize = function(input) {
  this.deserializeAs_MountInformationsForPaddock(input);
};

MountInformationsForPaddock.prototype.serializeAs_MountInformationsForPaddock = function(output) {
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element modelId.")));
  };
  output.writeByte(this.modelId);
  output.writeUTF(this.name);
  output.writeUTF(this.ownerName);
};

MountInformationsForPaddock.prototype.deserializeAs_MountInformationsForPaddock = function(input) {
  this.modelId = input.readByte();
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element of MountInformationsForPaddock.modelId.")));
  };
  this.name = input.readUTF();
  this.ownerName = input.readUTF();
};

MountInformationsForPaddock.prototype.getTypeId = function() {
  return 184;
};

MountInformationsForPaddock.prototype.getClassName = function() {
  return 'MountInformationsForPaddock';
};

module.exports.id = 184;
module.exports.class = MountInformationsForPaddock;