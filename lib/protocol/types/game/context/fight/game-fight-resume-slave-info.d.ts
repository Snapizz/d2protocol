/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightSpellCooldown = require('./game-fight-spell-cooldown');
declare class GameFightResumeSlaveInfo implements INetworkType {
    static ID: number;
    slaveId: number;
    spellCooldowns: GameFightSpellCooldown[];
    summonCount: number;
    bombCount: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightResumeSlaveInfo(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightResumeSlaveInfo(param1: ICustomDataInput): void;
}
export = GameFightResumeSlaveInfo;
