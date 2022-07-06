import React from 'react';
import './top.css';
// import $ from 'jquery'

const Top = (props) => {
    
            // </script>
    return(
        <div>
            
            <div class="container">
                <section class="section01 scrollify">
                    <div class="title">Welcome!</div>
                    <div class="content">ShigemotoLab</div>
                </section>
                <section class="section02 scrollify">
                    <div class="title">About this site</div>
                    <div class="content">
                        <p>ここは重本悠貴のポートフォリオです。</p>
                        <p>大学生生活で手がけた制作物、身につけたスキルをスキルをまとめています。</p>
                        <p>私のことを知ってもらうと同時に、自分がやってきたことを振り返るために作りました。</p>
                        <p>ゆっくりしていってください。</p>
                    </div>
                </section>

                <section class="section03 scrollify">
                    <div class="title">About Me</div>
                    <div class = "content">
                    <li>出身:広島県</li>
                    <li>大学:広島工業大学3年生</li>
                    <li>趣味:サッカー、料理、お菓子作り、ゲーム、読書（小説）、映画鑑賞（洋画アクション）</li>
                    </div>
                </section>

                <section class="section04 scrollify">
                    <div class="title">Works</div>
                    <div class = "content">大学４年間でやったこと
                    </div>
                </section>
                
            </div>
        </div>
    )
      
}
export default Top;