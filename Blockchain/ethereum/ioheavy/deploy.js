var Web3 = require('web3');
//var BigNumber = require('bignumber.js');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8084'));

var ioABI = [{"constant":true,"inputs":[{"name":"key","type":"bytes20"}],"name":"get","outputs":[{"name":"","type":"bytes"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"start_key","type":"uint256"},{"name":"size","type":"uint256"},{"name":"signature","type":"uint256"}],"name":"scan","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"start_key","type":"uint256"},{"name":"size","type":"uint256"},{"name":"signature","type":"uint256"}],"name":"revert_scan","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"start_key","type":"uint256"},{"name":"size","type":"uint256"},{"name":"signature","type":"uint256"}],"name":"write","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"bytes20"},{"name":"value","type":"bytes"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"size","type":"uint256"},{"indexed":false,"name":"signature","type":"uint256"}],"name":"finishWrite","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"size","type":"uint256"},{"indexed":false,"name":"signature","type":"uint256"}],"name":"finishScan","type":"event"}];

var ioContract = web3.eth.contract(ioABI);

web3.personal.unlockAccount(web3.eth.accounts[0], "");

var io = ioContract.new(
  {
    from: web3.eth.accounts[0],
    data: '0x6060604052341561000c57fe5b5b6108318061001c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680635acecc78146100675780636531695d1461011d578063c315d63e1461014f578063d4cd879014610181578063d778e2da146101b3575bfe5b341561006f57fe5b61009460048080356bffffffffffffffffffffffff1916906020019091905050610225565b60405180806020018281038252838181518152602001915080519060200190808383600083146100e3575b8051825260208311156100e3576020820191506020810190506020830392506100bf565b505050905090810190601f16801561010f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561012557fe5b61014d60048080359060200190919080359060200190919080359060200190919050506102ff565b005b341561015757fe5b61017f6004808035906020019091908035906020019091908035906020019091905050610380565b005b341561018957fe5b6101b16004808035906020019091908035906020019091908035906020019091905050610406565b005b34156101bb57fe5b61022360048080356bffffffffffffffffffffffff191690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610487565b005b61022d6106b6565b60006000836bffffffffffffffffffffffff19166bffffffffffffffffffffffff191681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102f25780601f106102c7576101008083540402835291602001916102f2565b820191906000526020600020905b8154815290600101906020018083116102d557829003601f168201915b505050505090505b919050565b6103076106b6565b6000600090505b83811015610339576103296103248287016104d2565b610225565b91505b808060010191505061030e565b7f2e8128137e55a67bef5f6fa7e5c6722c5632e21b8c8bcf6df64bc32239dd6a3f8484604051808381526020018281526020019250505060405180910390a15b5050505050565b6103886106b6565b6000600090505b838110156103bf576103af6103aa60018387890103036104d2565b610225565b91505b808060010191505061038f565b7f2e8128137e55a67bef5f6fa7e5c6722c5632e21b8c8bcf6df64bc32239dd6a3f8484604051808381526020018281526020019250505060405180910390a15b5050505050565b6000600090505b82811015610441576104336104238286016104d2565b61042e8387016104e5565b610487565b5b808060010191505061040d565b7fe849f68c74be0ec2d162615e7bc539b752b8e3e7db7ccb69f93eb19c85597f7e8383604051808381526020018281526020019250505060405180910390a15b50505050565b8060006000846bffffffffffffffffffffffff19166bffffffffffffffffffffffff1916815260200190815260200160002090805190602001906104cc9291906106ca565b505b5050565b60006104dd826105f3565b90505b919050565b6104ed6106b6565b600060646040518059106104fe5750595b908082528060200260200182016040525b509150600090505b60648110156105ec5760c06040519081016040528060968152602001610770609691398160328581151561054757fe5b060181518110151561055557fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000282828151811015156105ae57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b8080600101915050610517565b5b50919050565b60006000821415610626577f303030303030303030303030303030303030303000000000000000000000000090506106ad565b5b60008211156106ac57610100816c01000000000000000000000000900481151561064d57fe5b046c010000000000000000000000000290507301000000000000000000000000000000000000006030600a8481151561068257fe5b0601026c010000000000000000000000000281179050600a828115156106a457fe5b049150610627565b5b8090505b919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061070b57805160ff1916838001178555610739565b82800160010185558215610739579182015b8281111561073857825182559160200191906001019061071d565b5b509050610746919061074a565b5090565b61076c91905b80821115610768576000816000905550600101610750565b5090565b9056006162636465666768696a6b6c6d6e6f707172737475767778792324255e262a28295f2b5b5d7b7d7c3b3a2c2e2f3c3e3f607e6162636465666768696a6b6c6d6e6f707172737475767778792324255e262a28295f2b5b5d7b7d7c3b3a2c2e2f3c3e3f607e6162636465666768696a6b6c6d6e6f707172737475767778792324255e262a28295f2b5b5d7b7d7c3b3a2c2e2f3c3e3f607ea165627a7a72305820baf040f5190cdef8c2583da4c5c67005044fc69d9843f8220d89f5e7df6dd86a0029', 
    gas: '4700000',
    gasPrice: 0
  }, function (e, contract) {
    if (typeof contract.address !== 'undefined') {
      console.log(contract.address);
    }
  });
