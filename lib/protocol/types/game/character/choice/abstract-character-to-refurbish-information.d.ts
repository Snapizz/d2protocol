/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractCharacterInformation = require('./../abstract-character-information');
declare class AbstractCharacterToRefurbishInformation extends AbstractCharacterInformation implements INetworkType {
    static ID: number;
    colors: number[];
    cosmeticId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataInput): void;
}
export = AbstractCharacterToRefurbishInformation;
