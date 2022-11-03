import React, {useState, useEffect} from 'react';
import { Accordion, AccordionToggle, AccordionContent, AccordionGroup } from '@strapi/design-system/Accordion';

import { Box } from '@strapi/design-system/Box';
import { TextInput } from '@strapi/design-system/TextInput';
import axios from 'axios';
const qs = require('qs');




function Lista(){

    const [expandedID, setExpandedID] = useState(null);
    const [expandedID2, setExpandedID2] = useState(null);
    const [expandedID3, setExpandedID3] = useState(null);



    const [estado, setEstado] = useState([]);


    const query = qs.stringify({
        populate: {
            categoria_2_s: {
            populate: '*',
          }
        }
      }, {
        encodeValuesOnly: true, // prettify URL
      });


    useEffect(async ()=>
    {
        const response = await axios.get('http://localhost:1337/api/categorias?'+query)
        console.log(response, 'que me trae esto');


        
        setEstado(response.data.data)
        
    },[])



    const handleToggle = id => () => {
        setExpandedID(s => s === id ? null : id);
      };


      const handleToggle2 = id => () => {
        setExpandedID2(s => s === id ? null : id);
      };  

      const handleToggle3 = id => () => {
        setExpandedID3(s => s === id ? null : id);
      };  

    return(
        <>
        <h1> Lista de categorias</h1>
        <div>
          <Box padding={8} background="neutral0">
            <AccordionGroup>
                {
                        estado.map((item)=>(
                        <Accordion expanded={expandedID === 'acc-1'} onToggle={handleToggle('acc-1')} id="acc-1" size="S">
                         <AccordionToggle   title={item.attributes.Titulo} togglePosition="left" />
                         <AccordionContent>
                           <Box padding={8}>
                               {
                                   item.attributes.categoria_2_s.data.map((item2)=>(
                                    <Accordion expanded={expandedID2 === 'add-1'} onToggle={handleToggle2('add-1')} id="acc-1" size="S">
                                    <AccordionToggle   title={item2.attributes.Titulo} togglePosition="left" />
                                    <AccordionContent>
                                      <Box padding={3}>
                                        {
                                            (item2.attributes.categoria_3_s.data.length > 0) ? (
                                                <>
                                                 { item2.attributes.categoria_3_s.data.map((item3)=>(
                                                      <Accordion expanded={expandedID3 === 'aff-1'} onToggle={handleToggle3('aff-1')} id="acc-1" size="S">
                                                      <AccordionToggle   title={item3.attributes.Titulo} togglePosition="left" />
                                                      <AccordionContent>
                                                        <Box padding={8}>
                                                          <TextInput label="Name" />
                                                        </Box>
                                                      </AccordionContent>
                                                    </Accordion>
                                                 ))}
                                                </>
                                            ):(
                                                <>No tiene hijos</>
                                            )
                                        }
                                      </Box>
                                    </AccordionContent>
                                  </Accordion>
                                   ))
                               }
                           </Box>
                         </AccordionContent>
                       </Accordion>))


                }
             
            </AccordionGroup>
          </Box>
        </div>;
        </>
    )
}

export default Lista