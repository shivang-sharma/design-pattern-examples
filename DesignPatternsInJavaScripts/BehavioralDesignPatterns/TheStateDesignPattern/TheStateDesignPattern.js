class Display extends React.Component {
    render() {
        const style = {
            color: this.props.color,
            backgroundColor: this.props.backgroundColor
        }
        return(
            <div className="details" style={style}>
                Bug Status: {this.props.status.toUpperCase()}
            </div>
        );
    }
}
const Status = {
    UNASSIGNED: "unassigned",
    DEBUGGING: "debugging",
    CLOSED: "closed",
    ASSIGNED: "assigned",
    FIXED: "fixed",
    TESTED: "tested"
}
const Priority = {
    NONE: "none",
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
}

class StateManager extends React.Component {
    state = {
        status: Status.UNASSIGNED,
        priority: Priority.LOW,
        color: "white",
        backgroundColor: "blue"
    }
    changeStatus = (e) => {
        var newStatus = e.target.name;
        this.setState(function(prevState) {
            if (newStatus == Status.FIXED && !(prevState.status == Status.DEBUGGING)) {
                console.log("Cannot change status to FIXED unless previous state is DEBUGGING");
                return {};
            }
            if (newStatus == Status.TESTED && !(prevState.status == Status.FIXED)) {
                console.log("Cannot change status to TESTED unless previous state is FIXED");
                return {};
            }
            if (newStatus == Status.CLOSED && !(prevState.status == Status.TESTED)) {
                console.log("Cannot change status to CLOSED unless previous state is TESTED");
                return {};
            }
            return {
                status: newStatus
            }
        })
    }
    changePriority = (e) => {
        var newPriority = e.target.name;
        this.setState(function(prevState) {
            var color = prevState.color;
            var backgroundColor = prevState.backgroundColor;
            if (newPriority == Priority.NONE) {
                color = "white";
                backgroundColor = "green";
            }
            if (newPriority == Priority.LOW) {
                color = "white";
                backgroundColor = "blue";
            }
            if (newPriority == Priority.MEDIUM) {
                color = "black"
                backgroundColor = "orange"
            }
            if (newPriority == Priority.HIGH) {
                color = "white"
                backgroundColor = "Red"
            }
            return {
                priority: newPriority,
                color: color,
                backgroundColor: backgroundColor
            }
        });
    }
    render() {
        return (
            <div>
                <Display 
                color={this.state.color}
                backgroundColor={this.state.backgroundColor}
                status={this.state.status}
                />
                <div>
                    <button className="button" name="unassigned" onClick={this.changeStatus}>UNASSIGNED
                    </button>
                    <button className="button" name="assigned" onClick={this.changeStatus}>ASSIGNED
                    </button>
                    <button className="button" name="debugging" onClick={this.changeStatus}>DEBUGGING
                    </button>
                    <button className="button" name="fixed" onClick={this.changeStatus}>FIXED
                    </button>
                    <button className="button" name="tested" onClick={this.changeStatus}>TESTED
                    </button>
                    <button className="button" name="closed" onClick={this.changeStatus}>CLOSED
                    </button>
                </div>
                <div>
                    <button className="button-p" name="none" onClick={this.changePriority}>NONE
                    </button>
                    <button className="button-p" name="low" onClick={this.changePriority}>LOW
                    </button>
                    <button className="button-p" name="medium" onClick={this.changePriority}>MEDIUM
                    </button>
                    <button className="button-p" name="high" onClick={this.changePriority}>HIGH
                    </button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<StateManager />, document.getElementById("react-update-state"));