/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import IdentifiedEntityDispositionInformations = require('../../../types/game/context/identified-entity-disposition-informations');
declare class GameEntitiesDispositionMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    dispositions: IdentifiedEntityDispositionInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameEntitiesDispositionMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameEntitiesDispositionMessage(param1: ICustomDataInput): void;
}
export = GameEntitiesDispositionMessage;
