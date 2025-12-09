export async function sendTelegramMessage(text: string) {
	const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
	const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

	if (!botToken || !chatId) {
		throw new Error("Telegram configuration missing. Please set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID.");
	}

	const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
	});

	const result = await response.json();
	if (!result.ok) {
		throw new Error(result.description || "Failed to send message to Telegram");
	}

	return result;
}

export function formatWithHeader(header: string, body: string) {
	return `*${header}*\n\n${body}`.trim();
}
