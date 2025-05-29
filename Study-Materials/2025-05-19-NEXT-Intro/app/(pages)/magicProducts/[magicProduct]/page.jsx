import DynamicPageWithApiFetch from "@/app/components/organism/DynamicPageWithApiFetch";

export default async function Page({ params }) {
  const param = await params;
  return (
    <DynamicPageWithApiFetch
      endpoint="magicProducts"
      param={param}
      value="magicProduct"
    />
  );
}
