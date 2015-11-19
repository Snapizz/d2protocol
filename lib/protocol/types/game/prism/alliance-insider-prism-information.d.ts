/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PrismInformation = require('./prism-information');
import ObjectItem = require('../data/items/object-item');
declare class AllianceInsiderPrismInformation extends PrismInformation implements INetworkType {
    static ID: number;
    lastTimeSlotModificationDate: number;
    lastTimeSlotModificationAuthorGuildId: number;
    lastTimeSlotModificationAuthorId: number;
    lastTimeSlotModificationAuthorName: string;
    modulesObjects: ObjectItem[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceInsiderPrismInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceInsiderPrismInformation(param1: ICustomDataInput): void;
}
export = AllianceInsiderPrismInformation;
