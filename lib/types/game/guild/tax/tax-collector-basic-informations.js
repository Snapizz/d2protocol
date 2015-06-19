var TaxCollectorBasicInformations = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
};



TaxCollectorBasicInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorBasicInformations(output);
};

TaxCollectorBasicInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorBasicInformations(input);
};

TaxCollectorBasicInformations.prototype.serializeAs_TaxCollectorBasicInformations = function(output) {
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element firstNameId.")));
  };
  output.writeVarShort(this.firstNameId);
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element lastNameId.")));
  };
  output.writeVarShort(this.lastNameId);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeInt(this.mapId);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
};

TaxCollectorBasicInformations.prototype.deserializeAs_TaxCollectorBasicInformations = function(input) {
  this.firstNameId = input.readVarUhShort();
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element of TaxCollectorBasicInformations.firstNameId.")));
  };
  this.lastNameId = input.readVarUhShort();
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element of TaxCollectorBasicInformations.lastNameId.")));
  };
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of TaxCollectorBasicInformations.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of TaxCollectorBasicInformations.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of TaxCollectorBasicInformations.subAreaId.")));
  };
};

TaxCollectorBasicInformations.prototype.getTypeId = function() {
  return 96;
};

TaxCollectorBasicInformations.prototype.getClassName = function() {
  return 'TaxCollectorBasicInformations';
};

module.exports.id = 96;
module.exports.class = TaxCollectorBasicInformations;