/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractTaxCollectorListMessage = require('./abstract-tax-collector-list-message');
import TaxCollectorFightersInformation = require('../../../../types/game/guild/tax/tax-collector-fighters-information');
declare class TaxCollectorListMessage extends AbstractTaxCollectorListMessage {
    static ID: number;
    nbcollectorMax: number;
    fightersInformations: TaxCollectorFightersInformation[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorListMessage(param1: ICustomDataInput): void;
}
export = TaxCollectorListMessage;
