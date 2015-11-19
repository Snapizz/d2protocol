/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import TaxCollectorDialogQuestionExtendedMessage = require('./tax-collector-dialog-question-extended-message');
import BasicNamedAllianceInformations = require('../../../../../types/game/context/roleplay/basic-named-alliance-informations');
declare class AllianceTaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionExtendedMessage {
    static ID: number;
    alliance: BasicNamedAllianceInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataInput): void;
}
export = AllianceTaxCollectorDialogQuestionExtendedMessage;
