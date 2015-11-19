/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PartyIdol = require('../../../types/game/idol/party-idol');
declare class IdolPartyRefreshMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    partyIdol: PartyIdol;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_IdolPartyRefreshMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_IdolPartyRefreshMessage(param1: ICustomDataInput): void;
}
export = IdolPartyRefreshMessage;
