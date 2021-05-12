interface ListProps {
    listItems: string[];
}

export const List = (props: ListProps): JSX.Element => {
    return (
        <div>
            {props.listItems.map((item, index) => <p id={`item-${index}`} key={index}>{item}</p>)}
        </div>
    );
}