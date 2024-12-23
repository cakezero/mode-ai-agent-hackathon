// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import './IUniswapV2Router.sol';
import './IUniswapV2Factory.sol';


contract MemeToken is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * 10 ** 18);
    }
}


contract MemeFactory {
    address public constant UNISWAP_V2_ROUTER =
        0x5951479fE3235b689E392E9BC6E968CE10637A52;

    address public constant UNISWAP_V2_FACTORY = 0x9fBFa493EC98694256D171171487B9D47D849Ba9;

    error MustSendETH();
    error MustSpecifyTokenAmount();

    address public memeToken; // Meme token address
    address public pair;
    address public weth;
    IUniswapV2Router public uniswapRouter;

    constructor(string memory name, string memory symbol, uint256 supply) {
        // deploy the meme token
        MemeToken Token = new MemeToken(name, symbol, supply);
        memeToken = address(Token);
        uniswapRouter = IUniswapV2Router(UNISWAP_V2_ROUTER);

        weth = uniswapRouter.WETH();

        IERC20(memeToken).approve(UNISWAP_V2_ROUTER, type(uint256).max);

        pair = IUniswapV2Factory(UNISWAP_V2_FACTORY).createPair(memeToken, weth);
    }

    // Swap ETH for Meme Token
    function swapETHForMeme() external payable {
        if (msg.value <= 0) revert MustSendETH();

        address[] memory path;
        path = new address[](2);

        path[0] = weth; // ModeETH address
        path[1] = memeToken; // Meme token address

        uniswapRouter.swapExactETHForTokens{value: msg.value}(
            0,
            path,
            msg.sender, // Send Meme tokens to the user
            block.timestamp + 360
        );
    }

    function getTokenAddress() external view returns (address) {
        return memeToken;
    }

    // Swap Meme Token for ETH
    function swapMemeForETH(
        uint256 amountIn
    ) external {
        if (amountIn <= 0) revert MustSpecifyTokenAmount();

        address[] memory path;
        path = new address[](2);

        path[0] = memeToken; // Meme token address
        path[1] = weth; // WETH address

        // Transfer Meme tokens from user to this contract
        IERC20(memeToken).transferFrom(msg.sender, address(this), amountIn);

        // Perform the swap
        uniswapRouter.swapExactTokensForETH(
            amountIn,
            0,
            path,
            msg.sender, // Send ETH to the user
            block.timestamp + 360
        );
    }

    // Add liquidity to the Meme Token and ETH pool
    function addLiquidityETH(
        uint256 amountTokenDesired
    ) external payable {
        if (msg.value <= 0) revert MustSendETH();

        if (amountTokenDesired <= 0) revert MustSpecifyTokenAmount();

        // Transfer Meme tokens from user to this contract
        IERC20(memeToken).transferFrom(msg.sender, address(this), amountTokenDesired);

        // Add liquidity
        uniswapRouter.addLiquidityETH{value: msg.value}(
            memeToken,
            amountTokenDesired,
            0,
            0,
            msg.sender, // LP tokens sent to the user
            block.timestamp + 360
        );
    }

    // Receive function to accept ETH
    receive() external payable {}
}
