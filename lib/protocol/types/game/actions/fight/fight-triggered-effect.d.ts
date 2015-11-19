/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractFightDispellableEffect = require('./abstract-fight-dispellable-effect');
declare class FightTriggeredEffect extends AbstractFightDispellableEffect implements INetworkType {
    static ID: number;
    param1: number;
    param2: number;
    param3: number;
    delay: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTriggeredEffect(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTriggeredEffect(param1: ICustomDataInput): void;
}
export = FightTriggeredEffect;
