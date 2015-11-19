/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import TaxCollectorBasicInformations = require('../../../../types/game/guild/tax/tax-collector-basic-informations');
declare class TaxCollectorMovementMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    hireOrFire: boolean;
    basicInfos: TaxCollectorBasicInformations;
    playerId: number;
    playerName: string;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorMovementMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorMovementMessage(param1: ICustomDataInput): void;
}
export = TaxCollectorMovementMessage;
