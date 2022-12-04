// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {MarketAPI} from "@zondax/filecoin-solidity-api/contracts/v0.8/MarketAPI.sol";
import {CommonTypes} from "@zondax/filecoin-solidity-api/contracts/v0.8/types/CommonTypes.sol";

import {MarketTypes} from "@zondax/filecoin-solidity-api/contracts/v0.8/types/MarketAPI.sol";

contract PerByteDeals {
    uint256 currentId = 0;

    function makeDeal(
        string _cid,
        uint _size,
        bool _verified,
        string _client,
        string _provider,
        string _label,
        uint _start,
        uint _end,
        uint _price_per_epoch,
        uint _provider_collateral,
        uint _client_collateral,
        uint _activated,
        uint _terminated

    ) public {
        MarketTypes.MockDeal memory newDeal;
        newDeal.id = 67;
        newDeal.cid = "baga6ea4seaqlkg6mss5qs56jqtajg5ycrhpkj2b66cgdkukf2qjmmzz6ayksuci";
        newDeal.size = 8388608;
        newDeal.verified = false;
        newDeal.client = "t01109";
        newDeal.provider = "t01113";
        newDeal.label = "mAXCg5AIg8YBXbFjtdBy1iZjpDYAwRSt0elGLF5GvTqulEii1VcM";
        newDeal.start = 25245;
        newDeal.end = 545150;
        newDeal.price_per_epoch = 1100000000000;
        newDeal.provider_collateral = 0;
        newDeal.client_collateral = 0;
        newDeal.activated = 1;
        newDeal.terminated = 0;

        deals[newDeal.id] = newDeal;
    }
    
}
