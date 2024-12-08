// Loader Removal
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

// Policy Popup
document.getElementById('accept-policy').addEventListener('click', () => {
    document.getElementById('policy-popup').style.display = 'none';
});

document.getElementById('reject-policy').addEventListener('click', () => {
    window.location.href = "https://t.me/ProCryptoFlashers";
});

// Wallet Connect
document.getElementById('connect-wallet').addEventListener('click', async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            alert('Wallet connected successfully!');
        } catch (error) {
            console.error('Wallet connection failed:', error);
        }
    } else {
        alert('Web3 provider not found. Install MetaMask.');
    }
});
