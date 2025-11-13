import { Goal } from "lucide-react"
import { NextRequest } from "next/server"

// To this spreadsheet the data will go
// https://docs.google.com/spreadsheets/d/1Z1W_xVFb5NMOtZSr7qo2JN8oV3GJ_-yalGnrjy4PqAg/edit?usp=sharing


const GSCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxwQMkLIVCyC4_0lkI78WU-6TcyschS17iyZY5mOvUWZSk_tkNsi-aK1wPUek1pDNyz/exec"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const res = await fetch(GSCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    const text = await res.text()
    if (!res.ok) {
      return new Response(text || "Upstream error", { status: 502, headers: { "Content-Type": "text/plain" } })
    }

    return new Response(JSON.stringify({ success: true, message: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
