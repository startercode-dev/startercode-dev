type Props = {
    fullName: string;
};

export function generateEmailTemplateToSubmitter(props: Props) {
    return `
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Lead Email</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      font-family: Poppins, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f3f4f6;
    "
  >
    <table
      style="
        width: 1000px;
        border-radius: 10px;
        margin: 50px auto;
        padding: 50px 50px;
        color: #f3f4f6;
        background-color: #1d1d2f;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tr>
        <td style="padding-bottom: 50px" colspan="2">
          <img
            src="https://www.startercode.dev/startercode-logo.png"
            alt="Company logo"
            title="startercode Logo"
            style="height: 35px"
          />
        </td>
      </tr>
      <tr>
        <td style="font-size: 16px;">
          <p>Hi ${props.fullName},</p>
          <br />

          <p style="margin: 0">
            We've received your information and will be in contact with you
            about your inquiry as soon as possible!
          </p>
          <p>We look forward to chatting soon!</p>
          <br />

          <p style="margin: 0">Cheers!</p>
          <p style="margin: 0">startercode.dev</p>
        </td>
      </tr>
    </table>
  </body>
</html>
    `;
}
