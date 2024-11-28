<!DOCTYPE HTML>
<html lang="SP">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // Spotify Stats Dynamic Loading Example
            const spotifyStats = document.getElementById("spotify-stats");

            // Mocking data for simplicity; replace with API call as needed
            const artists = [
                "John Mayer",
                "The Weeknd",
                "Taylor Swift",
                "Dua Lipa",
                "Imagine Dragons"
            ];

            spotifyStats.innerHTML = `
                <h4>🎧 Artistas más escuchados:</h4>
                <ul>
                    ${artists.map((artist) => `<li>${artist}</li>`).join("")}
                </ul>
            `;
        });
    </script>
</head>
<body>
    <h2 class="center">Hi 👋! My name is Stephano Chavez and I'm an Information System Management Student with 6 years of experience, from Peru.</h2>
    <h3 class="center">💬 Languages 💬</h3>
    <div class="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="30" alt="Python" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="30" alt="C++" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height="30" alt="C#" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="30" alt="C" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="30" alt="Java" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="HTML5" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="CSS3" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="JavaScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="TypeScript" />
    </div>

    <div id="spotify-stats" class="center">
        <p>Cargando estadísticas de Spotify...</p>
    </div>

    <h3 class="center">🔧 Tools 🔧</h3>
    <div class="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="VS Code" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="Git" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" alt="GitHub" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" height="40" alt="GitLab" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" height="40" alt="Linux" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="Node.js" />
    </div>

    <h3 class="center">🗓️ Timeline of Contributions 🗓️</h3>
    <div class="timeline">
        <div class="timeline-event timeline-event-left">
            <div class="timeline-event-date">March 2022</div>
            <p>Started contributing to open source projects.</p>
        </div>
        <div class="timeline-event timeline-event-right">
            <div class="timeline-event-date">June 2022</div>
            <p>Completed first major project in Python.</p>
        </div>
        <div class="timeline-event timeline-event-left">
            <div class="timeline-event-date">September 2023</div>
            <p>Joined a team working on web development using React.js.</p>
        </div>
        <div class="timeline-event timeline-event-right">
            <div class="timeline-event-date">November 2024</div>
            <p>Presented a project at a local tech conference.</p>
        </div>
    </div>
</body>
</html>
