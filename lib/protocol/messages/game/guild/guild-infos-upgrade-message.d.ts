/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class GuildInfosUpgradeMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    maxTaxCollectorsCount: number;
    taxCollectorsCount: number;
    taxCollectorLifePoints: number;
    taxCollectorDamagesBonuses: number;
    taxCollectorPods: number;
    taxCollectorProspecting: number;
    taxCollectorWisdom: number;
    boostPoints: number;
    spellId: number[];
    spellLevel: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInfosUpgradeMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInfosUpgradeMessage(param1: ICustomDataInput): void;
}
export = GuildInfosUpgradeMessage;
