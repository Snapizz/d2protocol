/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightExternalInformations = require('../../../../types/game/context/fight/fight-external-informations');
declare class MapRunningFightListMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    fights: FightExternalInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapRunningFightListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapRunningFightListMessage(param1: ICustomDataInput): void;
}
export = MapRunningFightListMessage;
