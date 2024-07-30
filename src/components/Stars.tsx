import Star from "./Star";

export interface ICounter {
    count: number
}

export default function Stars({count}: ICounter) {
    if (count < 1 || count > 5) {
        return null;
    }

    const arr = new Array(count).fill(undefined);

    return (
        <ul className="card-body-stars u-clearfix">
            {arr.map((_, index) => <Star key={index}/>)}
        </ul>
    );
}

Stars.defaultProps = {
    count: 0,
};