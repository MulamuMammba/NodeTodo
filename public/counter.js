function updateTaskCounts() {
    fetch('/task-counts')
        .then(response => response.json())
        .then(data => {
            document.getElementById('countTotalTasks').innerText = data.totalTasks;
            document.getElementById('countCompletedTasks').innerText = data.completedTasks;
            document.getElementById('countPendingTasks').innerText = data.pendingTasks;
            document.getElementById('completionPercentage').innerText = data.completionPercentage + '%';
        });
}

function addTask(isCompleted) {
    fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({isCompleted})
    })
        .then(response => response.json())
        .then(() => updateTaskCounts());
}