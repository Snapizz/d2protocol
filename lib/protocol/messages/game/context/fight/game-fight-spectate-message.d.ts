/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightDispellableEffectExtendedInformations = require('../../../../types/game/action/fight/fight-dispellable-effect-extended-informations');
import GameActionMark = require('../../../../types/game/actions/fight/game-action-mark');
import Idol = require('../../../../types/game/idol/idol');
declare class GameFightSpectateMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    effects: FightDispellableEffectExtendedInformations[];
    marks: GameActionMark[];
    gameTurn: number;
    fightStart: number;
    idols: Idol[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightSpectateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightSpectateMessage(param1: ICustomDataInput): void;
}
export = GameFightSpectateMessage;
