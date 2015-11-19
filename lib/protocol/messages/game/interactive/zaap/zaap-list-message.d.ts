/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import TeleportDestinationsListMessage = require('./teleport-destinations-list-message');
declare class ZaapListMessage extends TeleportDestinationsListMessage {
    static ID: number;
    spawnMapId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ZaapListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ZaapListMessage(param1: ICustomDataInput): void;
}
export = ZaapListMessage;
