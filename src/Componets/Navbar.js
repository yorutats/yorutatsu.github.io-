import React from "react";
import styled from "styled-components";
import Logo from "../images/LOGO.png";

const NavbarBg = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  nav {
    background-color: #0000;
    opacity: 1;
    border: none;

    .navbar-nav > li > a {
      color: white !important;
    }

    .navbar-nav > li.active > a {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .navbar-nav > li.active > a:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .navbar-left {
        float: left;
      }
      
  }
`;

const LogoImg = styled.img`
  position: fixed;
  top: 10px;
  left: 20px;
  height: 5vh;
`;

function Navbar() {
  return (
    <NavbarBg>
      <nav class="navbar navbar-default" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
            >
              <span class="sr-only">選單切換</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <LogoImg img src={Logo} alt="Main Header" />
            </a>
          </div>

          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="/">首頁</a>
              </li>
              <li>
                <a href="/">平台介紹</a>
              </li>
              <li>
                <a href="/">畫家檔案</a>
              </li>
              <li>
                <a href="/">繪圖委託</a>
              </li>
              <li>
                <a href="/">商品資訊</a>
              </li>
            </ul>

    
            <form class="navbar-form navbar-right" role="search">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入關鍵字"
                />
              </div>
              <button type="submit" class="btn btn-default">
                搜尋
              </button>
            </form>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="/">Amos 您好</a>
              </li>
              <li>
                <a href="/">聊天室</a>
              </li>
              <li>
                <a href="/">會員管理</a>
              </li>
              <li>
                <a href="/">登出</a>
              </li>
              <li class="dropdown">
                <a href="/" class="dropdown-toggle" data-toggle="dropdown">
                  繁體中文 <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="/">繁體中文</a>
                  </li>
                  <li>
                    <a href="/">English</a>
                  </li>
                  <li>
                    <a href="/">日本語</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarBg>
  );
}

export default Navbar;
