import { observer, useLocalObservable } from 'mobx-react';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GiphyStore } from './class/GiphyStore';
import { Gif } from './components/gif';
import { NavBar } from './components/navbar';
import { Pagination } from './components/pagination';

export type Tab = 'Trending' | 'Search';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

function createGiphyStore(): GiphyStore {
    return new GiphyStore();
}

const App = observer(() => {
    const giphyStore = useLocalObservable(createGiphyStore);
    const [currentTab, setCurrentTab] = useState<Tab>('Trending');

    useEffect(() => {
        return (): void => giphyStore.destroy();
    }, [giphyStore]);

    function setCurrentView(tab: Tab): void {
        giphyStore.setCurrentView(tab);
        setCurrentTab(tab);
    }

    function setPage(page: number): void {
        giphyStore.setPage(page);
    }

    function handleSearch(searchTerm: string): void {
        if (searchTerm.length < 3) {
            return;
        }

        giphyStore.setSearchTerm(searchTerm);
    }

    return(
        <>
            <GlobalStyle />
            <NavBar setTab={setCurrentView} />
            
            {
                currentTab === 'Search' &&
                <>
                    <Input type="string" placeholder="Search value (search starts after typing 3 or more characters)" onChange={(e) => handleSearch(e.target.value)} />
                </>
            }

            <Pagination currentPage={giphyStore.currentPage} pageCount={giphyStore.pageCount} setPage={setPage} />

            { currentTab === 'Trending' ? <h1>Trending</h1> : <h1>Search resulsts</h1> }

            {
                giphyStore.loading &&
                <img src="https://i.imgur.com/jJ8NnQ4.gif" alt="loading" />
            }

            {
                (!giphyStore.loading && giphyStore.error) &&
                <div>
                    <h1>Error!</h1>
                    <p>{giphyStore.error}</p>
                </div>
            }

            {
                (!giphyStore.loading && !giphyStore.error) && 
                <div style={{display: "flex", flexWrap: "wrap", marginTop: 15}}>
                    {giphyStore.gifs.map((giphyGif, index) => <Gif key={index} gifDetails={giphyGif} />)}
                </div>
            }
        </>
    );
});

export default App;
