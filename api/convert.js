// api/convert.js
export default async function handler(req, res) {
    const { from, to, amount } = req.query;
    // Vercelに設定した環境変数を読み込む（これでキーが隠れます）
    const apiKey = process.env.EXCHANGE_API_KEY; 

    try {
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;
        const response = await fetch(url);
        const data = await response.json();
        
        // 取得したデータをそのままフロントエンドに返す
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "API通信に失敗しました" });
    }
}
