/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import PaddockContentInformations = require('../../../types/game/paddock/paddock-content-informations');
declare class GuildInformationsPaddocksMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    nbPaddockMax: number;
    paddocksInformations: PaddockContentInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInformationsPaddocksMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInformationsPaddocksMessage(param1: ICustomDataInput): void;
}
export = GuildInformationsPaddocksMessage;
