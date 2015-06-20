var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TaxCollectorDialogQuestionExtendedMessage = function() {
  this.maxPods = 0;
  this.prospecting = 0;
  this.wisdom = 0;
  this.taxCollectorsCount = 0;
  this.taxCollectorAttack = 0;
  this.kamas = 0;
  this.experience = 0;
  this.pods = 0;
  this.itemsValue = 0;
};

util.inherits(TaxCollectorDialogQuestionExtendedMessage, BaseMessage);

TaxCollectorDialogQuestionExtendedMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorDialogQuestionExtendedMessage(output);
};

TaxCollectorDialogQuestionExtendedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorDialogQuestionExtendedMessage(input);
};

TaxCollectorDialogQuestionExtendedMessage.prototype.serializeAs_TaxCollectorDialogQuestionExtendedMessage = function(param1) {
  this.serializeAs_TaxCollectorDialogQuestionBasicMessage(param1);
  if (this.maxPods < 0) {
    throw new Error("Forbidden value (" + this.maxPods + ") on element maxPods.");
  } else {
    param1.writeVarShort(this.maxPods);
    if (this.prospecting < 0) {
      throw new Error("Forbidden value (" + this.prospecting + ") on element prospecting.");
    } else {
      param1.writeVarShort(this.prospecting);
      if (this.wisdom < 0) {
        throw new Error("Forbidden value (" + this.wisdom + ") on element wisdom.");
      } else {
        param1.writeVarShort(this.wisdom);
        if (this.taxCollectorsCount < 0) {
          throw new Error("Forbidden value (" + this.taxCollectorsCount + ") on element taxCollectorsCount.");
        } else {
          param1.writeByte(this.taxCollectorsCount);
          param1.writeInt(this.taxCollectorAttack);
          if (this.kamas < 0) {
            throw new Error("Forbidden value (" + this.kamas + ") on element kamas.");
          } else {
            param1.writeVarInt(this.kamas);
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
              throw new Error("Forbidden value (" + this.experience + ") on element experience.");
            } else {
              param1.writeVarLong(this.experience);
              if (this.pods < 0) {
                throw new Error("Forbidden value (" + this.pods + ") on element pods.");
              } else {
                param1.writeVarInt(this.pods);
                if (this.itemsValue < 0) {
                  throw new Error("Forbidden value (" + this.itemsValue + ") on element itemsValue.");
                } else {
                  param1.writeVarInt(this.itemsValue);
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
};

TaxCollectorDialogQuestionExtendedMessage.prototype.deserializeAs_TaxCollectorDialogQuestionExtendedMessage = function(param1) {
  this.deserialize(param1);
  this.maxPods = param1.readVarUhShort();
  if (this.maxPods < 0) {
    throw new Error("Forbidden value (" + this.maxPods + ") on element of TaxCollectorDialogQuestionExtendedMessage.maxPods.");
  } else {
    this.prospecting = param1.readVarUhShort();
    if (this.prospecting < 0) {
      throw new Error("Forbidden value (" + this.prospecting + ") on element of TaxCollectorDialogQuestionExtendedMessage.prospecting.");
    } else {
      this.wisdom = param1.readVarUhShort();
      if (this.wisdom < 0) {
        throw new Error("Forbidden value (" + this.wisdom + ") on element of TaxCollectorDialogQuestionExtendedMessage.wisdom.");
      } else {
        this.taxCollectorsCount = param1.readByte();
        if (this.taxCollectorsCount < 0) {
          throw new Error("Forbidden value (" + this.taxCollectorsCount + ") on element of TaxCollectorDialogQuestionExtendedMessage.taxCollectorsCount.");
        } else {
          this.taxCollectorAttack = param1.readInt();
          this.kamas = param1.readVarUhInt();
          if (this.kamas < 0) {
            throw new Error("Forbidden value (" + this.kamas + ") on element of TaxCollectorDialogQuestionExtendedMessage.kamas.");
          } else {
            this.experience = param1.readVarUhLong();
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
              throw new Error("Forbidden value (" + this.experience + ") on element of TaxCollectorDialogQuestionExtendedMessage.experience.");
            } else {
              this.pods = param1.readVarUhInt();
              if (this.pods < 0) {
                throw new Error("Forbidden value (" + this.pods + ") on element of TaxCollectorDialogQuestionExtendedMessage.pods.");
              } else {
                this.itemsValue = param1.readVarUhInt();
                if (this.itemsValue < 0) {
                  throw new Error("Forbidden value (" + this.itemsValue + ") on element of TaxCollectorDialogQuestionExtendedMessage.itemsValue.");
                } else {
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
};

TaxCollectorDialogQuestionExtendedMessage.prototype.getMessageId = function() {
  return 5615;
};

TaxCollectorDialogQuestionExtendedMessage.prototype.getClassName = function() {
  return 'TaxCollectorDialogQuestionExtendedMessage';
};

module.exports.id = 5615;
module.exports.class = TaxCollectorDialogQuestionExtendedMessage;