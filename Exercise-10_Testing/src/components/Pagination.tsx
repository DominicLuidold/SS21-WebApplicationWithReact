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
    return (
        <PaginationStyle>
            <div style={{padding: 10}}>
                <button id={'prev'} disabled={props.currentPage <= 1} onClick={() => props.setPage(props.currentPage - 1)} style={{marginRight: 10}}>Previous Page</button>
                <span id={'current-page'} style={{marginRight: 10, fontWeight: "bold"}}>{props.currentPage + " / " + props.pageCount}</span>
                <button id={'next'} disabled={props.currentPage >= props.pageCount} onClick={() => { console.log(props.currentPage + 1); props.setPage(props.currentPage + 1) }}>Next Page</button>
            </div>
        </PaginationStyle>
    );
}
