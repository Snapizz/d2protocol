/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PrismInformation = require('./prism-information');
import PrismSubareaEmptyInfo = require('./prism-subarea-empty-info');
declare class PrismGeolocalizedInformation extends PrismSubareaEmptyInfo implements INetworkType {
    static ID: number;
    worldX: number;
    worldY: number;
    mapId: number;
    prism: PrismInformation;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PrismGeolocalizedInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PrismGeolocalizedInformation(param1: ICustomDataInput): void;
}
export = PrismGeolocalizedInformation;
