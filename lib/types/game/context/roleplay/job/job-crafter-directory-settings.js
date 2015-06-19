var JobCrafterDirectorySettings = function() {
  this.jobId = 0;
  this.minSlot = 0;
  this.userDefinedParams = 0;
};



JobCrafterDirectorySettings.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectorySettings(output);
};

JobCrafterDirectorySettings.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectorySettings(input);
};

JobCrafterDirectorySettings.prototype.serializeAs_JobCrafterDirectorySettings = function(output) {
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element jobId.")));
  };
  output.writeByte(this.jobId);
  if ((((this.minSlot < 0)) || ((this.minSlot > 9)))) {
    throw (new Error((("Forbidden value (" + this.minSlot) + ") on element minSlot.")));
  };
  output.writeByte(this.minSlot);
  if (this.userDefinedParams < 0) {
    throw (new Error((("Forbidden value (" + this.userDefinedParams) + ") on element userDefinedParams.")));
  };
  output.writeByte(this.userDefinedParams);
};

JobCrafterDirectorySettings.prototype.deserializeAs_JobCrafterDirectorySettings = function(input) {
  this.jobId = input.readByte();
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element of JobCrafterDirectorySettings.jobId.")));
  };
  this.minSlot = input.readByte();
  if ((((this.minSlot < 0)) || ((this.minSlot > 9)))) {
    throw (new Error((("Forbidden value (" + this.minSlot) + ") on element of JobCrafterDirectorySettings.minSlot.")));
  };
  this.userDefinedParams = input.readByte();
  if (this.userDefinedParams < 0) {
    throw (new Error((("Forbidden value (" + this.userDefinedParams) + ") on element of JobCrafterDirectorySettings.userDefinedParams.")));
  };
};

JobCrafterDirectorySettings.prototype.getTypeId = function() {
  return 97;
};

JobCrafterDirectorySettings.prototype.getClassName = function() {
  return 'JobCrafterDirectorySettings';
};

module.exports.id = 97;
module.exports.class = JobCrafterDirectorySettings;