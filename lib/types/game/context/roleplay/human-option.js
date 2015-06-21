var HumanOption = module.exports = function() {


    return this;
};

HumanOption.prototype.serialize = function(output) {
    this.serializeAs_HumanOption(output);
};

HumanOption.prototype.deserialize = function(input) {
    this.deserializeAs_HumanOption(input);
};

HumanOption.prototype.serializeAs_HumanOption = function(param1) {

};

HumanOption.prototype.deserializeAs_HumanOption = function(param1) {

};

HumanOption.prototype.getTypeId = function() {
    return 406;
};

HumanOption.prototype.getClassName = function() {
    return 'HumanOption';
};

module.exports.id = 406;