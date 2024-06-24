import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ITrainingFields } from "@/src/@types/contentful";
import ContentService from "@/src/utils/content-service";
import Seo from "@/src/components/Layout/components/seo"
import Layout from "@/src/components/Layout";
 

interface Props {
  trainingPage: ITrainingFields;
}

const TrainingPage: NextPage<Props> = ({
  trainingPage: {
    title,
    description,
    image,
    content,
    slug,
    
  },
}) => (
  <><Seo title={title} description={description} />
    <Layout
      title={title}
      image={image} 
 
      introduction={description}
      content={content}
   
      slug={slug}
 
    ></Layout>
  </>
);

export default TrainingPage;

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  ctx
) => {
  const { slug } = ctx.params!;

 
   
  const showPage = await ContentService.instance.getTrainingPageBySlug(slug);
  if (!showPage) {
    return { notFound: true };
  }
  return {
    props: {
      showPage: showPage.fields,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const showPages =
    await ContentService.instance.getEntriesByType<ITrainingFields>("shows");
  return {
    paths: showPages.map((training) => ({
      params: {
        slug: training.fields.slug,
      },
    })),
    fallback: "blocking",
  };
};
