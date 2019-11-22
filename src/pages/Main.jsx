import React from "react";
import Banner from "../components/Banner";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div style={{marginTop:"50%", width:"100%", overflowX:"hidden"}}>
            <Banner />
            <Preview />
            <MovieContainer title="TV프로그램" movies={[{title:"신서유기1"}, {title:"신서유기2"}, {title:"신서유기3"}, {title:"신서유기4"}, {title:"신서유기5"}, {title:"신서유기6"}, {title:"신서유기7"}]}/>
            <MovieContainer title="드라마" movies={[{title: "드라마1"},{title: "드라마2"},{title: "드라마3"},{title: "드라마4"},{title: "드라마5"},{title: "드라마6"},{title: "드라마7"},{title: "드라마8"},{title: "드라마9"},{title: "드라마10"},{title: "드라마11"},{title: "드라마12"}]}/>
        </div>)
    }
}

export default Main;