var ShortcutObject = function() {

};



ShortcutObject.prototype.serialize = function(output) {
  this.serializeAs_ShortcutObject(output);
};

ShortcutObject.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutObject(input);
};

ShortcutObject.prototype.serializeAs_ShortcutObject = function(output) {
  super.serializeAs_Shortcut(param1);
};

ShortcutObject.prototype.deserializeAs_ShortcutObject = function(input) {
  super.deserialize(param1);
};

ShortcutObject.prototype.getTypeId = function() {
  return 367;
};

ShortcutObject.prototype.getClassName = function() {
  return 'ShortcutObject';
};

module.exports.id = 367;
module.exports.class = ShortcutObject;