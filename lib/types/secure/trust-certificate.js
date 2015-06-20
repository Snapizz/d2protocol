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

TrustCertificate.prototype.serializeAs_TrustCertificate = function(param1) {
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeInt(this.id);
    param1.writeUTF(this.hash);
    return;
  }
};

TrustCertificate.prototype.deserializeAs_TrustCertificate = function(param1) {
  this.id = param1.readInt();
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element of TrustCertificate.id.");
  } else {
    this.hash = param1.readUTF();
    return;
  }
};

TrustCertificate.prototype.getTypeId = function() {
  return 377;
};

TrustCertificate.prototype.getClassName = function() {
  return 'TrustCertificate';
};

module.exports.id = 377;
module.exports.class = TrustCertificate;
module.exports.getInstance = function() {
  return new TrustCertificate();
};