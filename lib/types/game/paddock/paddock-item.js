var PaddockItem = function() {
    this.durability = new ItemDurability();
};

require('util').inherits(PaddockItem, require('../context/roleplay/object-item-in-role-play.js').class);

PaddockItem.prototype.serialize = function(output) {
    this.serializeAs_PaddockItem(output);
};

PaddockItem.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockItem(input);
};

PaddockItem.prototype.serializeAs_PaddockItem = function(param1) {
    this.serializeAs_ObjectItemInRolePlay(param1);
    this.durability.serializeAs_ItemDurability(param1);
};

PaddockItem.prototype.deserializeAs_PaddockItem = function(param1) {
    this.deserializeAs_ObjectItemInRolePlay(param1);
    this.durability = new ItemDurability();
    this.durability.deserialize(param1);
};

PaddockItem.prototype.getTypeId = function() {
    return 185;
};

PaddockItem.prototype.getClassName = function() {
    return 'PaddockItem';
};

module.exports.id = 185;
module.exports.class = PaddockItem;
module.exports.getInstance = function() {
    return new PaddockItem;
};