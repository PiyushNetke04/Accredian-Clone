export async function POST(req) {
  const body = await req.json();

  console.log("Lead Received:", body);

  return Response.json({
    success: true,
    message: "Lead submitted successfully!",
  });
}