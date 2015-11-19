/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var SkillActionDescription = require('../../../interactive/skill/skill-action-description');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var JobDescription = (function () {
    function JobDescription() {
        this.jobId = 0;
        this.skills = [];
    }
    JobDescription.prototype.getTypeId = function () {
        return JobDescription.ID;
    };
    JobDescription.prototype.reset = function () {
        this.jobId = 0;
        this.skills = [];
    };
    JobDescription.prototype.serialize = function (param1) {
        this.serializeAs_JobDescription(param1);
    };
    JobDescription.prototype.serializeAs_JobDescription = function (param1) {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
        param1.writeShort(this.skills.length);
        var _loc2_ = 0;
        while (_loc2_ < this.skills.length) {
            param1.writeShort((this.skills[_loc2_]).getTypeId());
            (this.skills[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    JobDescription.prototype.deserialize = function (param1) {
        this.deserializeAs_JobDescription(param1);
    };
    JobDescription.prototype.deserializeAs_JobDescription = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobDescription.jobId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(SkillActionDescription, _loc4_);
            _loc5_.deserialize(param1);
            this.skills.push(_loc5_);
            _loc3_++;
        }
    };
    JobDescription.ID = 101;
    return JobDescription;
})();
module.exports = JobDescription;
