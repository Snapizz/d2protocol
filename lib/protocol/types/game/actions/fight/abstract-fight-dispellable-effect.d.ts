/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class AbstractFightDispellableEffect implements INetworkType {
    static ID: number;
    uid: number;
    targetId: number;
    turnDuration: number;
    dispelable: number;
    spellId: number;
    effectId: number;
    parentBoostUid: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AbstractFightDispellableEffect(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AbstractFightDispellableEffect(param1: ICustomDataInput): void;
}
export = AbstractFightDispellableEffect;
