import Breadcrumb from "@/components/Common/Breadcrumb";
import GMGCatalog from "@/components/GMG-Catalog";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GMG Catalog PDF | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const CatalogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="GMG Catalog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <GMGCatalog />
    </>
  );
};

export default CatalogPage;
