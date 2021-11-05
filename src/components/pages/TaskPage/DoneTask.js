import React from 'react'
import TaskBox from './TaskBox';

function DoneTask() {
    return (
        <div>
                            <TaskBox 
            projectName="ssss"
            projectDetail="We need a process that will track the inventory and status of components in the chassis.
                      It should accept IPC requests from the various cards, maintain an internal database of what's currently available,
                      respond to IPC queries from other components and have a CLI interface so that we can query its contents. We will be
                      adding capabilities above and beyond this in the future."
            projectDue="Tomorrow"
            projectPriority="1"
            projectChekced="true"
            projectLoggedInIcon="./images/sheldon.jpg"
            projectLoggedInUsername="sheldcooper93"
            ProjectTag=""    // Make this array
            />
        </div>
    )
}

export default DoneTask; 
