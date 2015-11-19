/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import TreasureHuntStep = require('./treasure-hunt-step');
declare class TreasureHuntStepFollowDirectionToPOI extends TreasureHuntStep implements INetworkType {
    static ID: number;
    direction: number;
    poiLabelId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataInput): void;
}
export = TreasureHuntStepFollowDirectionToPOI;
