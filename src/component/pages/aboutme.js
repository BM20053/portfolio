import React from 'react';
import './page.css';
import Image from'./img/img4.jpg'

const Aboutme = () => {
    return(
        <div className="aboutme" id='aboutme'>
            <div className='title'>About me</div>
            <div className='imformation'>
                <h2>【基本情報】</h2>
                <li>名前：重本　悠貴（しげもと　はるき）</li>
                <li>出身地：広島県</li>
                <li>誕生日：2002年3月10日生まれ</li>
                <li>大学：広島工業大学3年生</li>
                <li>Github:https://github.com/BM20053?tab=repositories</li>
            </div>
            <div className='sampleimg3'>
                <input type="image" img src={Image} alt="Image"  width="350" height="450" />
            </div>

            <div className='hobby'>
                <h2>【趣味】</h2>
                <li>サッカー→小学校3年生から高校3年生までの10年間</li>
                <li>読書（小説）→ハリーポッターが一番好き！</li>
                <li>料理→一番好きな料理は豚の角煮！</li>
                <li>お菓子作り→マドレーヌ、カヌレ、プリン、チーズケーキ、モンブランなどを作った</li>
                <li>カフェめぐり→１つのカフェに行くためだけに、岡山や福岡、兵庫に行くくらいは好き！</li>
                <li>スノーボード→小学生の頃から父親に教わった</li>
                <li>ゲーム→大学に入ってパソコンを買ってからはFPSゲームにはまった</li>
            </div>
        </div>
    )
}
export default Aboutme;