var FightDispellableEnum;
(function (FightDispellableEnum) {
    FightDispellableEnum[FightDispellableEnum["DISPELLABLE"] = 1] = "DISPELLABLE";
    FightDispellableEnum[FightDispellableEnum["DISPELLABLE_BY_DEATH"] = 2] = "DISPELLABLE_BY_DEATH";
    FightDispellableEnum[FightDispellableEnum["DISPELLABLE_BY_STRONG_DISPEL"] = 3] = "DISPELLABLE_BY_STRONG_DISPEL";
    FightDispellableEnum[FightDispellableEnum["REALLY_NOT_DISPELLABLE"] = 4] = "REALLY_NOT_DISPELLABLE";
})(FightDispellableEnum || (FightDispellableEnum = {}));
module.exports = FightDispellableEnum;
