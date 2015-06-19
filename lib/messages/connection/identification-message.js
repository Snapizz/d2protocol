var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IdentificationMessage = function() {
  this.version;
  this.lang = "";
  this.credentials = [];
  this.serverId = 0;
  this.autoconnect = false;
  this.useCertificate = false;
  this.useLoginToken = false;
  this.sessionOptionalSalt = 0;
};

util.inherits(IdentificationMessage, BaseMessage);

IdentificationMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationMessage(output);
};

IdentificationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationMessage(input);
};

IdentificationMessage.prototype.serializeAs_IdentificationMessage = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.autoconnect);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.useCertificate);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.useLoginToken);
  output.writeByte(_box0);
  this.version.serializeAs_VersionExtended(output);
  output.writeUTF(this.lang);
  output.writeShort(this.credentials.length);
  var _i3;
  while (_i3 < this.credentials.length) {
    output.writeByte(this.credentials[_i3]);
    _i3++;
  };
  output.writeShort(this.serverId);
  if ((((this.sessionOptionalSalt < -9007199254740992)) || ((this.sessionOptionalSalt > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.sessionOptionalSalt) + ") on element sessionOptionalSalt.")));
  };
  output.writeDouble(this.sessionOptionalSalt);
};

IdentificationMessage.prototype.deserializeAs_IdentificationMessage = function(input) {
  var _val3;
  var _box0 = input.readByte();
  this.autoconnect = BooleanByteWrapper.getFlag(_box0, 0);
  this.useCertificate = BooleanByteWrapper.getFlag(_box0, 1);
  this.useLoginToken = BooleanByteWrapper.getFlag(_box0, 2);
  this.version = new VersionExtended();
  this.version.deserialize(input);
  this.lang = input.readUTF();
  var _credentialsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _credentialsLen) {
    _val3 = input.readByte();
    this.credentials.push(_val3);
    _i3++;
  };
  this.serverId = input.readShort();
  this.sessionOptionalSalt = input.readDouble();
  if ((((this.sessionOptionalSalt < -9007199254740992)) || ((this.sessionOptionalSalt > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.sessionOptionalSalt) + ") on element of IdentificationMessage.sessionOptionalSalt.")));
  };
};

IdentificationMessage.prototype.getMessageId = function() {
  return 4;
};

IdentificationMessage.prototype.getClassName = function() {
  return 'IdentificationMessage';
};

module.exports.id = 4;
module.exports.class = IdentificationMessage;