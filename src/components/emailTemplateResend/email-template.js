import * as React from "react";

export const EmailTemplate = ({
  fullName,
  email,
  phone,
  comment,
}) => (
  <div>
    <p><strong>Full Name: </strong>{fullName}</p>
    <p>You have received a contact message from someone interested in your services on the <strong>the mesmerizing morocco</strong> website:</p>
    <div>
      <p><strong>Email: </strong>{email || "Email not provided by the client"}</p>
      <p><strong>Phone: </strong>{phone || "Phone not provided by the client"}</p>
      <p><strong>Message: </strong>{comment || "No message provided by the client"}</p>
    </div>
  </div>
);