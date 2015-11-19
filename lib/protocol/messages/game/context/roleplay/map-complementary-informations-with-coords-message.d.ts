/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MapComplementaryInformationsDataMessage = require('./map-complementary-informations-data-message');
declare class MapComplementaryInformationsWithCoordsMessage extends MapComplementaryInformationsDataMessage {
    static ID: number;
    worldX: number;
    worldY: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapComplementaryInformationsWithCoordsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapComplementaryInformationsWithCoordsMessage(param1: ICustomDataInput): void;
}
export = MapComplementaryInformationsWithCoordsMessage;
