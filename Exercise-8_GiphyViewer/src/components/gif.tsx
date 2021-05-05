import { GiphyGif } from "../class/GiphyStore";

interface GifProps {
    gifDetails: GiphyGif;
}

export const Gif = (props: GifProps): JSX.Element => {
    return (
        <div style={{width: 250}}>
            <h2>{props.gifDetails.title}</h2>
            <img src={props.gifDetails.url} alt={props.gifDetails.title} />
        </div>
    ); 
}
