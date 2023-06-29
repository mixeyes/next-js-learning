export function monitoredMethod(
  target: NonNullable<unknown>,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method with args ${JSON.stringify(args)}`);
    const result = originalMethod.call(this, ...args);
    console.log('Method called successfully!');
    return result;
  };
  return descriptor;
}
