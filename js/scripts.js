document.addEventListener('DOMContentLoaded', () => {
    const connectWalletButton = document.getElementById('connect-wallet');
    const toolList = document.getElementById('tool-list');
    const newsList = document.getElementById('news-list');

    connectWalletButton.addEventListener('click', () => {
        alert('Wallet connected successfully!');
        // Add logic to connect the user's wallet
    });

    // Fetch and display tools
    fetch('js/tools.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(tool => {
                const toolItem = document.createElement('div');
                toolItem.className = 'tool-item';
                toolItem.innerHTML = `
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                `;
                toolList.appendChild(toolItem);
            });
        });

    // Fetch and display news
    fetch('bitcoin-related-files/bitcoin-news.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <h3>${news.title}</h3>
                    <p>${news.summary}</p>
                `;
                newsList.appendChild(newsItem);
            });
        });
});
