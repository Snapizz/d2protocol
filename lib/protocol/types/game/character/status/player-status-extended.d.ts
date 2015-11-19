/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import PlayerStatus = require('./player-status');
declare class PlayerStatusExtended extends PlayerStatus implements INetworkType {
    static ID: number;
    message: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PlayerStatusExtended(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PlayerStatusExtended(param1: ICustomDataInput): void;
}
export = PlayerStatusExtended;
