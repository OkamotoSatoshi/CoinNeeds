// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IPair{
   function getReserves() external view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast);  //获取交易对池子中的token数量
   function token0() external view returns (address);  
   function token1() external view returns (address);
   function factory() external view returns (address);
   function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
   function getPair(address tokenA, address tokenB) external view returns (address pair);
}