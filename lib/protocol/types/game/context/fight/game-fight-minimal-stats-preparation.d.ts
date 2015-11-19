/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightMinimalStats = require('./game-fight-minimal-stats');
declare class GameFightMinimalStatsPreparation extends GameFightMinimalStats implements INetworkType {
    static ID: number;
    initiative: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataInput): void;
}
export = GameFightMinimalStatsPreparation;
