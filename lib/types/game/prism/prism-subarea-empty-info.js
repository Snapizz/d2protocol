var PrismSubareaEmptyInfo = function() {
  this.subAreaId = 0;
  this.allianceId = 0;
};



PrismSubareaEmptyInfo.prototype.serialize = function(output) {
  this.serializeAs_PrismSubareaEmptyInfo(output);
};

PrismSubareaEmptyInfo.prototype.deserialize = function(input) {
  this.deserializeAs_PrismSubareaEmptyInfo(input);
};

PrismSubareaEmptyInfo.prototype.serializeAs_PrismSubareaEmptyInfo = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element allianceId.")));
  };
  output.writeVarInt(this.allianceId);
};

PrismSubareaEmptyInfo.prototype.deserializeAs_PrismSubareaEmptyInfo = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismSubareaEmptyInfo.subAreaId.")));
  };
  this.allianceId = input.readVarUhInt();
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element of PrismSubareaEmptyInfo.allianceId.")));
  };
};

PrismSubareaEmptyInfo.prototype.getTypeId = function() {
  return 438;
};

PrismSubareaEmptyInfo.prototype.getClassName = function() {
  return 'PrismSubareaEmptyInfo';
};

module.exports.id = 438;
module.exports.class = PrismSubareaEmptyInfo;