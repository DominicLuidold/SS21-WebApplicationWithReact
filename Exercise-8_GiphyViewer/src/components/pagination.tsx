import styled from "styled-components";

interface PaginationProps {
    currentPage: number;
    pageCount: number;
    setPage: (page: number) => void;
}

const PaginationStyle = styled.div`
    background-color: lightgrey;
    text-align: center;
    width: 100%;
`;

export const Pagination = (props: PaginationProps): JSX.Element => {
    function manuallySetPage(page: number): void {
        if (page > props.pageCount) {
            return;
        }

        if (page) {
            props.setPage(page);
        } else {
            props.setPage(1);
        }
    }

    return (
        <PaginationStyle>
            <div style={{padding: 10}}>
                <button disabled={props.currentPage <= 1} onClick={() => props.setPage(props.currentPage - 1)} style={{marginRight: 10}}>Previous Page</button>
                <input type="number" min={1} max={props.pageCount} value={props.currentPage} onChange={(e) => manuallySetPage(parseInt(e.target.value))} />
                <span style={{marginRight: 10, fontWeight: "bold"}}> / {props.pageCount}</span>
                <button disabled={props.currentPage >= props.pageCount} onClick={() => { console.log(props.currentPage + 1); props.setPage(props.currentPage + 1) }}>Next Page</button>
            </div>
        </PaginationStyle>
    ); 
}
