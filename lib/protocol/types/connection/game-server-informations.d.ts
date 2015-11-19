/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
declare class GameServerInformations implements INetworkType {
    static ID: number;
    id: number;
    type: number;
    status: number;
    completion: number;
    isSelectable: boolean;
    charactersCount: number;
    charactersSlots: number;
    date: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameServerInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameServerInformations(param1: ICustomDataInput): void;
}
export = GameServerInformations;
