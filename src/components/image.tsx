import NextImage, { ImageProps as NextImageProps } from "next/image";

export function Image(props: NextImageProps & { disableStrictCLS?: boolean }) {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  const { src, width, height, disableStrictCLS, ...nextImageProps } = props;
  let updatedSrc = src;
  if (typeof src === "string" && src.startsWith("/")) {
    updatedSrc = `${basePath}${src}`;
  }

  return (
    <NextImage
      width={width ?? (disableStrictCLS ? 16 : undefined)}
      height={height ?? (disableStrictCLS ? 16 : undefined)}
      src={updatedSrc}
      {...nextImageProps}
      style={{
        ...disableStrictCLS ? {
          width: width == null ? 'auto' : undefined,
          height: height == null ? 'auto' : undefined,
        } : {},
        ...nextImageProps.style,
      }}
    />
  );
}
