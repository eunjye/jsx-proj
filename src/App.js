/** @jsxImportSource @emotion/react */
// import Weather from './page/Weather';
import { css, Global } from '@emotion/react';
import { spacing } from './style/ui';
import * as color from './style/color';
import * as screen from './style/media-query';

import MovieList from './page/MovieList';

const reset = () => {
    // 객체형으로 전달
    return css({
        border: '12px solid #000',
        margin: '0'
    })
}
const wrap = () => {
    // 문자형으로 전달
    return css`
        color: ${color.brand};

            ${screen.large} {
            ${spacing.mg(3)}
        }
            ${screen.medium} {
            ${spacing.mg(2)}
        }
            ${screen.small} {
            ${spacing.mg(1)}
        }

`};

const App = () => {
    return (
        <div className="wrap">
            <Global styles={reset} />
            {/* <createGlobalStyle /> */}
            <header className="App-header" />
            <div css={wrap}>1234</div>
            <div css={wrap}>1234</div>
            <div css={wrap}>1234</div>
            
            <MovieList />
        </div>
    );
}


export default App;
