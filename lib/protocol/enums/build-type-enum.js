var BuildTypeEnum;
(function (BuildTypeEnum) {
    BuildTypeEnum[BuildTypeEnum["RELEASE"] = 0] = "RELEASE";
    BuildTypeEnum[BuildTypeEnum["BETA"] = 1] = "BETA";
    BuildTypeEnum[BuildTypeEnum["ALPHA"] = 2] = "ALPHA";
    BuildTypeEnum[BuildTypeEnum["TESTING"] = 3] = "TESTING";
    BuildTypeEnum[BuildTypeEnum["INTERNAL"] = 4] = "INTERNAL";
    BuildTypeEnum[BuildTypeEnum["DEBUG"] = 5] = "DEBUG";
    BuildTypeEnum[BuildTypeEnum["EXPERIMENTAL"] = 6] = "EXPERIMENTAL";
})(BuildTypeEnum || (BuildTypeEnum = {}));
module.exports = BuildTypeEnum;
