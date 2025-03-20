
import { EmailTemplate } from "@/components/emailTemplateResend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, tele, subject, comment} = body;
    const data = await resend.emails.send({
      from: `${fullName}<onboarding@resend.dev>`,
      to: "hello@themesmerizingmorocco.com",
      subject: subject,
      react: EmailTemplate({
        fullName: fullName,
        comment: comment,
        email: email,
        tele: tele,
       
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
