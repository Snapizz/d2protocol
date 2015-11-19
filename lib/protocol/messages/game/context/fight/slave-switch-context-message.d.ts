/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import SpellItem = require('../../../../types/game/data/items/spell-item');
import CharacterCharacteristicsInformations = require('../../../../types/game/character/characteristic/character-characteristics-informations');
import Shortcut = require('../../../../types/game/shortcut/shortcut');
declare class SlaveSwitchContextMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    masterId: number;
    slaveId: number;
    slaveSpells: SpellItem[];
    slaveStats: CharacterCharacteristicsInformations;
    shortcuts: Shortcut[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SlaveSwitchContextMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SlaveSwitchContextMessage(param1: ICustomDataInput): void;
}
export = SlaveSwitchContextMessage;
