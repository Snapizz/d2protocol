/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class GameFightSpellCooldown implements INetworkType {
    static ID: number;
    spellId: number;
    cooldown: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightSpellCooldown(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightSpellCooldown(param1: ICustomDataInput): void;
}
export = GameFightSpellCooldown;
