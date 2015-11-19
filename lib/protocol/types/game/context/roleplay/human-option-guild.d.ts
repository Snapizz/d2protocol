/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GuildInformations = require('./guild-informations');
import HumanOption = require('./human-option');
declare class HumanOptionGuild extends HumanOption implements INetworkType {
    static ID: number;
    guildInformations: GuildInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_HumanOptionGuild(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_HumanOptionGuild(param1: ICustomDataInput): void;
}
export = HumanOptionGuild;
