import type { NextRequest } from "next/server";
export const runtime = "edge";

type signUpBodyContentType = {
  yourName: string;
  organizationName: string;
  workEmail: string;
  accountName: string;
};

export default async function handler(request: NextRequest) {
  try {
    if (request.method === "POST") {
      const bodyContent: signUpBodyContentType = await request.json();
      const reqBodyValues: string[] = Object.values(bodyContent);

      const formDataForTenantCreation = {
        OrganisationName: reqBodyValues[1],
        UserEmail: reqBodyValues[2],
        DomainName: reqBodyValues[3],
      };

      const formData = {
        Date: new Date().toISOString(),
        Name: reqBodyValues[0],
        "Organization Name": reqBodyValues[1],
        "Work Email": reqBodyValues[2],
        "Work Phone": "-",
        Consent: "Yes",
        Designation: "-",
        Source: "infoveave.com",
        Form: "Sign up for free trail",
        Message: "-",
        "Account Name": reqBodyValues[3],
      };

      try {
        // Ignore self-signed certificate issue
        if (process.env.NODE_ENV === "development") {
          process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        }

        // calling infoveave api v3 for tenant signup
        const apiResponse = await fetch("https://infoveave.app/api/v3/Tenant/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataForTenantCreation),
        });

        if (!apiResponse.ok) {
          const errorDetails = await apiResponse.text();
          console.error("API V3 Error:", errorDetails);
          return new Response(JSON.stringify({ message: "Failed to create account", details: errorDetails }), {
            headers: { "content-type": "application/json" },
            status: apiResponse.status,
          });
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
          return new Response(JSON.stringify({ message: "Failed to sign up", details: errorDetails }), {
            headers: { "content-type": "application/json" },
            status: response.status,
          });
        }
        return new Response(JSON.stringify({ message: "Signup successful" }), {
          headers: { "content-type": "application/json" },
          status: 200,
        });
      } catch (error) {
        console.error("Error in runtime:", error);
        return new Response(JSON.stringify({ message: "Failed to sign up", details: error }, null), {
          headers: { "content-type": "application/json" },
          status: 400,
        });
      }
    } else {
      return new Response(JSON.stringify({ message: "Method not allowed" }, null), {
        headers: { "content-type": "application/json" },
        status: 405,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to sign up", details: error }, null), {
      headers: { "content-type": "application/json" },
      status: 400,
    });
  }
}
