/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class ActorRestrictionsInformations implements INetworkType {
    static ID: number;
    cantBeAggressed: boolean;
    cantBeChallenged: boolean;
    cantTrade: boolean;
    cantBeAttackedByMutant: boolean;
    cantRun: boolean;
    forceSlowWalk: boolean;
    cantMinimize: boolean;
    cantMove: boolean;
    cantAggress: boolean;
    cantChallenge: boolean;
    cantExchange: boolean;
    cantAttack: boolean;
    cantChat: boolean;
    cantBeMerchant: boolean;
    cantUseObject: boolean;
    cantUseTaxCollector: boolean;
    cantUseInteractive: boolean;
    cantSpeakToNPC: boolean;
    cantChangeZone: boolean;
    cantAttackMonster: boolean;
    cantWalk8Directions: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ActorRestrictionsInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ActorRestrictionsInformations(param1: ICustomDataInput): void;
}
export = ActorRestrictionsInformations;
