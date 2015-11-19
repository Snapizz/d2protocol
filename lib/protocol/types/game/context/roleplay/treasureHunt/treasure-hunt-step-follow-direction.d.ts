/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import TreasureHuntStep = require('./treasure-hunt-step');
declare class TreasureHuntStepFollowDirection extends TreasureHuntStep implements INetworkType {
    static ID: number;
    direction: number;
    mapCount: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataInput): void;
}
export = TreasureHuntStepFollowDirection;
