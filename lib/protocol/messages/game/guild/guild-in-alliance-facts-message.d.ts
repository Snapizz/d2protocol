/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GuildFactsMessage = require('./guild-facts-message');
import BasicNamedAllianceInformations = require('../../../types/game/context/roleplay/basic-named-alliance-informations');
declare class GuildInAllianceFactsMessage extends GuildFactsMessage {
    static ID: number;
    allianceInfos: BasicNamedAllianceInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GuildInAllianceFactsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GuildInAllianceFactsMessage(param1: ICustomDataInput): void;
}
export = GuildInAllianceFactsMessage;
