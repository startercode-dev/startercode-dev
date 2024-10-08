type Props = {
    firstName: string;
};

export function generateEmailToSubmitterSbLanding(props: Props) {
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
        color: #1d1d2f;
        background-color: #f3f4f6;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tr>
        <td style="padding-bottom: 30px" colspan="2">
          <img
            src="https://www.startercode.dev/startercode-logo.png"
            alt="Company logo"
            title="startercode Logo"
            style="height: 35px"
          />
        </td>
      </tr>
      <tr>
        <td style="font-size: 16px">
          <p>Hi ${props.firstName},</p>
          <br />

          <p style="margin: 0">
            Thank you for reaching out!  We received your contact information from our website and we are excited to get things start with you as soon as possible. Please provide us some general information below:
          </p>
          <ul style="list-style: none">
            <li>- What is your business name?</li>
            <li>
              - Best phone number to reach you (Used for conducting meetings)
            </li>
            <li>- Provide a detailed description of the service you require</li>
          </ul>
          <p>
            Once we get your response, one of our team members will reach out to set you up for a free consultation with our specialist.
          </p>
          <p>
            We appreciate you for thinking of us and we hope to exceed your expectations!
          </p>
          <br />

          <p style="margin: 0">Thank you!</p>
          <p style="margin: 0">Startercode Team</p>
        </td>
      </tr>
    </table>
  </body>
</html>

    `;
}
