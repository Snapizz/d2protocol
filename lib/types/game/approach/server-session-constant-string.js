var ServerSessionConstantString = function() {
    this.value = "";
};

require('util').inherits(ServerSessionConstantString, require('./server-session-constant.js').class);

ServerSessionConstantString.prototype.serialize = function(output) {
    this.serializeAs_ServerSessionConstantString(output);
};

ServerSessionConstantString.prototype.deserialize = function(input) {
    this.deserializeAs_ServerSessionConstantString(input);
};

ServerSessionConstantString.prototype.serializeAs_ServerSessionConstantString = function(param1) {
    this.serializeAs_ServerSessionConstantAs_ServerSessionConstant(param1);
    param1.writeUTF(this.value);
};

ServerSessionConstantString.prototype.deserializeAs_ServerSessionConstantString = function(param1) {
    this.deserializeAs_ServerSessionConstant(param1);
    this.value = param1.readUTF();
};

ServerSessionConstantString.prototype.getTypeId = function() {
    return 436;
};

ServerSessionConstantString.prototype.getClassName = function() {
    return 'ServerSessionConstantString';
};

module.exports.id = 436;
module.exports.class = ServerSessionConstantString;
module.exports.getInstance = function() {
    return new ServerSessionConstantString;
};