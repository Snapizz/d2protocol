/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractFightDispellableEffect = require('../../actions/fight/abstract-fight-dispellable-effect');
declare class FightDispellableEffectExtendedInformations implements INetworkType {
    static ID: number;
    actionId: number;
    sourceId: number;
    effect: AbstractFightDispellableEffect;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataInput): void;
}
export = FightDispellableEffectExtendedInformations;
