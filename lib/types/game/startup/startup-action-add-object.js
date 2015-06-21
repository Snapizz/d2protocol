var StartupActionAddObject = function() {
    this.uid = 0;
    this.title = "";
    this.text = "";
    this.descUrl = "";
    this.pictureUrl = "";
    this.items = [];
};

module.exports = function() {
    return new StartupActionAddObject();
};

StartupActionAddObject.prototype.serialize = function(output) {
    this.serializeAs_StartupActionAddObject(output);
};

StartupActionAddObject.prototype.deserialize = function(input) {
    this.deserializeAs_StartupActionAddObject(input);
};

StartupActionAddObject.prototype.serializeAs_StartupActionAddObject = function(param1) {
    if (this.uid < 0) {
        throw new Error("Forbidden value (" + this.uid + ") on element uid.");
    } else {
        param1.writeInt(this.uid);
        param1.writeUTF(this.title);
        param1.writeUTF(this.text);
        param1.writeUTF(this.descUrl);
        param1.writeUTF(this.pictureUrl);
        param1.writeShort(this.items.length);
        var _loc2_ = 0;
        while (_loc2_ < this.items.length) {
            (this.items[_loc2_]).serializeAs_ObjectItemInformationWithQuantity(param1);
            _loc2_++;
        }
        return;
    }
};

StartupActionAddObject.prototype.deserializeAs_StartupActionAddObject = function(param1) {
    var _loc4_ = null;
    this.uid = param1.readInt();
    if (this.uid < 0) {
        throw new Error("Forbidden value (" + this.uid + ") on element of StartupActionAddObject.uid.");
    } else {
        this.title = param1.readUTF();
        this.text = param1.readUTF();
        this.descUrl = param1.readUTF();
        this.pictureUrl = param1.readUTF();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemInformationWithQuantity();
            _loc4_.deserialize(param1);
            this.items.push(_loc4_);
            _loc3_++;
        }
        return;
    }
};

StartupActionAddObject.prototype.getTypeId = function() {
    return 52;
};

StartupActionAddObject.prototype.getClassName = function() {
    return 'StartupActionAddObject';
};

module.exports.id = 52;
module.exports.StartupActionAddObject = StartupActionAddObject;