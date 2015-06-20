var StartupActionAddObject = function() {
  this.uid = 0;
  this.title = "";
  this.text = "";
  this.descUrl = "";
  this.pictureUrl = "";
  this.items = [];
};



StartupActionAddObject.prototype.serialize = function(output) {
  this.serializeAs_StartupActionAddObject(output);
};

StartupActionAddObject.prototype.deserialize = function(input) {
  this.deserializeAs_StartupActionAddObject(input);
};

StartupActionAddObject.prototype.serializeAs_StartupActionAddObject = function(output) {
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element uid.")));
  };
  output.writeInt(this.uid);
  output.writeUTF(this.title);
  output.writeUTF(this.text);
  output.writeUTF(this.descUrl);
  output.writeUTF(this.pictureUrl);
  output.writeShort(this.items.length);
  var _i6 = 0;
  while (_i6 < this.items.length) {
    (this.items[_i6]).serializeAs_ObjectItemInformationWithQuantity(output);
    _i6++;
  };
};

StartupActionAddObject.prototype.deserializeAs_StartupActionAddObject = function(input) {
  var _item6;
  this.uid = input.readInt();
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element of StartupActionAddObject.uid.")));
  };
  this.title = input.readUTF();
  this.text = input.readUTF();
  this.descUrl = input.readUTF();
  this.pictureUrl = input.readUTF();
  var _itemsLen = input.readUnsignedShort();
  var _i6 = 0;
  while (_i6 < _itemsLen) {
    _item6 = new ObjectItemInformationWithQuantity();
    _item6.deserialize(input);
    this.items.push(_item6);
    _i6++;
  };
};

StartupActionAddObject.prototype.getTypeId = function() {
  return 52;
};

StartupActionAddObject.prototype.getClassName = function() {
  return 'StartupActionAddObject';
};

module.exports.id = 52;
module.exports.class = StartupActionAddObject;