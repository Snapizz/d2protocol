/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
import ProtectedEntityWaitingForHelpInfo = require('../../fight/protected-entity-waiting-for-help-info');
declare class TaxCollectorWaitingForHelpInformations extends TaxCollectorComplementaryInformations implements INetworkType {
    static ID: number;
    waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataInput): void;
}
export = TaxCollectorWaitingForHelpInformations;
