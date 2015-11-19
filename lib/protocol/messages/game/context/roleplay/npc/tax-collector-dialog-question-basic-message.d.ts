/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import BasicGuildInformations = require('../../../../../types/game/context/roleplay/basic-guild-informations');
declare class TaxCollectorDialogQuestionBasicMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    guildInfo: BasicGuildInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorDialogQuestionBasicMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorDialogQuestionBasicMessage(param1: ICustomDataInput): void;
}
export = TaxCollectorDialogQuestionBasicMessage;
