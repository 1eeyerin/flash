export async function getPollyTTSUrl(
  text: string,
  lang = "ja-JP"
): Promise<string | null> {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, lang }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.audioContent) return null;
  return `data:audio/mp3;base64,${data.audioContent}`;
}
