

const baseUrl = 'https://random-word-api.herokuapp.com';

export default async function handler(req, res) {
    const count = req.query.count || 1;
    const numWords = count ? parseInt(count, 10) : 1;

    try {
        const response = await fetch(`${baseUrl}/word?number=${numWords}`);
        const data = await response.json();
        res.status(200).json({ words: data});
    } catch (error) {
        console.error('Error getting words:', error);
        res.status(500).json({error: 'Failed to get words'});
    }
}