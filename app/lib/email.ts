import { Resend } from "resend";

const FROM = process.env.RESEND_FROM || "Franchisli <onboarding@resend.dev>";

interface WelcomeArgs {
  to: string;
  fullName: string;
  businessName: string;
}

/**
 * Sends the waitlist welcome email. Never throws — if the email provider
 * isn't configured or the send fails, it logs and returns false so the
 * signup itself still succeeds.
 */
export async function sendWaitlistWelcome({ to, fullName, businessName }: WelcomeArgs): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — skipping welcome email");
    return false;
  }

  const firstName = fullName.split(" ")[0] || "there";
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      subject: "You're on the Franchisli waitlist 🎉",
      html: emailHtml(firstName, businessName),
      text: emailText(firstName, businessName),
    });
    if (error) {
      console.error("Resend send error:", error);
      return false;
    }
    return true;
  } catch (e) {
    console.error("Resend threw:", e);
    return false;
  }
}

function emailText(firstName: string, business: string) {
  return `Hi ${firstName},

Thanks for joining the Franchisli waitlist${business ? ` for ${business}` : ""}!

You're officially on the list. Franchisli is the operations platform for multi-location businesses — car washes, restaurants, and franchises — bringing audits, checklists, training, and team communication into one clean dashboard.

What happens next:
1. We'll review your request and reach out within 24 hours to set up a personalized demo.
2. Early access members get priority onboarding and founding-member pricing.

Questions in the meantime? Just reply to this email.

— The Franchisli Team`;
}

function emailHtml(firstName: string, business: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,.06);">

        <!-- Header -->
        <tr><td style="background:#0d1a3a;padding:32px 40px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:rgba(255,255,255,.12);width:36px;height:36px;border-radius:9px;text-align:center;vertical-align:middle;color:#ffffff;font-weight:800;font-size:18px;">F</td>
            <td style="padding-left:12px;color:#ffffff;font-weight:800;font-size:20px;letter-spacing:-.5px;">Franchisli</td>
          </tr></table>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:40px;">
          <h1 style="margin:0 0 16px;font-size:24px;line-height:1.25;color:#0f172a;font-weight:800;">You're on the list, ${firstName}! 🎉</h1>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#475569;">
            Thanks for joining the Franchisli waitlist${business ? ` for <strong style="color:#0f172a;">${business}</strong>` : ""}. You're officially in line for early access.
          </p>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#475569;">
            Franchisli is the operations platform for multi-location businesses — car washes, restaurants, and franchises — bringing audits, checklists, training, and team communication into one clean dashboard.
          </p>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:4px;margin:0 0 24px;">
            <tr><td style="padding:20px 24px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8;">What happens next</p>
              <p style="margin:0 0 10px;font-size:14px;line-height:1.6;color:#334155;"><strong style="color:#2c4fa3;">1.</strong>&nbsp; We'll reach out within 24 hours to set up your personalized demo.</p>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#334155;"><strong style="color:#2c4fa3;">2.</strong>&nbsp; Early access members get priority onboarding and founding-member pricing.</p>
            </td></tr>
          </table>

          <p style="margin:0;font-size:14px;line-height:1.7;color:#475569;">
            Have questions in the meantime? Just reply to this email — a real person will get back to you.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid #f1f5f9;">
          <p style="margin:0;font-size:13px;color:#94a3b8;">— The Franchisli Team</p>
          <p style="margin:8px 0 0;font-size:12px;color:#cbd5e1;">© 2026 Franchisli. You received this because you joined our waitlist.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
