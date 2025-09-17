function SecondsCounter(props) {
    return (
        <div className="fs-1 text-light">
            <span className="px-1 text-danger">
                <i className="fa-regular fa-clock"></i>
            </span>
            <span className="px-1">{props.digitSix % 10}</span>
            <span className="px-1">{props.digitFive % 10}</span>
            <span className="px-1">{props.digitFour % 10}</span>
            <span className="px-1">{props.digitThree % 10}</span>
            <span className="px-1">{props.digitTwo % 10}</span>
            <span className="px-1">{props.digitOne % 10}</span>
        </div>
    );
}

export default SecondsCounter;