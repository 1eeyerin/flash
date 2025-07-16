import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";

export async function POST(req: NextRequest) {
  const { text, lang = "ja-JP" } = await req.json();

  const polly = new AWS.Polly({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || "ap-northeast-2",
  });

  // 일본어 Female: Mizuki, 남성: Takumi 등
  const VoiceId = lang === "ja-JP" ? "Mizuki" : "Joanna";

  const params = {
    Text: text,
    OutputFormat: "mp3",
    VoiceId,
    LanguageCode: lang,
    Engine: "standard",
    TextType: "text",
  };

  try {
    const data = await polly.synthesizeSpeech(params).promise();
    if (!data.AudioStream) {
      return NextResponse.json({ error: "No audio stream" }, { status: 500 });
    }
    const audioContent = Buffer.from(data.AudioStream as Buffer).toString(
      "base64"
    );
    return NextResponse.json({ audioContent });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
