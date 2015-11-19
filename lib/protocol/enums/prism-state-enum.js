var PrismStateEnum;
(function (PrismStateEnum) {
    PrismStateEnum[PrismStateEnum["PRISM_STATE_INVULNERABLE"] = 0] = "PRISM_STATE_INVULNERABLE";
    PrismStateEnum[PrismStateEnum["PRISM_STATE_NORMAL"] = 1] = "PRISM_STATE_NORMAL";
    PrismStateEnum[PrismStateEnum["PRISM_STATE_ATTACKED"] = 2] = "PRISM_STATE_ATTACKED";
    PrismStateEnum[PrismStateEnum["PRISM_STATE_FIGHTING"] = 3] = "PRISM_STATE_FIGHTING";
    PrismStateEnum[PrismStateEnum["PRISM_STATE_WEAKENED"] = 4] = "PRISM_STATE_WEAKENED";
    PrismStateEnum[PrismStateEnum["PRISM_STATE_VULNERABLE"] = 5] = "PRISM_STATE_VULNERABLE";
    PrismStateEnum[PrismStateEnum["PRISM_STATE_DEFEATED"] = 6] = "PRISM_STATE_DEFEATED";
    PrismStateEnum[PrismStateEnum["PRISM_STATE_SABOTAGED"] = 7] = "PRISM_STATE_SABOTAGED";
})(PrismStateEnum || (PrismStateEnum = {}));
module.exports = PrismStateEnum;
