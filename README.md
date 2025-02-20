# GitHub Merge Queue Button

This Chrome extension adds a "Merge queue" button to GitHub repository navigation when merge queue is enabled for the repository. It dynamically displays the number of queued merge jobs and updates the count every 30 seconds.

## Features

- **Merge Queue Detection:** Checks if merge queue is enabled by querying the repository's `/queue` endpoint.
- **Button Insertion:** Adds a new tab labeled "Merge Queue" to GitHub's navigation bar.
- **Dynamic Job Count:** Fetches the HTML from `/queue/main/entries`, counts the number of job entries, and updates the counter every 30 seconds.
- **Seamless Integration:** Works with GitHub’s pjax navigation to remain active as you browse within a repository.

## How It Works

1. **Check Merge Queue Status:**
   The extension first fetches the `/queue` endpoint for the current repository. If the response is 200, it assumes merge queue is enabled and proceeds; if 404, no further action is taken.

2. **Insert Merge Queue Button:**
   Once merge queue is detected, the extension inserts a new button into GitHub’s navigation bar right after the "Pull Requests" tab.

3. **Update Job Count:**
   The extension then fetches the HTML from the `/queue/main/entries` endpoint, parses it to count the number of `<li class="Box-row">` items (each representing a job), and updates the counter displayed on the button. The counter refreshes every 30 seconds.

## Installation

### 1. Clone or Download the Repository

Clone the repository using Git:

```bash
git clone https://github.com/yourusername/github-merge-queue-button.git
```

Or download the ZIP archive and extract it.

### 2. Open Chrome and Navigate to the Extensions Page

In Chrome, open a new tab and go to:

`chrome://extensions/`

### 3. Enable Developer Mode

Toggle the **Developer mode** switch in the top-right corner of the Extensions page.

### 4. Load the Unpacked Extension

Click the **Load unpacked** button and select the directory where your extension files (including `manifest.json`) are located.

### 5. Test the Extension

Navigate to a GitHub repository that has merge queue enabled. If enabled, you should see a new "Merge Queue" tab with the job count displayed in the repository's navigation bar.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Pull requests are welcome!
