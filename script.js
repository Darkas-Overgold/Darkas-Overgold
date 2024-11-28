    const clientId = 'c200bd13a7474d00b60a1650637610fd'; // Reemplázalo con tu Client ID
    const clientSecret = '8a603ccfca3d4d06a4bb710a9641ebbc'; // Reemplázalo con tu Client Secret
    async function fetchSpotifyData() {
        try {
            // Obtener token de acceso
            const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${btoa(clientId + ':' + clientSecret)}`,
                },
                body: 'grant_type=client_credentials',
            });
            const tokenData = await tokenResponse.json();
            const accessToken = tokenData.access_token;
            // Obtener artistas más escuchados
            const topArtistsResponse = await fetch(
                'https://api.spotify.com/v1/me/top/artists?limit=5',
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );
            const topArtistsData = await topArtistsResponse.json();
            // Mostrar artistas
            const statsContainer = document.getElementById('spotify-stats');
            statsContainer.innerHTML = '<h4>Artistas más escuchados:</h4><ul>' +
                topArtistsData.items.map(artist => `<li>${artist.name}</li>`).join('') +
                '</ul>';
        } catch (error) {
            console.error('Error fetching Spotify data:', error);
            document.getElementById('spotify-stats').innerText =
                'No se pudieron cargar las estadísticas de Spotify.';
        }
    }
    fetchSpotifyData();
