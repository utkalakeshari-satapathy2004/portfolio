export async function GET(request) {
  try {
    // const { name } = await request.json();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Data received successfully",
        data: {
          name: name || "Guest",
        },
      }),
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong",
      }),
      {
        status: 500,
      },
    );
  }
}
