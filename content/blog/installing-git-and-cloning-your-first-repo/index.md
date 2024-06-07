---
date: 2024-06-07T21:22:11Z
updated: 2024-06-07T11:55:40Z
title: "Installing Git & Cloning Your First Repo" 
subtitle: "Git Quick Start for Non-Developers"
featuredImage: "./featuredImage.webp"
tags: ['Git']
externalLink: ""
published: true
unlisted: false
---
# Getting Started with Git: Installing and Cloning Repositories from GitHub

This guide will help you get Git installed on your computer, clone repositories from GitHub, and switch branches. Whether you're new to Git or need a quick refresher, this guide will get you up and running in no time. It does assume you have at least some familiarity within a terminal or command-line environment. Linux & Linux-based OSs (Mac) make it easy; You just open up the Terminal app and away you go. With Windows it's slightly more challenging, although they've gotten better in recent years (and settting up a terminal environment on Windows is out of scope of this article).

Either way, crack your terminal open and let's get git-ing!

```toc
```


## Git Newbie Glossary

Here are a few terms to keep on top of your mind as you read through this.

| Term         | Definition                                                                                   |
|--------------|----------------------------------------------------------------------------------------------|
| Git          | A piece of software used to track changes in source code during development. |
| GitHub       | A web-based platform that hosts Git repositories and provides tools for collaboration.        |
| Repository   | A folder of files with some special files to allow Git to track changes inside the folder.        |
| Branch       | A parallel version of a repository, allowing for separate development work to be done.        |
| Clone        | A copy of a repository that is downloaded to your local machine from a remote server.         |
| Terminal     | A command-line interface used to interact with the computer's operating system.               |
| Remote       | A version of a repository hosted on a server, often used for collaboration.                   |

## Step 1: Installing Git

*If you already have Git installed on your computer, go ahead and skip to step 3 for cloning and branch information.*

### Windows

#### **Download Git**:
   - Go to the [Git for Windows](https://git-scm.com/download/win) download page.
   - Click the "Download" button.

#### **Install Git**:
   - Run the downloaded `.exe` file.
   - Follow the installation wizard. Use the default options unless you have specific requirements.

### macOS

#### **Using Homebrew (recommended)**:
   - Open the Terminal.
   - Install Homebrew if you don't have it: 
     ```sh
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Install Git with Homebrew:
     ```sh
     brew install git
     ```

#### **Using the installer**:
   - Go to the [Git for macOS](https://git-scm.com/download/mac) download page.
   - Download and install the latest version.

### Linux

#### **Debian/Ubuntu-based distributions**:
   - Open the Terminal.
   - Update your package list and install Git:
     ```sh
     sudo apt update
     sudo apt install git
     ```

#### **Fedora-based distributions**:
   - Open the Terminal.
   - Install Git:
     ```sh
     sudo dnf install git
     ```

## Step 2: Configuring Git

After installing Git, you'll need to configure your username and email. This is necessary for tracking changes and contributions.

1. Open your Terminal (or Git Bash on Windows).

2. Configure your name in git:
   ```sh
   git config --global user.name "Your Name"
   ```

3. Add your GitHub account email to your git config:
   ```sh
   git config --global user.email "your.email@example.com"
   ```

## Step 3: Cloning a Repository

To clone a repository, you'll need the repository URL. This can be found on the repository's GitHub page.

1. **Copy the repository URL**:
   - Navigate to the repository on GitHub.
   - Click the "Code" button and copy the URL (use HTTPS for simplicity).

2. **Clone the repository**:
   - Open your Terminal.
   - Navigate to the directory where you want to clone the repository:
     ```sh
     cd /path/to/your/directory
     ```
   - Clone the repository:
     ```sh
     git clone https://github.com/username/repository.git
     ```
   - Replace `https://github.com/username/repository.git` with the actual URL you copied from GitHub.
   - `git clone` creates a new directory, so with our example commands we would end up with `/path/to/your/directory/repository/` with all the code inside the `repository/` directory.
     - To stay organized, I'd recommend setting up some sort of folder structure like `~/code/<client_name>/<repos>/`. So you would `cd ~/code/<client_name>` and then run `git clone <repo_url>` to end up with `~/code/<client_name>/<repo_name>`.

## Step 4: Switching Branches

Once you have cloned the repository, you might need to switch to a different branch.

1. **List available branches**:
   - Navigate to the cloned repository:
     ```sh
     cd ~/code/<client_name>/<repo_name>
     ```
   - Fetch everything from the repository on Github:
     ```sh
     git fetch --all
     ```
   - List all branches:
     ```sh
     git branch -a
     ```
     - If you're switching to a branch for the first time, it will show up in this list prefaced with something like `remotes/origin/`. The `<branch_name>` in the next step is whatever is after the last `/`. i.e with `remotes/origin/branch-xyz` your `<branch_name>` is just `branch-xyz`

2. **Switch to a branch**:
   - Use the branch name from the list to switch branches:
     ```sh
     git switch <branch_name>
     ```

3. **Pull the latest changes**:
   - After switching to the desired branch, make sure to pull the latest changes to ensure you have the most up-to-date code:
     ```sh
     git pull
     ```
     - While `git fetch` and `git pull` seem like similar commands, they are quite different. Think of `git fetch` as getting the notification that there are changes, and `git pull` is getting the actual changes and applying them to your local copy of the repo. `fetch` is getting the email that your package has been delivered, `pull` is going to the mailbox to actually get the package. 

By following these steps, you can switch to any branch and ensure you are always previewing the latest code from that branch.

# In Conclusion

And that's it! You now have Git installed, can clone repositories from GitHub, and switch between branches. This will enable you to access and review code locally on your computer.

Happy Git-ing!

# Git Commands Cheat Sheet
| Task                    | Command                              | Description                                                  |
|-------------------------|--------------------------------------|--------------------------------------------------------------|
| Clone a repository      | `git clone <repository_url>`         | Clones the repository from the specified URL **(You should only need to do this once per repo)**                 |
| Fetch Everything        | `git fetch --all`                    | Fetches information about all the branches from the remote repo. **Do this every time.** |
| List branches           | `git branch -a`                      | Lists all local and remote branches                          |
| Change branch           | `git switch <branch_name>`         | Switches to the specified branch                             |
| Pull latest changes     | `git pull`                           | Fetches and merges the latest changes from the remote branch. **Do this every time.** |