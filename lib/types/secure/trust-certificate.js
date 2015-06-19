var TrustCertificate = function() {
  this.id = 0;
  this.hash = "";
};



TrustCertificate.prototype.serialize = function(output) {
  this.serializeAs_TrustCertificate(output);
};

TrustCertificate.prototype.deserialize = function(input) {
  this.deserializeAs_TrustCertificate(input);
};

TrustCertificate.prototype.serializeAs_TrustCertificate = function(output) {
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeInt(this.id);
  output.writeUTF(this.hash);
};

TrustCertificate.prototype.deserializeAs_TrustCertificate = function(input) {
  this.id = input.readInt();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of TrustCertificate.id.")));
  };
  this.hash = input.readUTF();
};

TrustCertificate.prototype.getTypeId = function() {
  return 377;
};

TrustCertificate.prototype.getClassName = function() {
  return 'TrustCertificate';
};

module.exports.id = 377;
module.exports.class = TrustCertificate;