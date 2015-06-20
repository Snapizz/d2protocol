var ShortcutObjectItem = function() {
  this.itemUID = 0;
  this.itemGID = 0;
};



ShortcutObjectItem.prototype.serialize = function(output) {
  this.serializeAs_ShortcutObjectItem(output);
};

ShortcutObjectItem.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutObjectItem(input);
};

ShortcutObjectItem.prototype.serializeAs_ShortcutObjectItem = function(output) {
  super.serializeAs_ShortcutObject(param1);
  param1.writeInt(this.itemUID);
  param1.writeInt(this.itemGID);
};

ShortcutObjectItem.prototype.deserializeAs_ShortcutObjectItem = function(input) {
  super.deserialize(param1);
  this.itemUID = param1.readInt();
  this.itemGID = param1.readInt();
};

ShortcutObjectItem.prototype.getTypeId = function() {
  return 371;
};

ShortcutObjectItem.prototype.getClassName = function() {
  return 'ShortcutObjectItem';
};

module.exports.id = 371;
module.exports.class = ShortcutObjectItem;