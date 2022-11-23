
import React, { useState } from "react";
import Image  from "next/image"
import axios from "axios" ;
import { ethers } from "ethers";
import { addNetwork ,toRPC} from "/src/commonFun/web3";
import { uniqueArray} from "/src/commonFun/common";
import {chainIds,extraRpcs} from "/src/switchNet/config"
import * as $ from 'jquery';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';

let provider = null ;



export async function getStaticProps() {
    const chains = await axios("https://chainid.network/chains.json");
    const chainTvls = await axios("https://api.llama.fi/chains");
    
    for(let key in extraRpcs){
        for(let i in chains.data){
            if( chains.data[i].chainId == parseInt(key) && extraRpcs[key].rpcs) {
                var rpc1 = chains.data[i].rpc 
                var rpc2 =  extraRpcs[key].rpcs
                chains.data[i].rpc = uniqueArray([...rpc1, ...rpc2])
            }
        }
    }

    const data = {
        chains:chains.data,
        chainTvls:chainTvls.data,
    }
    return  {props:data}
} 




export default  function SwitchNet(props){
    
    const [netStatus,setNetStatus] =  React.useState(false);
    const [chainList,setChainlist] = React.useState(props.chains)
    const initDetail = {name:"",rpc:[],block:[],delay:[],score:[],display:"none",loading:true}
    const [chainDetail,setChainDetail] = React.useState(initDetail)
    const [open, setOpen] = React.useState(false);  //模态框
    const [alert, setAlert] = React.useState({open:false,message:"",type:""});


    
    // RPC节点模态框关闭
    const detailClose = () => {
        setChainDetail(initDetail)  
        setOpen(false)
    };

    const alertClose = () => {
        setAlert({open:false,message:"",type:""});
    };

    
    const  AddNetButton = (chain) =>{
       return (<>
            <a className="btn btn-outline-primary waves-effect waves-light" onClick={async()=>{
                if(netStatus){  //已经连接钱包
                    let res = await addNetwork(chain.options)
                    if(res.status) setAlert({open:true,message:"网络切换成功!",type:"success"})
                    if(!res.status) setAlert({open:true,message:"网络切换失败!",type:"error"})
                }else{
                    if(window.ethereum == undefined){
                        setAlert({open:true,message:"未安装钱包！",type:"error"})
                    }else{
                        provider = new ethers.providers.Web3Provider(window.ethereum);
                        let account = await window.ethereum.send('eth_requestAccounts')
                        setAlert({open:true,message:"连接成功!",type:"success"})
                        setNetStatus(true);
                    }
                }
                
            }}> {netStatus ? "添加网络":"连接钱包"}</a>
            <a className="btn btn-outline-info waves-effect waves-light ml-3"  onClick={async()=>{
                setOpen(true)
                let newDetail = chain.options ;
                let blockArr = [] ; let delayArr = [] ; let scoreArr = [] ; let rpcArr = []
                for (let i = 0; i < newDetail.rpc.length; i++) {
                    let rpc = toRPC(newDetail.rpc[i])
                    rpcArr.push(rpc)
                    provider = new ethers.providers.JsonRpcProvider(rpc)
                    let start = (new Date()).getTime()
                    try{
                        let block = await provider.getBlockNumber();
                        let end = (new Date()).getTime()
                        blockArr.push(block)
                        delayArr.push((end-start)/1000)
                        scoreArr.push(["spinner-grow text-success"])
                    }catch{
                        blockArr.push(["节点错误"])
                        delayArr.push(["超时"])
                        scoreArr.push(["spinner-grow text-danger"])
                    }
                }
                newDetail.block = blockArr
                newDetail.delay = delayArr
                newDetail.score = scoreArr
                newDetail.rpc   = rpcArr
                console.log(newDetail,"new")
                setChainDetail(newDetail)
            }}>详  情</a>
       </>)
    }

    const search = (e) =>{
        let arr = props.chains;
        let word = $(e.target).val()
        let k = word.toUpperCase()
        let result = [] ;
        arr.forEach(item => {
            if(item.name.toUpperCase().indexOf(k) !== -1 || item.shortName.toUpperCase().indexOf(k) !== -1 || item.nativeCurrency.symbol.toUpperCase().indexOf(k) !== -1){
                result.push(item)
            }
        });
        setChainlist(result)
    }

    const addRPC = async (e) =>{
        let rpc = $(e.target).attr("rpc-data")
        chainDetail.rpc = [rpc]
        let res = await addNetwork(chainDetail)
        if(res.status){
            setAlert({open:true,message:"切换成功!",type:"success"})
        }else{
            setAlert({open:true,message:"切换失败!",type:"error"})
        }
    }

    const DetailTable = () =>{
        return(<>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">RPC节点</TableCell>
                                    <TableCell align="center">区块高度</TableCell>
                                    <TableCell align="center">测速</TableCell>
                                    <TableCell align="center">状态</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {chainDetail.rpc.map((row,k) => (
                                <TableRow
                                key={row}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{row}</TableCell>
                                    <TableCell align="center">{chainDetail.block[k]}</TableCell>
                                    <TableCell align="center">{chainDetail.delay[k]}s</TableCell>
                                    <TableCell align="center">
                                        <div className={chainDetail.score[k]} role="status" style={{display:chainDetail.display}}>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <button rpc-data={row} onClick={(e)=>{addRPC(e)}} className="btn btn-outline-success waves-effect waves-light ml-3">添加网络</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContentText>
            </DialogContent>
        </>)
    }

    const Modalset = () => {
        return (<>
        
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={{md:10}}
            >
                <DialogTitle id="alert-dialog-title">{chainDetail.name}</DialogTitle>
                {
                    chainDetail.loading ? (
                        <Skeleton  width="100%">
                            <DetailTable />
                        </Skeleton>
                    ) :(
                        <DetailTable />
                    )
                }<Skeleton>

                </Skeleton>
                    
                <DialogActions>
                <Button className="btn btn-primary" variant="contained"  onClick={detailClose}>关  闭</Button>
                </DialogActions>
            </Dialog>                
        </>)
    }

    return(
    <>
    
        <Snackbar anchorOrigin={{ vertical: 'bottom',horizontal: 'right' }}  open={alert.open}  autoHideDuration={2000}  onClose={alertClose}>
            <Alert  severity={alert.type} variant="filled" sx={{ width: '100%' }} >
                {alert.message}
            </Alert>
        </Snackbar>
        <div className="row justify-content-end mt-5">
            <div className="col-12 col-lg-4 input-group mt-2">
                <span className="input-group-prepend">
                    <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                </span>
                <input type="text" onChange={(e) => {search(e)}} className="form-control" placeholder={`可搜索${chainList.length}条链`} />
            </div>
        </div>
        <div className="mt-2">
            <div className="row justify-content-center mt-3">
                {
                    chainList.map((chain,index) => (
                        <div className="col-lg-3 col-12 mt-5"  key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-avatar">
                                    </div>
                                    <div className="row justify-content-center text-center ">
                                        <div className="col-12 mb-2">
                                            <a>
                                                
                                                <h3 className="card-title">
                                                    <Image className="rounded-circle mr-3"  src={chainIds[chain.chainId] != undefined ? `https://defillama.com/chain-icons/rsz_${chainIds[chain.chainId]}.jpg`  : "/unknown-logo.png"} width={36}  height={36} alt={chain.name + " LOGO"} />
                                                    {chain.name}
                                                </h3>
                                            </a>
                                            
                                        </div>
                                        <div className="col-6 text-muted">ChainID
                                            <h4>{chain.chainId}</h4>
                                        </div>
                                        <div className="col-6 text-muted">代币
                                            <h4>{chain.shortName.toUpperCase()}</h4>
                                        </div>
                                    </div>
                                    <div className="text-center text-light mt-2 mb-2">
                                        {chain.explorers !== undefined ? (chain.explorers[0] !==undefined ? <a href={chain.explorers[0].url} target="_blank" rel="noreferrer" className="badge badge-pill badge-primary mr-2">浏览器</a>:null ) : null} 
                                        <a  href={chain.infoURL} target="_blank" rel="noreferrer"  className="badge badge-pill badge-warning mr-2">官网</a>
                                        { chain.faucets.length > 0 ? <a href={chain.faucets[0]} target="_blank" rel="noreferrer" className="badge badge-pill badge-primary mr-2">水龙头</a> : null}
                                        { chain.rpc.length > 0 ? <a  target="_blank" rel="noreferrer" className="badge badge-pill badge-primary mr-2">RPC节点({chain.rpc.length})</a> : null}
                                    </div>
                                    <div className="row justify-content-center mt-3">
                                        <AddNetButton options={chain} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <Modalset />
    </>)

    




}