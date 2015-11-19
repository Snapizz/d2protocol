/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightFighterInformations = require('../../../../types/game/context/fight/game-fight-fighter-informations');
declare class GameFightSynchronizeMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    fighters: GameFightFighterInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightSynchronizeMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightSynchronizeMessage(param1: ICustomDataInput): void;
}
export = GameFightSynchronizeMessage;
