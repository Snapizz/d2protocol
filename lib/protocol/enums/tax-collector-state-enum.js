var TaxCollectorStateEnum;
(function (TaxCollectorStateEnum) {
    TaxCollectorStateEnum[TaxCollectorStateEnum["STATE_COLLECTING"] = 0] = "STATE_COLLECTING";
    TaxCollectorStateEnum[TaxCollectorStateEnum["STATE_WAITING_FOR_HELP"] = 1] = "STATE_WAITING_FOR_HELP";
    TaxCollectorStateEnum[TaxCollectorStateEnum["STATE_FIGHTING"] = 2] = "STATE_FIGHTING";
})(TaxCollectorStateEnum || (TaxCollectorStateEnum = {}));
module.exports = TaxCollectorStateEnum;
