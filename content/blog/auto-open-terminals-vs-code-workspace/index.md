---
date: 2024-06-18T17:07:20.364Z
title: "How To Auto-Open Multiple Terminals In A VS Code Workspace"
subtitle: "Get To Coding Quicker"
featuredImage: "./clement-helardot-95YRwf6CNw8-unsplash.jpg"
ogImage: ""
tags: ['Automation', "Life Hacks"]
externalLink: ""
published: true
---

Here's how to get VS Code to automatically open a couple terminals in your different workspace folders when you first open VS Code. 

Open your workspace settings with `Ctrl + Shift + P` and then type Workspace Settings and select `Preferences: Open Workspace Settings (JSON)`

It should look something like this: 

````json

{
	"folders": [
		{
			"path": "folder-1"
		},
		{
			"path": "folder-2"
		}
	],
	"settings": {},
}


````


Add the following `tasks` object: 


````json

{
	"folders": [
		// ...
	],
	"settings": {},

    // ADD THIS ⬇️⬇️⬇️⬇️
	"tasks": {
		"version": "2.0.0",
		"tasks": [
		  {
			"label": "Frontend", // Change this
			"type": "shell",
			"icon": {"id": "home", "color": "terminal.ansiBlue"},
			"isBackground": true,
			"options": {
			  "cwd": "${workspaceFolder:folder-1}"  // Change just the folder name
			},
			"runOptions": { "runOn": "folderOpen" },
			"command": "/bin/bash", // <-- your shell here
			"presentation": {
			  "echo": false, // silence "Executing task ..."
			  "focus": true,
			  "panel": "dedicated"
			}
		  },
		  {
	
			"label": "Backend",
			"type": "shell",
			"icon": {"id": "flame","color": "terminal.ansiRed"},
			"isBackground": true,
			"options": {
			  "cwd": "${workspaceFolder:folder-2}"
			},
			"runOptions": { "runOn": "folderOpen" },
			"command": "/bin/bash", // <-- your shell here
			"presentation": {
			  "echo": false, // silence "Executing task ..."
			  "focus": true,
			  "panel": "dedicated"
			},        
		  }
		  {
			"label": "Open",
			"dependsOn": ["Frontend", "Backend"], // Make sure these match your above task labels
			"runOptions": { "runOn": "folderOpen" }
		  }
		]
	  }
    // Add This ⬆️⬆️⬆️⬆️⬆️
}
````

Save the settings, then reload your window with `Ctrl + Shift + P`, typing `reload`, and selecting `Developer: Reload Window`. Your window should re-open along with whatever terminals you outlined above. 

Happy Coding!

---

*Photo by <a href="https://unsplash.com/@clemhlrdt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clément Hélardot</a> on <a href="https://unsplash.com/photos/black-and-silver-laptop-computer-on-table-95YRwf6CNw8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>*  