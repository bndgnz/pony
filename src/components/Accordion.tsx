import React from 'react';
import { useQuery, gql } from "@apollo/client";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

 
import 'react-accessible-accordion/dist/fancy-example.css';

export default function AccordionComponent (props:any) {
 
const id = props.id;

const ACCORDIONLIST = gql`
    query GetAccordion($id: String!) {
      accordion(id: $id) {
    title
    faqsCollection {
      items {
        question
        answer{json}
      }
    }
  }
    }
  `;

  const { data, loading, error} = useQuery(ACCORDIONLIST, {
    variables: { id },
  });

if (loading) {
    return <div></div>;
  }
  if (error) {
    return <div></div>;
  }
  

function AccordionCollection () {
const collection =  data.accordion.faqsCollection.items.map((item, index) => (
<AccordionItem key={index}>
<AccordionItemHeading>
    <AccordionItemButton>
       <h6 style={{display:'inline-flex'}}>{item.question}</h6>
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
    <p>
        Exercitation in fugiat est ut ad ea cupidatat ut in
        cupidatat occaecat ut occaecat consequat est minim minim
        esse tempor laborum consequat esse adipisicing eu
        reprehenderit enim.
    </p>
</AccordionItemPanel>
</AccordionItem>


 )
 )

 return collection ;
}
    return (

        <section className="section training training--secondary"><div className="container"><div className="row section__row align-items-center"></div>
        
        <h3 style={{marginBottom:"20px"}}>{data.accordion.title}</h3>
        <Accordion  allowMultipleExpanded allowZeroExpanded >
            <AccordionCollection />
            
        </Accordion>

        </div>
        </section>
    );
}


