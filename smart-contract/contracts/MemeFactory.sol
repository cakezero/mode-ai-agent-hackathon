// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import '../interface/IUniswapV2Router.sol';

contract MemeFactory {
    address private constant UNISWAP_V2_ROUTER =
        0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;

    address private constant USDC =
        0xA0b86991C6218B36c1D19D4a2e9Eb0cE3606eB48; // USDC token address on Mode Network

    error MustSendETH();
    error MustSpecifyTokenAmount();
    error MustSpecifyUSDCAmount();


    address public memeToken; // Meme token address
    IUniswapV2Router private uniswapRouter;

    constructor(address _memeToken) {
        memeToken = _memeToken;
        uniswapRouter = IUniswapV2Router(UNISWAP_V2_ROUTER);
    }

    // Swap ETH for Meme Token
    function swapETHForMeme(
        uint256 amountOutMin
    ) external payable {
        if (msg.value < 0) revert MustSendETH();

        address[] memory path;
        path = new address[](2);

        path[0] = uniswapRouter.WETH(); // ModeETH address
        path[1] = memeToken; // Meme token address

        uniswapRouter.swapExactETHForTokens{value: msg.value}(
            amountOutMin,
            path,
            msg.sender, // Send Meme tokens to the user
            block.timestamp + 360
        );
    }

    // Swap Meme Token for ETH
    function swapMemeForETH(
        uint256 amountIn,
        uint256 amountOutMin
    ) external {
        if (amountIn < 0) revert MustSpecifyTokenAmount();

        address[] memory path;
        path = new address[](2);

        path[0] = memeToken; // Meme token address
        path[1] = uniswapRouter.WETH(); // WETH address

        // Transfer Meme tokens from user to this contract
        IERC20(memeToken).transferFrom(msg.sender, address(this), amountIn);

        // Allow the uniswap router to spend Meme tokens
        IERC20(memeToken).approve(UNISWAP_V2_ROUTER, amountIn);

        // Perform the swap
        uniswapRouter.swapExactTokensForETH(
            amountIn,
            amountOutMin,
            path,
            msg.sender, // Send ETH to the user
            block.timestamp + 360
        );
    }

    // Swap USDC for Meme Token
    function swapUSDCForMeme(
        uint256 amountIn,
        uint256 amountOutMin
    ) external {
        if (amountIn < 0) revert MustSpecifyUSDCAmount();

        address[] memory path;
        path = new address[](2);

        path[0] = USDC; // USDC address
        path[1] = memeToken; // Meme token address

        // Transfer USDC from user to this contract
        IERC20(USDC).transferFrom(msg.sender, address(this), amountIn);

        // Allow the uniswap router to spend USDC
        IERC20(USDC).approve(UNISWAP_V2_ROUTER, amountIn);

        // Perform the swap
        uniswapRouter.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            msg.sender, // Send Meme tokens to the user
            block.timestamp + 360
        );
    }

    // Swap Meme Token for USDC
    function swapMemeForUSDC(
        uint256 amountIn,
        uint256 amountOutMin
    ) external {
        if (amountIn < 0) revert MustSpecifyTokenAmount();

        address[] memory path;
        path = new address[](2);

        path[0] = memeToken; // Meme token address
        path[1] = USDC; // USDC address

        // Transfer Meme tokens from user to this contract
        IERC20(memeToken).transferFrom(msg.sender, address(this), amountIn);

        // Allow the uniswap router to spend Meme tokens
        IERC20(memeToken).approve(UNISWAP_V2_ROUTER, amountIn);

        // Perform the swap
        uniswapRouter.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            msg.sender, // Send USDC to the user
            block.timestamp + 360
        );
    }

    // Get estimated Meme Tokens for ETH
    function getEstimatedMemeForETH(
        uint256 ethAmount
    ) external view returns (uint256[] memory amounts) {
        
        address[] memory path;
        path = new address[](2);

        path[0] = uniswapRouter.WETH(); // WETH address
        path[1] = memeToken;

        return uniswapRouter.getAmountsOut(ethAmount, path);
    }

    // Get estimated ETH for Meme Tokens
    function getEstimatedETHForMeme(
        uint256 memeAmount
    ) external view returns (uint256[] memory amounts) {

        address[] memory path;
        path = new address[](2);

        path[0] = memeToken;
        path[1] = uniswapRouter.WETH();

        return uniswapRouter.getAmountsOut(memeAmount, path);
    }

    // Get estimated USDC for Meme Tokens
    function getEstimatedUSDCForMeme(
        uint256 memeAmount
    ) external view returns (uint256[] memory amounts) {

        address[] memory path;
        path = new address[](2);

        path[0] = memeToken;
        path[1] = USDC;

        return uniswapRouter.getAmountsOut(memeAmount, path);
    }

    // Get estimated Meme Tokens for USDC
    function getEstimatedMemeForUSDC(
        uint256 usdcAmount
    ) external view returns (uint256[] memory amounts) {
        
        address[] memory path;
        path = new address[](2);

        path[0] = USDC;
        path[1] = memeToken;

        return uniswapRouter.getAmountsOut(usdcAmount, path);
    }

    // Add liquidity to the Meme Token and ETH pool
    function addLiquidityETH(
        uint256 amountTokenDesired,
        uint256 amountTokenMin,
        uint256 amountETHMin
    ) external payable {
        if (msg.value < 0) revert MustSendETH();

        if (amountTokenDesired < 0) revert MustSpecifyTokenAmount();

        // Transfer Meme tokens from user to this contract
        IERC20(memeToken).transferFrom(msg.sender, address(this), amountTokenDesired);

        // Allow the uniswap router to spend Meme tokens
        IERC20(memeToken).approve(UNISWAP_V2_ROUTER, amountTokenDesired);

        // Add liquidity
        uniswapRouter.addLiquidityETH{value: msg.value}(
            memeToken,
            amountTokenDesired,
            amountTokenMin,
            amountETHMin,
            msg.sender, // LP tokens sent to the user
            block.timestamp + 360
        );
    }

    // Add liquidity to the Meme Token and USDC pool
    function addLiquidityUSDC(
        uint256 amountTokenDesired,
        uint256 amountUSDCDesired,
        uint256 amountTokenMin,
        uint256 amountUSDCMin
    ) external {
        if (amountTokenDesired < 0) revert MustSpecifyTokenAmount();
        
        if (amountUSDCDesired < 0) revert MustSpecifyUSDCAmount();

        // Transfer Meme tokens from user to this contract
        IERC20(memeToken).transferFrom(msg.sender, address(this), amountTokenDesired);

        // Transfer USDC from user to this contract
        IERC20(USDC).transferFrom(msg.sender, address(this), amountUSDCDesired);

        // Allow the uniswap router to spend Meme tokens and USDC
        IERC20(memeToken).approve(UNISWAP_V2_ROUTER, amountTokenDesired);
        IERC20(USDC).approve(UNISWAP_V2_ROUTER, amountUSDCDesired);

        // Add liquidity
        uniswapRouter.addLiquidity(
            memeToken,
            USDC,
            amountTokenDesired,
            amountUSDCDesired,
            amountTokenMin,
            amountUSDCMin,
            msg.sender, // LP tokens sent to the user
            block.timestamp + 360
        );
    }

    // Receive function to accept ETH
    receive() external payable {}
}
