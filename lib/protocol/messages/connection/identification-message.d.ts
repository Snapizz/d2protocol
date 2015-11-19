/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../custom-data-wrapper';
import VersionExtended = require('../../types/version/version-extended');
declare class IdentificationMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    version: VersionExtended;
    lang: string;
    credentials: number[];
    serverId: number;
    autoconnect: boolean;
    useCertificate: boolean;
    useLoginToken: boolean;
    sessionOptionalSalt: number;
    failedAttempts: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_IdentificationMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_IdentificationMessage(param1: ICustomDataInput): void;
}
export = IdentificationMessage;
