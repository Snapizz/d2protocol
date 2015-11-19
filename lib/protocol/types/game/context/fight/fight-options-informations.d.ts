/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class FightOptionsInformations implements INetworkType {
    static ID: number;
    isSecret: boolean;
    isRestrictedToPartyOnly: boolean;
    isClosed: boolean;
    isAskingForHelp: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightOptionsInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightOptionsInformations(param1: ICustomDataInput): void;
}
export = FightOptionsInformations;
