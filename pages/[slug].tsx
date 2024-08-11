import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
 
import { IPageFields } from "../src/@types/contentful";
import ContentService from "@/src/utils/content-service";
import Layout from "@/src/components/layout";
 

interface Props {
  page: IPageFields;
}

const LandingPage: NextPage<Props> = ({
  page: {
    title,
    description,
    image,
    content,
    slug,
    path,
    components,
    showBanner,
    showBreadcrumb,
    showContent,
    contentImage,
    relatedItems,
    showRelatedItems,
    icon,
  },
}) => (
  <>
    <>
      <Layout
        contentImage={contentImage}
        title={title}
        showContent={showContent}
        description={description}
        image={image}
        showBreadcrumb={showBreadcrumb}
        content={content}
        slug={slug}
        path={path}
        components={components}
        showBanner={showBanner}
        relatedItems={relatedItems}
        showRelatedItems={showRelatedItems}
        icon={icon}
      />
    </>
  </>
);

export default LandingPage;

export const getStaticProps = async (
  ctx:any
) => {
  const { slug } = ctx.params!;

  const thepage = await ContentService.instance.getPageBySlug(slug);
   
  return {
    props: {
      page: thepage.fields,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const pages =
    await ContentService.instance.getEntriesByType<IPageFields>("page");

  return {
    paths: pages.map((page :any) => ({
      params: {
        slug: page.fields.slug,
      },
    })),
    fallback: false,
  };
};
