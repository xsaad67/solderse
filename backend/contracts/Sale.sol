// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "./Usage.sol";

contract Sale is ReentrancyGuard, Context, Ownable {
    using SafeMath for uint256;

    mapping(address => uint256) public _contributions;

    IERC20 public _token;
    uint256 private _tokenDecimals;
    address payable public _wallet;
    uint256 public _rate;
    uint256 public _weiRaised;
    uint256 public endICO;
    uint public minPurchase;
    uint public maxPurchase;
    uint public hardCap;
    uint public softCap;
    uint public availableTokensICO;
    bool public startRefund = false;
    uint256 public refundStartDate;

    event TokensPurchased(
        address purchaser,
        address beneficiary,
        uint256 value,
        uint256 amount
    );
    event Refund(address recipient, uint256 amount);

    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token,
        uint256 tokenDecimals
    ) {
        require(rate > 0, "Pre-Sale: rate is 0");
        require(wallet != address(0), "Pre-Sale: wallet is the zero address");
        require(
            address(token) != address(0),
            "Pre-Sale: token is the zero address"
        );

        _rate = rate;
        _wallet = wallet;
        _token = token;
        _tokenDecimals = tokenDecimals;
    }

    receive() external payable {
        if (endICO > 0 && block.timestamp < endICO) {
            buyTokens();
        } else {
            endICO = 0;
            revert("Pre-Sale is closed");
        }
    }

    //200000000000000000

    //Start Pre-Sale
    function startICO(
        uint endDate,
        uint _minPurchase,
        uint _maxPurchase,
        uint _softCap,
        uint _hardCap
    ) external onlyOwner icoNotActive {
        startRefund = false;
        refundStartDate = 0;
        availableTokensICO = _token.balanceOf(address(this)); //presale Contract Address
        require(endDate > block.timestamp, "duration should be > 0");
        require(_softCap < _hardCap, "Softcap must be lower than Hardcap");
        require(
            _minPurchase < _maxPurchase,
            "minPurchase must be lower than maxPurchase"
        );
        require(availableTokensICO > 0, "availableTokens must be > 0");
        require(_minPurchase > 0, "_minPurchase should > 0");
        endICO = endDate;
        minPurchase = _minPurchase;
        maxPurchase = _maxPurchase;
        softCap = _softCap;
        hardCap = _hardCap;
        _weiRaised = 0;
    }

    function stopICO() external onlyOwner icoActive {
        endICO = 0;
        if (_weiRaised >= softCap) {
            _forwardFunds();
        } else {
            startRefund = true;
            refundStartDate = block.timestamp;
        }
    }

    function _preValidatePurchase(
        address beneficiary,
        uint256 weiAmount
    ) internal view {
        require(
            beneficiary != address(0),
            "Crowdsale: beneficiary is the zero address"
        );
        require(weiAmount != 0, "Crowdsale: weiAmount is 0");
        require(
            weiAmount >= minPurchase,
            "have to send at least Minimum Purchase"
        );
        require(
            _contributions[beneficiary].add(weiAmount) <= maxPurchase,
            "Can't buy more than: Maximum Purchase"
        );
        require((_weiRaised + weiAmount) <= hardCap, "Hard Cap reached");
        this;
    }

    function buyTokens() public payable nonReentrant icoActive {
        uint256 weiAmount = msg.value;
        _preValidatePurchase(_msgSender(), weiAmount);
        uint256 tokens = _getTokenAmount(weiAmount);
        _weiRaised = _weiRaised.add(weiAmount);
        availableTokensICO = availableTokensICO - tokens;
        _contributions[_msgSender()] = _contributions[_msgSender()].add(
            weiAmount
        );
        emit TokensPurchased(_msgSender(), msg.sender, weiAmount, tokens);
        claimTokens();
        _forwardFunds();
    }

    function claimTokens() internal {
        uint256 tokensAmt = _getTokenAmount(_contributions[msg.sender]);
        _contributions[msg.sender] = 0;
        _token.transfer(msg.sender, tokensAmt);
    }

    function _forwardFunds() internal {
        // _wallet.transfer(msg.value);
        payable(_wallet).transfer(address(this).balance);
    }

    function _getTokenAmount(uint256 weiAmount) public view returns (uint256) {
        return weiAmount.mul(_rate).div(10 ** _tokenDecimals);
    }

    function checkTotalFundsAvailable() internal view returns (uint256) {
        return (msg.value);
    }

    function withdraw() external onlyOwner icoNotActive {
        require(
            startRefund == false || (refundStartDate + 3 days) < block.timestamp
        );
        require(address(this).balance > 0, "Contract has no money");
        _wallet.transfer(address(this).balance);
    }

    function checkContribution(address addr) public view returns (uint256) {
        return _contributions[addr];
    }

    function setRate(uint256 newRate) external onlyOwner icoNotActive {
        _rate = newRate;
    }

    function setAvailableTokens(uint256 amount) public onlyOwner icoNotActive {
        availableTokensICO = amount;
    }

    function weiRaised() public view returns (uint256) {
        return _weiRaised;
    }

    function setWalletReceiver(address payable newWallet) external onlyOwner {
        _wallet = newWallet;
    }

    function setHardCap(uint256 value) external onlyOwner {
        hardCap = value;
    }

    function setSoftCap(uint256 value) external onlyOwner {
        softCap = value;
    }

    function setMaxPurchase(uint256 value) external onlyOwner {
        maxPurchase = value;
    }

    function setMinPurchase(uint256 value) external onlyOwner {
        minPurchase = value;
    }

    //This will transfer token to the wallet which is defined already
    function takeTokens(IERC20 tokenAddress) public onlyOwner icoNotActive {
        IERC20 tokenBEP = tokenAddress;

        uint256 tokenAmt = tokenBEP.balanceOf(address(this));
        require(tokenAmt > 0, "BEP-20 balance is 0");
        tokenBEP.transfer(_wallet, tokenAmt);
    }

    function refundMe() public icoNotActive {
        require(startRefund == true, "no refund available");
        uint amount = _contributions[msg.sender];
        if (address(this).balance >= amount) {
            _contributions[msg.sender] = 0;
            if (amount > 0) {
                address payable recipient = payable(msg.sender);
                recipient.transfer(amount);
                emit Refund(msg.sender, amount);
            }
        }
    }

    modifier icoActive() {
        require(
            endICO > 0 && block.timestamp < endICO && availableTokensICO > 0,
            "ICO must be active"
        );
        _;
    }

    modifier icoNotActive() {
        require(endICO < block.timestamp, "ICO should not be active");
        _;
    }
}
