import Script from "next/script";

type StructuredDataProps = {
  id: string;
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function StructuredData({ id, data }: StructuredDataProps) {
  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}
