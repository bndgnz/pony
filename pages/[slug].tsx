import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { IPageFields } from "../src/@types/contentful";
import ContentService from "@/src/utils/content-service";
import Layout from "@/src/components/Layout";
import Seo from "@/src/components/Layout/components/seo"
 

interface Props {
  page: IPageFields;
}

const Page: NextPage<Props> = ({
  page: {
    title,
    description,
    image,
    content,
    slug
    
  },
}) => (
  <>
<Seo title={title} description={description} /> 


 
  <Layout
      title={title}
      image={image[0].secure_url}
 
 
      introduction={description}
      content={content}
 
    >
   

</Layout>



  </>
);

export default Page;

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  ctx
) => {
  const { slug } = ctx.params!;


 
  const page = await ContentService.instance.getPageBySlug(slug);
  if (!page) {
    return { notFound: true };
  }
  return {
    props: {
      landingPage: page.fields,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const landingPages =
    await ContentService.instance.getEntriesByType<IPageFields>(
      "page"
    );

  return {
    paths: page.map((page) => ({
      params: {
        slug: page.fields.slug,
      },
    })),
    fallback: false,
  };
};
