/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class GuildEmblem implements INetworkType {
    static ID: number;
    symbolShape: number;
    symbolColor: number;
    backgroundShape: number;
    backgroundColor: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildEmblem(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildEmblem(param1: ICustomDataInput): void;
}
export = GuildEmblem;
