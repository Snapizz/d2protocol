/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import MapRunningFightDetailsMessage = require('./map-running-fight-details-message');
import NamedPartyTeam = require('../../../../types/game/context/roleplay/party/named-party-team');
declare class MapRunningFightDetailsExtendedMessage extends MapRunningFightDetailsMessage {
    static ID: number;
    namedPartyTeams: NamedPartyTeam[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapRunningFightDetailsExtendedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapRunningFightDetailsExtendedMessage(param1: ICustomDataInput): void;
}
export = MapRunningFightDetailsExtendedMessage;
