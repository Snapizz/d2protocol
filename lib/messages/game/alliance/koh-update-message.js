var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var KohUpdateMessage = function() {
  this.alliances = [];
  this.allianceNbMembers = [];
  this.allianceRoundWeigth = [];
  this.allianceMatchScore = [];
  this.allianceMapWinner;
  this.allianceMapWinnerScore = 0;
  this.allianceMapMyAllianceScore = 0;
  this.nextTickTime = 0;
};

util.inherits(KohUpdateMessage, BaseMessage);

KohUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_KohUpdateMessage(output);
};

KohUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KohUpdateMessage(input);
};

KohUpdateMessage.prototype.serializeAs_KohUpdateMessage = function(output) {
  output.writeShort(this.alliances.length);
  var _i1;
  while (_i1 < this.alliances.length) {
    (this.alliances[_i1]).serializeAs_AllianceInformations(output);
    _i1++;
  };
  output.writeShort(this.allianceNbMembers.length);
  var _i2;
  while (_i2 < this.allianceNbMembers.length) {
    if (this.allianceNbMembers[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.allianceNbMembers[_i2]) + ") on element 2 (starting at 1) of allianceNbMembers.")));
    };
    output.writeVarShort(this.allianceNbMembers[_i2]);
    _i2++;
  };
  output.writeShort(this.allianceRoundWeigth.length);
  var _i3;
  while (_i3 < this.allianceRoundWeigth.length) {
    if (this.allianceRoundWeigth[_i3] < 0) {
      throw (new Error((("Forbidden value (" + this.allianceRoundWeigth[_i3]) + ") on element 3 (starting at 1) of allianceRoundWeigth.")));
    };
    output.writeVarInt(this.allianceRoundWeigth[_i3]);
    _i3++;
  };
  output.writeShort(this.allianceMatchScore.length);
  var _i4;
  while (_i4 < this.allianceMatchScore.length) {
    if (this.allianceMatchScore[_i4] < 0) {
      throw (new Error((("Forbidden value (" + this.allianceMatchScore[_i4]) + ") on element 4 (starting at 1) of allianceMatchScore.")));
    };
    output.writeByte(this.allianceMatchScore[_i4]);
    _i4++;
  };
  this.allianceMapWinner.serializeAs_BasicAllianceInformations(output);
  if (this.allianceMapWinnerScore < 0) {
    throw (new Error((("Forbidden value (" + this.allianceMapWinnerScore) + ") on element allianceMapWinnerScore.")));
  };
  output.writeVarInt(this.allianceMapWinnerScore);
  if (this.allianceMapMyAllianceScore < 0) {
    throw (new Error((("Forbidden value (" + this.allianceMapMyAllianceScore) + ") on element allianceMapMyAllianceScore.")));
  };
  output.writeVarInt(this.allianceMapMyAllianceScore);
  if ((((this.nextTickTime < 0)) || ((this.nextTickTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.nextTickTime) + ") on element nextTickTime.")));
  };
  output.writeDouble(this.nextTickTime);
};

KohUpdateMessage.prototype.deserializeAs_KohUpdateMessage = function(input) {
  var _item1;
  var _val2;
  var _val3;
  var _val4;
  var _alliancesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _alliancesLen) {
    _item1 = new AllianceInformations();
    _item1.deserialize(input);
    this.alliances.push(_item1);
    _i1++;
  };
  var _allianceNbMembersLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _allianceNbMembersLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of allianceNbMembers.")));
    };
    this.allianceNbMembers.push(_val2);
    _i2++;
  };
  var _allianceRoundWeigthLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _allianceRoundWeigthLen) {
    _val3 = input.readVarUhInt();
    if (_val3 < 0) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of allianceRoundWeigth.")));
    };
    this.allianceRoundWeigth.push(_val3);
    _i3++;
  };
  var _allianceMatchScoreLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _allianceMatchScoreLen) {
    _val4 = input.readByte();
    if (_val4 < 0) {
      throw (new Error((("Forbidden value (" + _val4) + ") on elements of allianceMatchScore.")));
    };
    this.allianceMatchScore.push(_val4);
    _i4++;
  };
  this.allianceMapWinner = new BasicAllianceInformations();
  this.allianceMapWinner.deserialize(input);
  this.allianceMapWinnerScore = input.readVarUhInt();
  if (this.allianceMapWinnerScore < 0) {
    throw (new Error((("Forbidden value (" + this.allianceMapWinnerScore) + ") on element of KohUpdateMessage.allianceMapWinnerScore.")));
  };
  this.allianceMapMyAllianceScore = input.readVarUhInt();
  if (this.allianceMapMyAllianceScore < 0) {
    throw (new Error((("Forbidden value (" + this.allianceMapMyAllianceScore) + ") on element of KohUpdateMessage.allianceMapMyAllianceScore.")));
  };
  this.nextTickTime = input.readDouble();
  if ((((this.nextTickTime < 0)) || ((this.nextTickTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.nextTickTime) + ") on element of KohUpdateMessage.nextTickTime.")));
  };
};

KohUpdateMessage.prototype.getMessageId = function() {
  return 6439;
};

KohUpdateMessage.prototype.getClassName = function() {
  return 'KohUpdateMessage';
};

module.exports.id = 6439;
module.exports.class = KohUpdateMessage;