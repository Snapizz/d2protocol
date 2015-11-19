/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MapComplementaryInformationsDataMessage = require('./map-complementary-informations-data-message');
import HouseInformationsInside = require('../../../../types/game/house/house-informations-inside');
declare class MapComplementaryInformationsDataInHouseMessage extends MapComplementaryInformationsDataMessage {
    static ID: number;
    currentHouse: HouseInformationsInside;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapComplementaryInformationsDataInHouseMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapComplementaryInformationsDataInHouseMessage(param1: ICustomDataInput): void;
}
export = MapComplementaryInformationsDataInHouseMessage;
