var ObjectErrorEnum;
(function (ObjectErrorEnum) {
    ObjectErrorEnum[ObjectErrorEnum["INVENTORY_FULL"] = 1] = "INVENTORY_FULL";
    ObjectErrorEnum[ObjectErrorEnum["CANNOT_EQUIP_TWICE"] = 2] = "CANNOT_EQUIP_TWICE";
    ObjectErrorEnum[ObjectErrorEnum["NOT_TRADABLE"] = 3] = "NOT_TRADABLE";
    ObjectErrorEnum[ObjectErrorEnum["CANNOT_DROP"] = 4] = "CANNOT_DROP";
    ObjectErrorEnum[ObjectErrorEnum["CANNOT_DROP_NO_PLACE"] = 5] = "CANNOT_DROP_NO_PLACE";
    ObjectErrorEnum[ObjectErrorEnum["CANNOT_DESTROY"] = 6] = "CANNOT_DESTROY";
    ObjectErrorEnum[ObjectErrorEnum["LEVEL_TOO_LOW"] = 7] = "LEVEL_TOO_LOW";
    ObjectErrorEnum[ObjectErrorEnum["LIVING_OBJECT_REFUSED_FOOD"] = 8] = "LIVING_OBJECT_REFUSED_FOOD";
    ObjectErrorEnum[ObjectErrorEnum["CANNOT_UNEQUIP"] = 9] = "CANNOT_UNEQUIP";
    ObjectErrorEnum[ObjectErrorEnum["CANNOT_EQUIP_HERE"] = 10] = "CANNOT_EQUIP_HERE";
    ObjectErrorEnum[ObjectErrorEnum["CRITERIONS"] = 11] = "CRITERIONS";
    ObjectErrorEnum[ObjectErrorEnum["SYMBIOTIC_OBJECT_ERROR"] = 12] = "SYMBIOTIC_OBJECT_ERROR";
})(ObjectErrorEnum || (ObjectErrorEnum = {}));
module.exports = ObjectErrorEnum;
