import type { NextRequest } from "next/server";
export const runtime = "edge";

type bookADemoBodyContentType = {
  name: string;
  organization: string;
  workEmail: string;
  workPhone: string;
};

export default async function handler(request: NextRequest) {
  if (request.method === "POST") {
    const bodyContent: bookADemoBodyContentType = await request.json();
    const reqBodyValues: string[] = Object.values(bodyContent);

    const formData = {
      Date: new Date().toISOString(),
      Name: reqBodyValues[0],
      "Organization Name": reqBodyValues[1],
      "Work Email": reqBodyValues[2],
      "Work Phone": reqBodyValues[3],
      Consent: "Yes",
      Designation: "-",
      Source: "infoveave.com",
      Form: "Book a demo",
      Message: "-",
      "Account Name": "-",
    };

    try {
      // Ignore self-signed certificate issue
      if (process.env.NODE_ENV === "development") {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      }

      // calling infoveave api v3 for tenant signup
      const response = await fetch("https://nspl.infoveave.net/api/v3/DataSources/Upload/json/nspl/267/Website%20Forms", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorDetails = await response.text(); // Capture error details from the API response
        console.error("API Error:", errorDetails);
        return new Response(JSON.stringify({ message: "Failed to book a demo", details: errorDetails }), {
          headers: { "content-type": "application/json" },
          status: response.status,
        });
      }

      // const data = await response.json();
      return new Response(JSON.stringify({ message: "Booked a  demo successfully" }), {
        headers: { "content-type": "application/json" },
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: "Failed to book a demo" }), {
        headers: { "content-type": "application/json" },
        status: 400,
      });
    }
  } else {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      headers: { "content-type": "application/json" },
      status: 405,
    });
  }
}
