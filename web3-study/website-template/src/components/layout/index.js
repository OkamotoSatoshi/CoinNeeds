
import Image from "next/image"
import Link from "next/link"
import Script from 'next/script'


export default function Layout({children}){
    return (
    <>
        <div id="wrapper">
            <div className="left side-menu">
                <button type="button" className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                    <i className="ion-close"></i>
                </button>
                <div className="topbar-left">
                    <div className="text-center">
                        <a href="" className="logo">
                            <Image src="/assets/images/logo-lg.png" width={72} height={16} className="logo-large" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="sidebar-inner niceScrollleft">
                    <div id="sidebar-menu">
                        <ul>
                            <li className="menu-title">应    用</li>
                            <li className="has_sub">
                                <a className="waves-effect"><i className="mdi mdi-coin"></i><span>CEX-DEX套利</span><span className="float-right"></span></a>
                                
                            </li>
                            <li className="has_sub">
                                <a className="waves-effect"><i className="mdi mdi-certificate"></i><span>内容付费</span><span className="float-right"><i className="mdi mdi-chevron-right"></i></span></a>
                                <ul className="list-unstyled">
                                    <li><a  href="/w2e/profile.html">个人中心</a></li>
                                    <li><a  href="/w2e/write.html">发布作品</a></li>
                                </ul>
                            </li>
                            <li className="menu-title">实用工具</li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.stoneplan.org/transfer/index.html" className="waves-effect">
                                    <i className="mdi mdi-coin"></i> <span>批量转账</span>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.stoneplan.org/switchNet" className="waves-effect">
                                    <i className="mdi mdi-coin"></i> <span>网络切换</span>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.stoneplan.org/createERC20/index.html" className="waves-effect">
                                    <i className="mdi mdi-wallet-giftcard"></i> <span>批量生成钱包</span>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://futureworld.app/approve" className="waves-effect">
                                    <i className="mdi mdi-security"></i> <span>钱包安全检测</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                    <div className="menu-footer badge-primary">
                        <div className="float-left font-16 mt-1 ml-2">
                            <Image src="/assets/images/logo-128.png" width={72} height={16} className="logo-large" alt="footer" />
                            <a>$ --</a> 
                        </div>
                        <div className="float-right text-center mr-3 icon-light">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/stone_web3"><i className="mdi mdi-twitter"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://t.me/stone_web3"><i className="mdi mdi-telegram"></i></a>
                            <a target="_blank" rel="noreferrer" href="http://www.stoneplan.org"><i className="mdi mdi-web"></i></a>
                            <a target="_blank" rel="noreferrer" href="#"><i className="fas fa-book"></i></a>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="content-page">
                <div className="content">
                    <div className="topbar">

                        <nav className="navbar-custom">

                            <ul className="list-inline float-right mb-0">
                                
                                <li className="list-inline-item dropdown notification-list">
                                    <a className="nav-link dropdown-toggle arrow-none waves-effect text-white" data-toggle="dropdown" href="#" role="button"
                                        aria-haspopup="false" aria-expanded="false">
                                        <Image src="/assets/images/flags/us_flag.jpg" className="ml-2" height="16" width="24" alt=""/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right language-switch">
                                        <a className="dropdown-item" href="#"><Image src="/assets/images/flags/italy_flag.jpg" alt="" width="24" height="16"/><span> English </span></a>
                                        <a className="dropdown-item" href="#"><Image src="/assets/images/flags/french_flag.jpg" alt="" width="24" height="16"/><span> 简体中文 </span></a>
                                    </div>
                                </li>
                                

                                <li className="list-inline-item mr-4 text-lg" >
                                    <span className="badge badge-danger mt-1">Connect Wallet</span>
                                </li>

                            </ul>

                            <ul className="list-inline menu-left mb-0">
                                <li className="float-left">
                                    <button className="button-menu-mobile open-left waves-light waves-effect">
                                        <i className="mdi mdi-menu"></i>
                                    </button>
                                </li>                                
                            </ul>
                            <div className="clearfix"></div>
                        </nav>
                    </div>
                    <div className="page-content-wrapper ">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                </div> 
                <footer className="footer">© 冈本聪 <a href="http://www.stoneplan.org" title="">教程展示平台</a></footer>
            </div>
        </div>

        
        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/cookie.min.js"></script>
        <script src="/assets/js/popper.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/jquery.nicescroll.js"></script>
        <script src="/assets/js/jquery.nicescroll.js"></script>
        <script src="/assets/js/app.js"></script>
    </>
    )
}