var GameServerInformations = function() {
  this.id = 0;
  this.status = 1;
  this.completion = 0;
  this.isSelectable = false;
  this.charactersCount = 0;
  this.date = 0;
};



GameServerInformations.prototype.serialize = function(output) {
  this.serializeAs_GameServerInformations(output);
};

GameServerInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameServerInformations(input);
};

GameServerInformations.prototype.serializeAs_GameServerInformations = function(param1) {
  if (this.id < 0 || this.id > 65535) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeShort(this.id);
    param1.writeByte(this.status);
    param1.writeByte(this.completion);
    param1.writeBoolean(this.isSelectable);
    if (this.charactersCount < 0) {
      throw new Error("Forbidden value (" + this.charactersCount + ") on element charactersCount.");
    } else {
      param1.writeByte(this.charactersCount);
      if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.date + ") on element date.");
      } else {
        param1.writeDouble(this.date);
        return;
      }
    }
  }
};

GameServerInformations.prototype.deserializeAs_GameServerInformations = function(param1) {
  this.id = param1.readUnsignedShort();
  if (this.id < 0 || this.id > 65535) {
    throw new Error("Forbidden value (" + this.id + ") on element of GameServerInformations.id.");
  } else {
    this.status = param1.readByte();
    if (this.status < 0) {
      throw new Error("Forbidden value (" + this.status + ") on element of GameServerInformations.status.");
    } else {
      this.completion = param1.readByte();
      if (this.completion < 0) {
        throw new Error("Forbidden value (" + this.completion + ") on element of GameServerInformations.completion.");
      } else {
        this.isSelectable = param1.readBoolean();
        this.charactersCount = param1.readByte();
        if (this.charactersCount < 0) {
          throw new Error("Forbidden value (" + this.charactersCount + ") on element of GameServerInformations.charactersCount.");
        } else {
          this.date = param1.readDouble();
          if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.date + ") on element of GameServerInformations.date.");
          } else {
            return;
          }
        }
      }
    }
  }
};

GameServerInformations.prototype.getTypeId = function() {
  return 25;
};

GameServerInformations.prototype.getClassName = function() {
  return 'GameServerInformations';
};

module.exports.id = 25;
module.exports.class = GameServerInformations;
module.exports.getInstance = function() {
  return new GameServerInformations();
};