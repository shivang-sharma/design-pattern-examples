class Command {
    constructor(commandType){
        this.commandType = commandType;
    }
    execute() {
        console.log("Executing : ", this.commandType);
    }
    undo() {
        console.log("Undoing : ", this.commandType);
    }

}

class BoldCommand extends Command {
    constructor() {
        super("bold");
    }
}
class ItalicCommand extends Command {
    constructor() {
        super("italic");
    }
}
class UnderlineCommand extends Command {
    constructor() {
        super("underline");
    }
}

var commandExecutionManager = (function() {
    var commandStack = [];
    function executeCommand(command) {
        command.execute();
        commandStack.push(command);
    }
    function undoCommand() {
        if(commandStack.length == 0) {
            console.log("No more commands to undo");
            return;
        }
        var command = commandStack[commandStack.length-1];
        commandStack.splice(commandStack.length-1, 1);
        command.undo();
    }
    return {
        commandStack: commandStack,
        executeCommand: executeCommand,
        undoCommand: undoCommand
    }
})();

console.log("Command Execution Manager : ", commandExecutionManager);

commandExecutionManager.executeCommand(new BoldCommand());
commandExecutionManager.executeCommand(new ItalicCommand());
commandExecutionManager.executeCommand(new UnderlineCommand());

console.log("Command Execution Manager : ", commandExecutionManager);

commandExecutionManager.undoCommand();
commandExecutionManager.undoCommand();
commandExecutionManager.undoCommand();
commandExecutionManager.undoCommand();

