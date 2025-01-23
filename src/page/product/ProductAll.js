import React from 'react';
import Bgimg from "../../image/backimage.jpg";
import Bookimg from "../../image/time.png";
import title from "../../image/booktitle.png";
import amazon from "../../image/amazon.png"

const ProductAll = () => {
    const containerStyle = {
        backgroundImage: `url(${Bgimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        position: 'relative',
    };

    const bookImageStyle = {
        backgroundImage: `url(${Bookimg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginBottom: '-30px',
        width: '130px',
        height: '300px',
        zIndex: 2,
    };

    const bookTitleStyle = {
        backgroundImage: `url(${title})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginBottom: '-30px',
        marginLeft:'10px',
        width: '120px',
        height: '340px',
        zIndex: 2,
    };
    const amazonStyle ={
        backgroundImage: `url(${amazon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginBottom: '-30px',
        marginLeft:'10px',
        width: '250px',
        height: '100px',
        zIndex: 2,

    }

    const caseStyle = {
        width: '80%',
        minHeight: '90vh',
        margin: 30,
        padding: 0,
        border: '5px solid white',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        overflow: 'hidden',

    };

    const contentStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px',
    };

    const bookContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '-30px',
    };

    const subdivStyle = {
        fontSize: "11px",
        width: '80%',
        minHeight: '10vh',
        display: 'flex',
     //   backgroundColor: 'black',
        justifyContent: 'left',
        alignItems: 'left',
    };

    const footerStyle = {
        textAlign: 'center',
        fontSize: '10px',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        backgroundColor: 'transparent',
        color: 'white',
        zIndex: 1,
        marginTop: '10px',
        marginBottom: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={caseStyle}>
                <div style={contentStyle}>
                    <div style={{ padding: '10px', textAlign: 'center' }}> {/* 중앙 정렬을 위한 스타일 추가 */}
                        <h1 style={{ margin: '0' }}>신간 도서</h1> {/* 제목에 마진 제거 */}
                        <div style={bookContainerStyle}>
                            <div style={bookImageStyle}></div>
                            <div style={bookTitleStyle}></div>
                        </div>
                        <div style={amazonStyle}></div>
                    </div>
                    <hr style={{ border: '1px solid white', width: '80%', margin: '10px auto' }}/>
                    <div style={{textAlign:"left"}}>
                    <div>
                        <a style={{ fontWeight: 'bold' ,fontSize:"12px" }}>ISBN : </a>
                        <a style={{fontSize:"12px" }}>9791198183033</a>
                    </div>
                        <div>
                            <a style={{ fontWeight: 'bold' ,fontSize:"12px"  }}>출간일 : </a>
                            <a style={{fontSize:"12px" }}>2025년 1월 23일</a>
                        </div>
                        <div>
                            <a style={{ fontWeight: 'bold' ,fontSize:"12px"  }}>쪽수 : </a>
                            <a style={{fontSize:"12px" }}>306쪽</a>
                        </div>


                    </div>
                    <hr style={{ border: '1px solid white', width: '80%', margin: '10px auto' }}/>
                    <div style={subdivStyle}>
                        편지를 다 읽을 무렵에는 이미 쏟아지는 눈물을 멈출 수 없었다.<br/>
                        아스카는 간신히 울음을 참으며 자리에서 일어나 화장실로 뛰어 들어갔다. 화장실 안으로 들어가 문을 닫고 처음부터 다시 편지를 읽었다.<br/><br/><br/>
                        중학교 시절에 있었던 일들이 새록새록 떠올랐다. 10년이 지나도록 잊고 지낸 수많은 추억이 선명하게 되살아났다.<br/>
                        사춘기 소녀의 풋풋함이 잔뜩 묻어나는 필적이 현재의 자신을 힘껏 응원하는 것 같아 그 시절로 돌아가 어린 자신을 꼭 안아주고 싶었다.<br/>
                        아스카는 흘러넘치는 눈물을 닦는 것도 잊어버린 채 편지를 마저 읽고는 여린 목소리로<br/>
                        “미안해, 정말 미안해.”
                        하고 끊임없이 사과했다.<br/><br/><br/>
                        더 소중히 여겨야 했다.<br/>
                        그 아이의 순수한 꿈과 장래 희망을, 그리고 미래를 향한 부푼 기대를.<br/>
                        이 모든 것을 저버린 자신이 너무나 한심스럽고 부끄러워 속이 상했다. 어린 시절의 나에게 그저 미안하기만 해서 연신 사과하며 눈물을 흘렸다.<br/><br/><br/>
                        “미안해. 엄마도 나 때문에….”<br/><br/>
                    </div>


                </div>
            </div>
            <footer style={footerStyle}>
                <a>배경출처 : freepik</a>
            </footer>

        </div>
    );
}

export default ProductAll;
