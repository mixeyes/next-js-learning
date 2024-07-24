export async function GET(_request: Request) {
  console.log(_request.json());
  return new Response('Hello, Next.js!');
}
