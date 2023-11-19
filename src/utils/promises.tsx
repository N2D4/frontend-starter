export async function wait(ms: number) {
  return await new Promise<void>(resolve => setTimeout(resolve, ms));
}
