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

JobCrafterDirectoryEntryJobInfo.prototype.serializeAs_JobCrafterDirectoryEntryJobInfo = function(param1) {
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
  } else {
    param1.writeByte(this.jobId);
    if (this.jobLevel < 1 || this.jobLevel > 100) {
      throw new Error("Forbidden value (" + this.jobLevel + ") on element jobLevel.");
    } else {
      param1.writeByte(this.jobLevel);
      if (this.userDefinedParams < 0) {
        throw new Error("Forbidden value (" + this.userDefinedParams + ") on element userDefinedParams.");
      } else {
        param1.writeByte(this.userDefinedParams);
        if (this.minSlots < 0 || this.minSlots > 9) {
          throw new Error("Forbidden value (" + this.minSlots + ") on element minSlots.");
        } else {
          param1.writeByte(this.minSlots);
          return;
        }
      }
    }
  }
};

JobCrafterDirectoryEntryJobInfo.prototype.deserializeAs_JobCrafterDirectoryEntryJobInfo = function(param1) {
  this.jobId = param1.readByte();
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectoryEntryJobInfo.jobId.");
  } else {
    this.jobLevel = param1.readByte();
    if (this.jobLevel < 1 || this.jobLevel > 100) {
      throw new Error("Forbidden value (" + this.jobLevel + ") on element of JobCrafterDirectoryEntryJobInfo.jobLevel.");
    } else {
      this.userDefinedParams = param1.readByte();
      if (this.userDefinedParams < 0) {
        throw new Error("Forbidden value (" + this.userDefinedParams + ") on element of JobCrafterDirectoryEntryJobInfo.userDefinedParams.");
      } else {
        this.minSlots = param1.readByte();
        if (this.minSlots < 0 || this.minSlots > 9) {
          throw new Error("Forbidden value (" + this.minSlots + ") on element of JobCrafterDirectoryEntryJobInfo.minSlots.");
        } else {
          return;
        }
      }
    }
  }
};

JobCrafterDirectoryEntryJobInfo.prototype.getTypeId = function() {
  return 195;
};

JobCrafterDirectoryEntryJobInfo.prototype.getClassName = function() {
  return 'JobCrafterDirectoryEntryJobInfo';
};

module.exports.id = 195;
module.exports.class = JobCrafterDirectoryEntryJobInfo;