/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameActionMarkedCell = require('./game-action-marked-cell');
declare class GameActionMark implements INetworkType {
    static ID: number;
    markAuthorId: number;
    markTeamId: number;
    markSpellId: number;
    markSpellLevel: number;
    markId: number;
    markType: number;
    markimpactCell: number;
    cells: GameActionMarkedCell[];
    active: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionMark(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionMark(param1: ICustomDataInput): void;
}
export = GameActionMark;
