/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightFighterLightInformations = require('../../../../types/game/context/fight/game-fight-fighter-light-informations');
declare class MapRunningFightDetailsMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    fightId: number;
    attackers: GameFightFighterLightInformations[];
    defenders: GameFightFighterLightInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapRunningFightDetailsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapRunningFightDetailsMessage(param1: ICustomDataInput): void;
}
export = MapRunningFightDetailsMessage;
