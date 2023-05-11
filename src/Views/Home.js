import React from "react";
import "./Home.css";
import Header from "../images/main_header.svg";
import Entrusted from "../images/entrusted_img.png";
import Purchase from "../images/purchase_img.png";
import ArtistInfo from "../images/artist_info.png";
import Relatedlink from "../images/related_link.png";
import Associate from "../images/associate.svg";
import Footer from "../images/footer.svg";
import Navbar from "../Componets/Navbar";

function Home(props) {
  return (
    <div>
      <div className="main_header">
        <img src={Header} alt="Main Header" />
      </div>
      <div className="main_header">
        <img src={Associate} alt="Main Header" />
      </div>

      <div className="related_link">
        <img src={Relatedlink} alt="Relatedlink" />
      </div>

      <div class="workcontainer">
        <div class="work">
          <img src={ArtistInfo} alt="" />
          <div class="info">
            <button class="btn-98">畫家檔案</button>
          </div>
        </div>
        <div class="work">
          <img src={Entrusted} alt="" />
          <div class="info">
            <button class="btn-98">委託案件</button>
          </div>
        </div>
        <div class="work">
          <img src={Purchase} alt="" />
          <div class="info">
            <button class="btn-98">商品購買</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={Footer} alt="Relatedlink" />

        <p>首頁</p>
        <p>平台介紹</p>
        <p>畫家檔案</p>
        <p>繪圖委託</p>
        <p>商品資訊</p>
        <p>會員管理</p>
        <p>聊天室</p>
        <p>登入</p>
      </div>
    </div>
  );
}

export default Home;
