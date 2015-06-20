var MountClientData = function() {
  this.id = 0;
  this.model = 0;
  this.ancestor = [];
  this.behaviors = [];
  this.name = "";
  this.sex = false;
  this.ownerId = 0;
  this.experience = 0;
  this.experienceForLevel = 0;
  this.experienceForNextLevel = 0;
  this.level = 0;
  this.isRideable = false;
  this.maxPods = 0;
  this.isWild = false;
  this.stamina = 0;
  this.staminaMax = 0;
  this.maturity = 0;
  this.maturityForAdult = 0;
  this.energy = 0;
  this.energyMax = 0;
  this.serenity = 0;
  this.aggressivityMax = 0;
  this.serenityMax = 0;
  this.love = 0;
  this.loveMax = 0;
  this.fecondationTime = 0;
  this.isFecondationReady = false;
  this.boostLimiter = 0;
  this.boostMax = 0;
  this.reproductionCount = 0;
  this.reproductionCountMax = 0;
  this.effectList = [];
};



MountClientData.prototype.serialize = function(output) {
  this.serializeAs_MountClientData(output);
};

MountClientData.prototype.deserialize = function(input) {
  this.deserializeAs_MountClientData(input);
};

MountClientData.prototype.serializeAs_MountClientData = function(output) {
  var _loc2_ = 0;
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.sex);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isRideable);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isWild);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.isFecondationReady);
  param1.writeByte(_loc2_);
  if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeDouble(this.id);
    if (this.model < 0) {
      throw new Error("Forbidden value (" + this.model + ") on element model.");
    } else {
      param1.writeVarInt(this.model);
      param1.writeShort(this.ancestor.length);
      var _loc3_ = 0;
      while (_loc3_ < this.ancestor.length) {
        if (this.ancestor[_loc3_] < 0) {
          throw new Error("Forbidden value (" + this.ancestor[_loc3_] + ") on element 3 (starting at 1) of ancestor.");
        } else {
          param1.writeInt(this.ancestor[_loc3_]);
          _loc3_++;
          continue;
        }
      }
      param1.writeShort(this.behaviors.length);
      var _loc4_ = 0;
      while (_loc4_ < this.behaviors.length) {
        if (this.behaviors[_loc4_] < 0) {
          throw new Error("Forbidden value (" + this.behaviors[_loc4_] + ") on element 4 (starting at 1) of behaviors.");
        } else {
          param1.writeInt(this.behaviors[_loc4_]);
          _loc4_++;
          continue;
        }
      }
      param1.writeUTF(this.name);
      if (this.ownerId < 0) {
        throw new Error("Forbidden value (" + this.ownerId + ") on element ownerId.");
      } else {
        param1.writeInt(this.ownerId);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
          throw new Error("Forbidden value (" + this.experience + ") on element experience.");
        } else {
          param1.writeVarLong(this.experience);
          if (this.experienceForLevel < 0 || this.experienceForLevel > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.experienceForLevel + ") on element experienceForLevel.");
          } else {
            param1.writeVarLong(this.experienceForLevel);
            if (this.experienceForNextLevel < -9.007199254740992E15 || this.experienceForNextLevel > 9.007199254740992E15) {
              throw new Error("Forbidden value (" + this.experienceForNextLevel + ") on element experienceForNextLevel.");
            } else {
              param1.writeDouble(this.experienceForNextLevel);
              if (this.level < 0) {
                throw new Error("Forbidden value (" + this.level + ") on element level.");
              } else {
                param1.writeByte(this.level);
                if (this.maxPods < 0) {
                  throw new Error("Forbidden value (" + this.maxPods + ") on element maxPods.");
                } else {
                  param1.writeVarInt(this.maxPods);
                  if (this.stamina < 0) {
                    throw new Error("Forbidden value (" + this.stamina + ") on element stamina.");
                  } else {
                    param1.writeVarInt(this.stamina);
                    if (this.staminaMax < 0) {
                      throw new Error("Forbidden value (" + this.staminaMax + ") on element staminaMax.");
                    } else {
                      param1.writeVarInt(this.staminaMax);
                      if (this.maturity < 0) {
                        throw new Error("Forbidden value (" + this.maturity + ") on element maturity.");
                      } else {
                        param1.writeVarInt(this.maturity);
                        if (this.maturityForAdult < 0) {
                          throw new Error("Forbidden value (" + this.maturityForAdult + ") on element maturityForAdult.");
                        } else {
                          param1.writeVarInt(this.maturityForAdult);
                          if (this.energy < 0) {
                            throw new Error("Forbidden value (" + this.energy + ") on element energy.");
                          } else {
                            param1.writeVarInt(this.energy);
                            if (this.energyMax < 0) {
                              throw new Error("Forbidden value (" + this.energyMax + ") on element energyMax.");
                            } else {
                              param1.writeVarInt(this.energyMax);
                              param1.writeInt(this.serenity);
                              param1.writeInt(this.aggressivityMax);
                              if (this.serenityMax < 0) {
                                throw new Error("Forbidden value (" + this.serenityMax + ") on element serenityMax.");
                              } else {
                                param1.writeVarInt(this.serenityMax);
                                if (this.love < 0) {
                                  throw new Error("Forbidden value (" + this.love + ") on element love.");
                                } else {
                                  param1.writeVarInt(this.love);
                                  if (this.loveMax < 0) {
                                    throw new Error("Forbidden value (" + this.loveMax + ") on element loveMax.");
                                  } else {
                                    param1.writeVarInt(this.loveMax);
                                    param1.writeInt(this.fecondationTime);
                                    if (this.boostLimiter < 0) {
                                      throw new Error("Forbidden value (" + this.boostLimiter + ") on element boostLimiter.");
                                    } else {
                                      param1.writeInt(this.boostLimiter);
                                      if (this.boostMax < -9.007199254740992E15 || this.boostMax > 9.007199254740992E15) {
                                        throw new Error("Forbidden value (" + this.boostMax + ") on element boostMax.");
                                      } else {
                                        param1.writeDouble(this.boostMax);
                                        param1.writeInt(this.reproductionCount);
                                        if (this.reproductionCountMax < 0) {
                                          throw new Error("Forbidden value (" + this.reproductionCountMax + ") on element reproductionCountMax.");
                                        } else {
                                          param1.writeVarInt(this.reproductionCountMax);
                                          param1.writeShort(this.effectList.length);
                                          var _loc5_ = 0;
                                          while (_loc5_ < this.effectList.length) {
                                            (this.effectList[_loc5_]).serializeAs_ObjectEffectInteger(param1);
                                            _loc5_++;
                                          }
                                          return;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

MountClientData.prototype.deserializeAs_MountClientData = function(input) {
  var _loc9_ = 0;
  var _loc10_ = 0;
  var _loc11_ = null;
  var _loc2_ = param1.readByte();
  this.sex = BooleanByteWrapper.getFlag(_loc2_, 0);
  this.isRideable = BooleanByteWrapper.getFlag(_loc2_, 1);
  this.isWild = BooleanByteWrapper.getFlag(_loc2_, 2);
  this.isFecondationReady = BooleanByteWrapper.getFlag(_loc2_, 3);
  this.id = param1.readDouble();
  if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.id + ") on element of MountClientData.id.");
  } else {
    this.model = param1.readVarUhInt();
    if (this.model < 0) {
      throw new Error("Forbidden value (" + this.model + ") on element of MountClientData.model.");
    } else {
      var _loc3_ = param1.readUnsignedShort();
      var _loc4_ = 0;
      while (_loc4_ < _loc3_) {
        _loc9_ = param1.readInt();
        if (_loc9_ < 0) {
          throw new Error("Forbidden value (" + _loc9_ + ") on elements of ancestor.");
        } else {
          this.ancestor.push(_loc9_);
          _loc4_++;
          continue;
        }
      }
      var _loc5_ = param1.readUnsignedShort();
      var _loc6_ = 0;
      while (_loc6_ < _loc5_) {
        _loc10_ = param1.readInt();
        if (_loc10_ < 0) {
          throw new Error("Forbidden value (" + _loc10_ + ") on elements of behaviors.");
        } else {
          this.behaviors.push(_loc10_);
          _loc6_++;
          continue;
        }
      }
      this.name = param1.readUTF();
      this.ownerId = param1.readInt();
      if (this.ownerId < 0) {
        throw new Error("Forbidden value (" + this.ownerId + ") on element of MountClientData.ownerId.");
      } else {
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
          throw new Error("Forbidden value (" + this.experience + ") on element of MountClientData.experience.");
        } else {
          this.experienceForLevel = param1.readVarUhLong();
          if (this.experienceForLevel < 0 || this.experienceForLevel > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.experienceForLevel + ") on element of MountClientData.experienceForLevel.");
          } else {
            this.experienceForNextLevel = param1.readDouble();
            if (this.experienceForNextLevel < -9.007199254740992E15 || this.experienceForNextLevel > 9.007199254740992E15) {
              throw new Error("Forbidden value (" + this.experienceForNextLevel + ") on element of MountClientData.experienceForNextLevel.");
            } else {
              this.level = param1.readByte();
              if (this.level < 0) {
                throw new Error("Forbidden value (" + this.level + ") on element of MountClientData.level.");
              } else {
                this.maxPods = param1.readVarUhInt();
                if (this.maxPods < 0) {
                  throw new Error("Forbidden value (" + this.maxPods + ") on element of MountClientData.maxPods.");
                } else {
                  this.stamina = param1.readVarUhInt();
                  if (this.stamina < 0) {
                    throw new Error("Forbidden value (" + this.stamina + ") on element of MountClientData.stamina.");
                  } else {
                    this.staminaMax = param1.readVarUhInt();
                    if (this.staminaMax < 0) {
                      throw new Error("Forbidden value (" + this.staminaMax + ") on element of MountClientData.staminaMax.");
                    } else {
                      this.maturity = param1.readVarUhInt();
                      if (this.maturity < 0) {
                        throw new Error("Forbidden value (" + this.maturity + ") on element of MountClientData.maturity.");
                      } else {
                        this.maturityForAdult = param1.readVarUhInt();
                        if (this.maturityForAdult < 0) {
                          throw new Error("Forbidden value (" + this.maturityForAdult + ") on element of MountClientData.maturityForAdult.");
                        } else {
                          this.energy = param1.readVarUhInt();
                          if (this.energy < 0) {
                            throw new Error("Forbidden value (" + this.energy + ") on element of MountClientData.energy.");
                          } else {
                            this.energyMax = param1.readVarUhInt();
                            if (this.energyMax < 0) {
                              throw new Error("Forbidden value (" + this.energyMax + ") on element of MountClientData.energyMax.");
                            } else {
                              this.serenity = param1.readInt();
                              this.aggressivityMax = param1.readInt();
                              this.serenityMax = param1.readVarUhInt();
                              if (this.serenityMax < 0) {
                                throw new Error("Forbidden value (" + this.serenityMax + ") on element of MountClientData.serenityMax.");
                              } else {
                                this.love = param1.readVarUhInt();
                                if (this.love < 0) {
                                  throw new Error("Forbidden value (" + this.love + ") on element of MountClientData.love.");
                                } else {
                                  this.loveMax = param1.readVarUhInt();
                                  if (this.loveMax < 0) {
                                    throw new Error("Forbidden value (" + this.loveMax + ") on element of MountClientData.loveMax.");
                                  } else {
                                    this.fecondationTime = param1.readInt();
                                    this.boostLimiter = param1.readInt();
                                    if (this.boostLimiter < 0) {
                                      throw new Error("Forbidden value (" + this.boostLimiter + ") on element of MountClientData.boostLimiter.");
                                    } else {
                                      this.boostMax = param1.readDouble();
                                      if (this.boostMax < -9.007199254740992E15 || this.boostMax > 9.007199254740992E15) {
                                        throw new Error("Forbidden value (" + this.boostMax + ") on element of MountClientData.boostMax.");
                                      } else {
                                        this.reproductionCount = param1.readInt();
                                        this.reproductionCountMax = param1.readVarUhInt();
                                        if (this.reproductionCountMax < 0) {
                                          throw new Error("Forbidden value (" + this.reproductionCountMax + ") on element of MountClientData.reproductionCountMax.");
                                        } else {
                                          var _loc7_ = param1.readUnsignedShort();
                                          var _loc8_ = 0;
                                          while (_loc8_ < _loc7_) {
                                            _loc11_ = new ObjectEffectInteger();
                                            _loc11_.deserialize(param1);
                                            this.effectList.push(_loc11_);
                                            _loc8_++;
                                          }
                                          return;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

MountClientData.prototype.getTypeId = function() {
  return 178;
};

MountClientData.prototype.getClassName = function() {
  return 'MountClientData';
};

module.exports.id = 178;
module.exports.class = MountClientData;