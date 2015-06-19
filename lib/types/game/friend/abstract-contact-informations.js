var AbstractContactInformations = function() {
  this.accountId = 0;
  this.accountName = "";
};



AbstractContactInformations.prototype.serialize = function(output) {
  this.serializeAs_AbstractContactInformations(output);
};

AbstractContactInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractContactInformations(input);
};

AbstractContactInformations.prototype.serializeAs_AbstractContactInformations = function(output) {
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
  output.writeUTF(this.accountName);
};

AbstractContactInformations.prototype.deserializeAs_AbstractContactInformations = function(input) {
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of AbstractContactInformations.accountId.")));
  };
  this.accountName = input.readUTF();
};

AbstractContactInformations.prototype.getTypeId = function() {
  return 380;
};

AbstractContactInformations.prototype.getClassName = function() {
  return 'AbstractContactInformations';
};

module.exports.id = 380;
module.exports.class = AbstractContactInformations;