var ServerSessionConstantInteger = function() {
    this.value = 0;
};

require('util').inherits(ServerSessionConstantInteger, require('./server-session-constant.js'));

module.exports = function() {
    return new ServerSessionConstantInteger();
};

ServerSessionConstantInteger.prototype.serialize = function(output) {
    this.serializeAs_ServerSessionConstantInteger(output);
};

ServerSessionConstantInteger.prototype.deserialize = function(input) {
    this.deserializeAs_ServerSessionConstantInteger(input);
};

ServerSessionConstantInteger.prototype.serializeAs_ServerSessionConstantInteger = function(param1) {
    this.serializeAs_ServerSessionConstant(param1);
    param1.writeInt(this.value);
};

ServerSessionConstantInteger.prototype.deserializeAs_ServerSessionConstantInteger = function(param1) {
    this.deserializeAs_ServerSessionConstant(param1);
    this.value = param1.readInt();
};

ServerSessionConstantInteger.prototype.getTypeId = function() {
    return 433;
};

ServerSessionConstantInteger.prototype.getClassName = function() {
    return 'ServerSessionConstantInteger';
};

module.exports.id = 433;
module.exports.ServerSessionConstantInteger = ServerSessionConstantInteger;