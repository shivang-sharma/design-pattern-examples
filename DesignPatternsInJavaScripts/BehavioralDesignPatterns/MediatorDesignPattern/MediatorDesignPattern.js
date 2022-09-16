window.onload = function() {
    const BugStatus = {
        OPEN: "open",
        CLOSED: "closed",
        ASSIGNED: "assigned",
        FIXED: "fixed",
        TESTED: "tested"
    }
    const Team = {
        UNKNOWN: "unknown",
        DEVELOPMENT: "development",
        TEST: "test",
        VERIFICATION: "verification"
    }
    class Bug {
        constructor(bugId, details) {
            this.bugId = bugId;
            this.details = details;
            this.status = BugStatus.OPEN;
            this.team = Team.UNKNOWN
        }
    }

    var teamManager = (function() {
        return {
            assignTo: function(bug, team) {
                bug.team = team;
                if (team != Team.UNKNOWN) {
                    console.log(`Assigned bug ${bug.bugId} to team ${team} notified manager`);
                } else {
                    console.log(`Bug ${bug.bugId} is currently not assigned to any tean`);
                }
            }
        }
    })();

    // bugWorkflowManager is out mediator
    var bugWorkflowManager = (function() {
        class BugWorkflow {
            constructor() {
                this.bugMap = {};
            }
            getRandomDetails() {
                var details = [
                    "Production Site not working",
                    "UI needs to be updated with new theme",
                    "Interface seems to be slow",
                    "Some unit tests are failing",
                    "Merge conflict needs resolution"
                ];
                return details[Math.floor(Math.random()*details.length)];
            }
            getBug(bugId) {
                if (!this.bugMap[bugId]) {
                    throw new Error("Bug does not exist ", bugId);
                }
                return this.bugMap[bugId];
            }
            createBug() {
                var randomId  = "bug-" + Math.floor(Math.random()*100);
                var bug = new Bug(randomId, this.getRandomDetails());
                this.bugMap[bug.bugId] = bug;
                teamManager.assignTo(bug, Team.UNKNOWN);
                this.triggerBugUpdatedEvent(bug.bugId)
            }
            debugging(bugId) {
                var bug = this.bugMap[bugId];
                bug.status = BugStatus.ASSIGNED;
                teamManager.assignTo(bug, Team.DEVELOPMENT);
                this.triggerBugUpdatedEvent(bug.bugId)
            }
            fixed(bugId) {
                var bug = this.bugMap[bugId];
                bug.status = BugStatus.FIXED;
                teamManager.assignTo(bug, Team.TEST);
                this.triggerBugUpdatedEvent(bug.bugId)
            }
            tested(bugId) {
                var bug = this.bugMap[bugId];
                bug.status = BugStatus.TESTED;
                teamManager.assignTo(bug, Team.VERIFICATION);
                this.triggerBugUpdatedEvent(bug.bugId)
            }
            closed(bugId) {
                var bug = this.bugMap[bugId];
                bug.status = BugStatus.CLOSED;
                teamManager.assignTo(bug, Team.UNKNOWN);
                this.triggerBugUpdatedEvent(bug.bugId)
            }
            triggerBugUpdatedEvent(bugId) {
                var bugUpdatedEvent = new CustomEvent("bug-updated", {detail: bugId});
                document.dispatchEvent(bugUpdatedEvent);
            }
        }
        return {
            bugWorkflow: new BugWorkflow()
        }
    })();
    
    function displayBugStatus(event, bugId) {
        var bug = bugWorkflowManager.bugWorkflow.getBug(bugId);
        var html = `Bug Id: ${bugId} <br/> Details: ${bug.details}
        <br/> Status: ${bug.status} <br/> Team: ${bug.team}`;
        document.getElementById("bug-details").innerHTML = html;
        document.getElementById("bug-id-input").getAttributeNode("value").value=bugId;
    }
    document.addEventListener("bug-updated", (e) => displayBugStatus(e, e.detail));
    document.getElementById("create-bug").addEventListener('click', (e)=> {
        bugWorkflowManager.bugWorkflow.createBug();
        console.log(bugWorkflowManager.bugWorkflow);
    });
    document.getElementById("status-debugging").addEventListener('click', (e)=> {
        var bugId = document.getElementById("bug-id-input").getAttributeNode("value").value;

        bugWorkflowManager.bugWorkflow.debugging(bugId);
        console.log(bugWorkflowManager.bugWorkflow);
    });
    document.getElementById("status-fixed").addEventListener('click', (e)=> {
        var bugId = document.getElementById("bug-id-input").getAttributeNode("value").value;

        bugWorkflowManager.bugWorkflow.fixed(bugId);
        console.log(bugWorkflowManager.bugWorkflow);
    });
    document.getElementById("status-tested").addEventListener('click', (e)=> {
        var bugId = document.getElementById("bug-id-input").getAttributeNode("value").value;

        bugWorkflowManager.bugWorkflow.tested(bugId);
        console.log(bugWorkflowManager.bugWorkflow);
    });
    document.getElementById("status-closed").addEventListener('click', (e)=> {
        var bugId = document.getElementById("bug-id-input").getAttributeNode("value").value;

        bugWorkflowManager.bugWorkflow.closed(bugId);
        console.log(bugWorkflowManager.bugWorkflow);
    });
}