import { useState } from 'react';
import { FakeDataProvider } from './classes/FakeDataProvider';
import { List } from './components/List';
import { Pagination } from './components/Pagination';

const App = () => {
    const [page, setPage] = useState(1);
    const dataProvider = new FakeDataProvider();

    return (
        <>
            <List listItems={dataProvider.getFakeDataForPage(page)} />
            <Pagination currentPage={page} pageCount={10} setPage={setPage} />
        </>
    );
}

export default App;
