/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations');
import BasicAllianceInformations = require('../../../types/game/context/roleplay/basic-alliance-informations');
declare class KohUpdateMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    alliances: AllianceInformations[];
    allianceNbMembers: number[];
    allianceRoundWeigth: number[];
    allianceMatchScore: number[];
    allianceMapWinner: BasicAllianceInformations;
    allianceMapWinnerScore: number;
    allianceMapMyAllianceScore: number;
    nextTickTime: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_KohUpdateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_KohUpdateMessage(param1: ICustomDataInput): void;
}
export = KohUpdateMessage;
