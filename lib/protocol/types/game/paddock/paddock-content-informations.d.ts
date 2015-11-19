/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import MountInformationsForPaddock = require('./mount-informations-for-paddock');
import PaddockInformations = require('./paddock-informations');
declare class PaddockContentInformations extends PaddockInformations implements INetworkType {
    static ID: number;
    paddockId: number;
    worldX: number;
    worldY: number;
    mapId: number;
    subAreaId: number;
    abandonned: boolean;
    mountsInformations: MountInformationsForPaddock[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PaddockContentInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PaddockContentInformations(param1: ICustomDataInput): void;
}
export = PaddockContentInformations;
