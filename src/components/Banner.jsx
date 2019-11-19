import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 100vw;
height: 68px;
display: flex;
padding: 20px 58px;
box-sizing: border-box;
`;

const Logo = styled.img`
height: 100%;
`;

const NavText = styled.ul`
color: white;
display: flex;
margin: 0px 42px;
height: 100%;
flex: 1;
align-items: center;
`;

const NavTextItem = styled.li`
list-style: none;
margin: 0px 10px;
font-size: 0.75em;
color: #e5e5e5;

&:active{
    font-weight: bold;
    color: #000;
}
&:hover{
    font-weight: normal;
    color: #b3b3b3;
}

`;

const NavIcon = styled.ul`
display : flex;
height: 100%;
`;

const NavIconItem = styled.li`
width: fit-content;
margin : 0px 10px;

& > img {
    height : 100%;
}
`;

function Banner(props) {
    return <div>
        <Wrapper>
            <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png" alt=""/>
            <NavText>
                <NavTextItem>홈</NavTextItem>
                <NavTextItem>TV 프로그램</NavTextItem>
                <NavTextItem>영화</NavTextItem>
                <NavTextItem>최신 등록 콘텐츠</NavTextItem>
                <NavTextItem>내가 찜한 콘텐츠</NavTextItem>
            </NavText>
            <NavIcon>
                <NavIconItem><img src="/search.svg" alt=""/></NavIconItem>
                <NavIconItem><img src="/gift.svg" alt=""/></NavIconItem>
                <NavIconItem><img src="/bell.svg" alt=""/></NavIconItem>
            </NavIcon>
        </Wrapper>
    </div>;
}

export default Banner;