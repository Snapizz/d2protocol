/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import TreasureHuntStep = require('./treasure-hunt-step');
declare class TreasureHuntStepFollowDirectionToHint extends TreasureHuntStep implements INetworkType {
    static ID: number;
    direction: number;
    npcId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataInput): void;
}
export = TreasureHuntStepFollowDirectionToHint;
