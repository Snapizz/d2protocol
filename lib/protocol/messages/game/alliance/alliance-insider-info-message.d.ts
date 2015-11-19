/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations');
import GuildInsiderFactSheetInformations = require('../../../types/game/social/guild-insider-fact-sheet-informations');
import PrismSubareaEmptyInfo = require('../../../types/game/prism/prism-subarea-empty-info');
declare class AllianceInsiderInfoMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    allianceInfos: AllianceFactSheetInformations;
    guilds: GuildInsiderFactSheetInformations[];
    prisms: PrismSubareaEmptyInfo[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AllianceInsiderInfoMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AllianceInsiderInfoMessage(param1: ICustomDataInput): void;
}
export = AllianceInsiderInfoMessage;
