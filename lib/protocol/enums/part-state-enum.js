var PartStateEnum;
(function (PartStateEnum) {
    PartStateEnum[PartStateEnum["PART_NOT_INSTALLED"] = 0] = "PART_NOT_INSTALLED";
    PartStateEnum[PartStateEnum["PART_BEING_UPDATER"] = 1] = "PART_BEING_UPDATER";
    PartStateEnum[PartStateEnum["PART_UP_TO_DATE"] = 2] = "PART_UP_TO_DATE";
})(PartStateEnum || (PartStateEnum = {}));
module.exports = PartStateEnum;
