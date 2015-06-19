var BaseMessage = require('./tax-collector-complementary-informations.js').class,
  util = require('util');

var TaxCollectorLootInformations = function() {
  this.kamas = 0;
  this.experience = 0;
  this.pods = 0;
  this.itemsValue = 0;
};

util.inherits(TaxCollectorLootInformations, BaseMessage);

TaxCollectorLootInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorLootInformations(output);
};

TaxCollectorLootInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorLootInformations(input);
};

TaxCollectorLootInformations.prototype.serializeAs_TaxCollectorLootInformations = function(output) {
  this.serializeAs_TaxCollectorComplementaryInformations(output);
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element kamas.")));
  };
  output.writeVarInt(this.kamas);
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element experience.")));
  };
  output.writeVarLong(this.experience);
  if (this.pods < 0) {
    throw (new Error((("Forbidden value (" + this.pods) + ") on element pods.")));
  };
  output.writeVarInt(this.pods);
  if (this.itemsValue < 0) {
    throw (new Error((("Forbidden value (" + this.itemsValue) + ") on element itemsValue.")));
  };
  output.writeVarInt(this.itemsValue);
};

TaxCollectorLootInformations.prototype.deserializeAs_TaxCollectorLootInformations = function(input) {
  this.deserialize(input);
  this.kamas = input.readVarUhInt();
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element of TaxCollectorLootInformations.kamas.")));
  };
  this.experience = input.readVarUhLong();
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element of TaxCollectorLootInformations.experience.")));
  };
  this.pods = input.readVarUhInt();
  if (this.pods < 0) {
    throw (new Error((("Forbidden value (" + this.pods) + ") on element of TaxCollectorLootInformations.pods.")));
  };
  this.itemsValue = input.readVarUhInt();
  if (this.itemsValue < 0) {
    throw (new Error((("Forbidden value (" + this.itemsValue) + ") on element of TaxCollectorLootInformations.itemsValue.")));
  };
};

TaxCollectorLootInformations.prototype.getTypeId = function() {
  return 372;
};

TaxCollectorLootInformations.prototype.getClassName = function() {
  return 'TaxCollectorLootInformations';
};

module.exports.id = 372;
module.exports.class = TaxCollectorLootInformations;