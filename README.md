# GitHub Repositories Fetcher

A simple web application that allows users to search for a GitHub user's repositories and display information about each repository, including its name, the number of stars, and a link to visit the repository.

---

## Features

- Search for any GitHub user by their username.
- Displays the list of repositories for the searched user.
- Shows:
  - **Repository Name**
  - **Number of Stars**
  - **Link to Visit the Repository**
- Handles errors gracefully when:
  - The input field is empty.
  - The GitHub user doesn't exist or has no repositories.

---

## How to Use

1. **Input the GitHub username** in the input box.
2. **Click the search button** to fetch repositories.
3. View the list of repositories with:
   - Repository name
   - Number of stars
   - A clickable link to visit the repository on GitHub.

---

## Technologies Used

- **HTML** for structure.
- **CSS** for styling.
- **JavaScript** for fetching and displaying data dynamically using:
  - [GitHub REST API](https://docs.github.com/en/rest).

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/<YourGitHubUsername>/<RepoName>.git
