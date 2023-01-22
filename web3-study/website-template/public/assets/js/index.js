// window.web3js = new Web3(window.ethereum);
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;
let web3Modal;
let provider;

window.addEventListener('load', async () => {
    init();
    document.querySelector("#ConnectWallet").addEventListener("click", checkConnect);

    
});


function Str16(intnumber){
    res = '0x0'+intnumber.toString(16) ;
    return res
}


function toURL(path,sec){
    setTimeout(function(){
        window.location.href = path ;
    },sec*1000)
}

function remainTime(updateTime){
    var date = new Date();
    var now = date.getTime();
    var leftTime = updateTime - now
    if(leftTime>0){
        h = Math.floor(leftTime/1000/60/60%24);
        m = Math.floor(leftTime/1000/60%60);
        // s = Math.floor(leftTime/1000%60); 
        result =  h+' Hour '+m+' Min'
        return result
    }else{
        return false
    }
}

//alert modal 
function sweetAlert(type,title,text){
    swal(
        {
            title: title,
            text: text,
            type: type,
            showCancelButton: false,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger m-l-10'
        }
    )
}   

async function checkConnect(){
    r = await _checkConnect()
   
    if(!r.chain){
        console.log(r.need,'r.need')
        switchNetwork(r.need);
    } 
    if(!r.addr) Connect();
}


async function Connect() {
    const Web3Modal = window.Web3Modal.default;
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed.binance.org/'
                },
                network: 'binance',
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
        disableInjectedProvider: false,
    });
    provider = await web3Modal.connect()
    const web3 = new Web3(provider);
   
    window.address =  await getAccounts()
    console.log(address)
    $("#ConnectWallet").remove()
}


async function getAccounts() {
    const accounts = await ethereum.enable();
    window.address = accounts[0] ;
    return accounts[0];
}



function notice(type,text=''){
    if(type=='hide'){
       $('.alertify-logs').remove()
    }
    if(type=='wait') alertify.delay(0).log('<div class="row align-items-center ml-3 mr-3"><div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">Loading...</span></div><div class="ml-3">'+text+'</div></div>');
    if(type=='success') alertify.success(text);
    if(type=='error') alertify.error(text);
}



function switchNetwork(need){
    console.log(need,"need")
  if(need == '0x38' && window.ethereum.chainId != '0x38'){  //BSC MAIN
    window.ethereum && window.ethereum .request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x38',
          chainName: 'BSC Main',
          nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18,
          },
          rpcUrls: ['https://bsc-dataseed.binance.org/'],
          blockExplorerUrls: ['https://bscscan.com/'],
        },
      ],
      })
  }

  if(need == '0x61' && window.ethereum.chainId != '0x61'){  //BSC Testnet
    console.log('here')
    window.ethereum && window.ethereum .request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x61',
          chainName: 'BSC Testnet',
          nativeCurrency: {
              name: 'tBNB',
              symbol: 'tBNB',
              decimals: 18,
          },
          rpcUrls: ['https://data-seed-prebsc-2-s3.binance.org/'],
          blockExplorerUrls: ['https://testnet.bscscan.com/'],
        },
      ],
      })
  }
}


function _verifyERC20(address){
  if(address.length != 42){
    alert('address is not available')
    return false
  }else{
    return true 
  }
}



async function _checkConnect(){
    var addr = await getAccounts();
    var chainID = window.ethereum.chainId ;
    var network = $("meta[network]").attr('network');
    var needChain
    if(network == 'testnet'){
        needChain = "0x61"
    }else{
        needChain = "0x38"
    }
    var result = {
        need:needChain
    } ;
    if(_verifyERC20(addr) && chainID == needChain){
        $("#ConnectWallet").addClass('text-light').text(hideString(addr,8))
        result.addr = true ;
        result.chain = true ;
    }

    if(chainID != needChain && _verifyERC20(addr)){
        result.addr = true ;
        result.chain = false ;
    } 
    if(chainID == needChain && !_verifyERC20(addr)){
        result.addr = false ;
        result.chain = false ;
    }

    if(chainID != needChain && !_verifyERC20(addr)){
        result.addr = false ;
        result.chain = false ;
    } 
    return result ;
}


function init() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed.binance.org/'
                },
                network: 'binance',
            }
        }
    };
    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
        disableInjectedProvider: false,
    })
}




window.onresize = function(){
    var node = $(".modal:visible");
    if (node.length) {
        modalOnResize(node);
    }
}
 
function modalOnResize(node){
    var modalHeight = ($(window).height() - $(node).find('.modal-dialog').height()) / 2;
    $(node).find('.modal-dialog').css('margin-top', modalHeight);
}


ethereum.on('accountsChanged', function (accounts) {
  location.reload()
}) 

ethereum.on('networkChanged', function (networkIDstring) {
  location.reload()
})


function hideString(str,number){
  cut = parseInt(number/2) ;
  str = "'" + str + "'"
  len = str.length
  res = str.substring(0,cut) + "..." + str.substring(len-cut)
  var splitFirst = res.split("'");
    return splitFirst.join('');
}



