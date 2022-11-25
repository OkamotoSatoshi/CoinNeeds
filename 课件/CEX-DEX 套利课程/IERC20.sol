// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;



interface IERC20 {

    function name() external view returns (string memory);  //代币的全称

    function symbol() external view returns (string memory);  //代币的简称

    function balanceOf(address account) external view returns (uint256);  //用户的余额函数

    function decimals() external view returns (uint8);  //精确的小数点

}