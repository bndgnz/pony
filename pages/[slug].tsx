import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { IPageFields } from "../src/@types/contentful";
import ContentService from "@/src/utils/content-service";
import Layout from "@/src/components/layout";
import Seo from "@/src/components/Layout/components/seo"
import NavBar from "@/components/navBar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop"; 

interface Props {
  landingPage: IPageFields;
}

const LandingPage: NextPage<Props> = ({
  landingPage: {
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
    contentImage

     
  },
}) => (
  <>
 <>
 

 <Layout contentImage={contentImage} title={title} showContent={showContent} description={description} image={image} showBreadcrumb={showBreadcrumb} content={content} slug={slug} path={path} components={components} showBanner={showBanner} />
 
 
    </>



  </>
);

export default LandingPage;

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  ctx
) => {
  const { slug } = ctx.params!;


 
  const landingPage = await ContentService.instance.getPageBySlug(slug);
  if (!landingPage) {
    return { notFound: true };
  }
  return {
    props: {
      landingPage: landingPage.fields,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const pages =
    await ContentService.instance.getEntriesByType<IPageFields>(
      "page"
    );

  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.fields.slug
      },
    })),
    fallback: false,
  };
};
