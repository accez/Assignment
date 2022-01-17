class Work {
    constructor(props) {
        this.props = props;
    }

    work() {
        this.props.workBalance += 100;
    }

}

export default Work;