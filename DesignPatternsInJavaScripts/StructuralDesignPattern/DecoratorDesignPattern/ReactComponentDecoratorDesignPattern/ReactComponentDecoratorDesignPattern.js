class CustomBorder extends React.Component {
    render() {
        return (
            <div className = {'bt bt-' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

class CustomBackground extends React.Component {
    render() {
        return (
            <div className={'bg-' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

class CustomColor extends React.Component {
    render() {
        return (
            <div className={'cc-' + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

class CustomFont extends React.Component {
    render() {
        return (
            <div className={'cf-' + this.props.size}>
                {this.props.children}
            </div>
        );
    }
}

class PlainText extends React.Component {
    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PlainText message="Decorators in React"/>);
root.render(
    <CustomBorder color="red">
        <PlainText message="Decorators in React"/>
    </CustomBorder>
);
root.render(
    <CustomBackground color="green">
        <PlainText message="Decorators in React"/>
    </CustomBackground>
);
// Chaning multiple react decorator
root.render(
    <CustomBorder color="red">
        <CustomBackground color="green">
            <PlainText message="Decorators in React"/>
        </CustomBackground>
    </CustomBorder>
);
root.render(
    <CustomColor color="red">
        <CustomBorder color="red">
            <CustomBackground color="green">
                <PlainText message="Decorators in React"/>
            </CustomBackground>
        </CustomBorder>
    </CustomColor>
);
root.render(
    <CustomColor color="red">
        <CustomBorder color="red">
            <CustomBackground color="green">
                <CustomFont size="large">
                    <PlainText message="Decorators in React"/>
                </CustomFont>
            </CustomBackground>
        </CustomBorder>
    </CustomColor>
);