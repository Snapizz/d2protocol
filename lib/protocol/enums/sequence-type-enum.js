var SequenceTypeEnum;
(function (SequenceTypeEnum) {
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_SPELL"] = 1] = "SEQUENCE_SPELL";
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_WEAPON"] = 2] = "SEQUENCE_WEAPON";
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_GLYPH_TRAP"] = 3] = "SEQUENCE_GLYPH_TRAP";
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_TRIGGERED"] = 4] = "SEQUENCE_TRIGGERED";
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_MOVE"] = 5] = "SEQUENCE_MOVE";
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_CHARACTER_DEATH"] = 6] = "SEQUENCE_CHARACTER_DEATH";
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_TURN_START"] = 7] = "SEQUENCE_TURN_START";
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_TURN_END"] = 8] = "SEQUENCE_TURN_END";
    SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_FIGHT_START"] = 9] = "SEQUENCE_FIGHT_START";
})(SequenceTypeEnum || (SequenceTypeEnum = {}));
module.exports = SequenceTypeEnum;
