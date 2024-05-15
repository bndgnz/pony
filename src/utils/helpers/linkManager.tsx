import React from "react";
import { useQuery, gql } from "@apollo/client";
import Showlist from "@/src/components/Layout/components/showlist";
import Djs from "@/src/components/Layout/components/djs";
import Sponsors from "@/src/components/Layout/components/sponsors";
import Streams from "@/src/components/Layout/components/streams";
import Carousel from "@/src/components/Layout/components/carousel";
import Accordion from "@/src/components/Layout/components/accordion";
import Showsontoday from "@/src/components/Layout/components/showsOnToday";
import Stafflist from "@/src/utils/helpers/staffListBuilder";

function LinkResolver(props: any) {
  const id = props.props;
  const url="ddddddddddddd"
 


  return (<>{props}</>)
 
 
}

export default LinkResolver;
