var TaxCollectorInformations = function() {
  this.uniqueId = 0;
  this.firtNameId = 0;
  this.lastNameId = 0;
  this.additionalInfos;
  this.worldX = 0;
  this.worldY = 0;
  this.subAreaId = 0;
  this.state = 0;
  this.look;
  this.complements = [];
};



TaxCollectorInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorInformations(output);
};

TaxCollectorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorInformations(input);
};

TaxCollectorInformations.prototype.serializeAs_TaxCollectorInformations = function(output) {
  output.writeInt(this.uniqueId);
  if (this.firtNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firtNameId) + ") on element firtNameId.")));
  };
  output.writeVarShort(this.firtNameId);
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element lastNameId.")));
  };
  output.writeVarShort(this.lastNameId);
  this.additionalInfos.serializeAs_AdditionalTaxCollectorInformations(output);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  output.writeByte(this.state);
  this.look.serializeAs_EntityLook(output);
  output.writeShort(this.complements.length);
  var _i10;
  while (_i10 < this.complements.length) {
    output.writeShort((this.complements[_i10]).getTypeId());
    (this.complements[_i10]).serialize(output);
    _i10++;
  };
};

TaxCollectorInformations.prototype.deserializeAs_TaxCollectorInformations = function(input) {
  var _id10;
  var _item10;
  this.uniqueId = input.readInt();
  this.firtNameId = input.readVarUhShort();
  if (this.firtNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firtNameId) + ") on element of TaxCollectorInformations.firtNameId.")));
  };
  this.lastNameId = input.readVarUhShort();
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element of TaxCollectorInformations.lastNameId.")));
  };
  this.additionalInfos = new AdditionalTaxCollectorInformations();
  this.additionalInfos.deserialize(input);
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of TaxCollectorInformations.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of TaxCollectorInformations.worldY.")));
  };
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of TaxCollectorInformations.subAreaId.")));
  };
  this.state = input.readByte();
  if (this.state < 0) {
    throw (new Error((("Forbidden value (" + this.state) + ") on element of TaxCollectorInformations.state.")));
  };
  this.look = new EntityLook();
  this.look.deserialize(input);
  var _complementsLen = input.readUnsignedShort();
  var _i10;
  while (_i10 < _complementsLen) {
    _id10 = input.readUnsignedShort();
    _item10 = ProtocolTypeManager.getInstance(TaxCollectorComplementaryInformations, _id10);
    _item10.deserialize(input);
    this.complements.push(_item10);
    _i10++;
  };
};

TaxCollectorInformations.prototype.getTypeId = function() {
  return 167;
};

TaxCollectorInformations.prototype.getClassName = function() {
  return 'TaxCollectorInformations';
};

module.exports.id = 167;
module.exports.class = TaxCollectorInformations;