var JobCrafterDirectoryEntryJobInfo = function() {
  this.jobId = 0;
  this.jobLevel = 0;
  this.userDefinedParams = 0;
  this.minSlots = 0;
};



JobCrafterDirectoryEntryJobInfo.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryEntryJobInfo(output);
};

JobCrafterDirectoryEntryJobInfo.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryEntryJobInfo(input);
};

JobCrafterDirectoryEntryJobInfo.prototype.serializeAs_JobCrafterDirectoryEntryJobInfo = function(output) {
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element jobId.")));
  };
  output.writeByte(this.jobId);
  if ((((this.jobLevel < 1)) || ((this.jobLevel > 100)))) {
    throw (new Error((("Forbidden value (" + this.jobLevel) + ") on element jobLevel.")));
  };
  output.writeByte(this.jobLevel);
  if (this.userDefinedParams < 0) {
    throw (new Error((("Forbidden value (" + this.userDefinedParams) + ") on element userDefinedParams.")));
  };
  output.writeByte(this.userDefinedParams);
  if ((((this.minSlots < 0)) || ((this.minSlots > 9)))) {
    throw (new Error((("Forbidden value (" + this.minSlots) + ") on element minSlots.")));
  };
  output.writeByte(this.minSlots);
};

JobCrafterDirectoryEntryJobInfo.prototype.deserializeAs_JobCrafterDirectoryEntryJobInfo = function(input) {
  this.jobId = input.readByte();
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element of JobCrafterDirectoryEntryJobInfo.jobId.")));
  };
  this.jobLevel = input.readByte();
  if ((((this.jobLevel < 1)) || ((this.jobLevel > 100)))) {
    throw (new Error((("Forbidden value (" + this.jobLevel) + ") on element of JobCrafterDirectoryEntryJobInfo.jobLevel.")));
  };
  this.userDefinedParams = input.readByte();
  if (this.userDefinedParams < 0) {
    throw (new Error((("Forbidden value (" + this.userDefinedParams) + ") on element of JobCrafterDirectoryEntryJobInfo.userDefinedParams.")));
  };
  this.minSlots = input.readByte();
  if ((((this.minSlots < 0)) || ((this.minSlots > 9)))) {
    throw (new Error((("Forbidden value (" + this.minSlots) + ") on element of JobCrafterDirectoryEntryJobInfo.minSlots.")));
  };
};

JobCrafterDirectoryEntryJobInfo.prototype.getTypeId = function() {
  return 195;
};

JobCrafterDirectoryEntryJobInfo.prototype.getClassName = function() {
  return 'JobCrafterDirectoryEntryJobInfo';
};

module.exports.id = 195;
module.exports.class = JobCrafterDirectoryEntryJobInfo;