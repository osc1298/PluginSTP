import React, {useState} from 'react'
import { Accordion, AccordionToggle, AccordionContent, AccordionGroup } from '@strapi/design-system/Accordion';
import { Box } from '@strapi/design-system/Box';
import { GridLayout } from '@strapi/design-system/Layout';


function ListarItems({padres, valores})
{

    console.log(valores, ' que traes listarItems')

    console.log(padres[valores.value], ' que traes')

    const [expandedID, setExpandedID] = useState(null);


    const handleToggle = id => () => {
        setExpandedID(s => s === id ? null : id);
      };


    return(
        <>
        <h1> Lista de categorias</h1>
        <div>
          <Box padding={8} background="neutral0">
            <AccordionGroup>

                
                {
                       //esta es la primera condicion que se cumple
                       valores.value!=undefined && valores.value1==undefined && valores.value2==undefined && valores.value3==undefined &&valores.value4==undefined
                       ?(
                            <>
                             <Accordion expanded={expandedID === 'acc-1'} onToggle={handleToggle('acc-1')} id="acc-1" size="S">
                         <AccordionToggle   title={padres[valores.value].attributes.Titulo} togglePosition="left" />
                         <AccordionContent>
                           <Box padding={8}>
                               {
                                   padres[valores.value].attributes.categoria_2_s.data.map((item2)=>(
                                    <Accordion  id="acc-1" expanded={expandedID === 'acc-1'}  onToggle={handleToggle('acc-1')} size="S">
                                    <AccordionToggle   title={item2.attributes.Titulo} togglePosition="left" />
                                    <AccordionContent>
                                      <Box padding={3}>
                                        {
                                            (item2.attributes.categoria_3_s.data.length > 0) ? (
                                                <>
                                                 { item2.attributes.categoria_3_s.data.map((item3)=>(
                                                      <Accordion  id="acc-1" expanded={expandedID === 'acc-1'}  onToggle={handleToggle('acc-1')} size="S">
                                                      <AccordionToggle   title={item3.attributes.Titulo} togglePosition="left" />
                                                      <AccordionContent>
                                                        <Box padding={8}>
                                                            <GridLayout>
                                                                {
                                                                    item3.attributes.temarios.data.map((item4)=>(
                                                                       <>
                                                                        <h2>Temarios</h2>
                                                                        <h2>{item4.attributes.Titulo}</h2>
                                                                       </>                                                               
                                                                    ))
                                                                }
                                                                {
                                                                    item3.attributes.cuestionarios.data.map((item4)=>(
                                                                            <>
                                                                             <h2>cuestionarios</h2>
                                                                             <h2>{item4.attributes.Titulo}</h2>
                                                                            </>                                                               
                                                                         ))
                                                                }

                                                            </GridLayout>
                                                       
                                
                                                        </Box>
                                                      </AccordionContent>
                                                    </Accordion>
                                                 ))}
                                                </>
                                            ):(
                                                <></>
                                            )
                                        }
                                      </Box>
                                    </AccordionContent>
                                  </Accordion>
                                   ))
                               }
                           </Box>
                         </AccordionContent>
                       </Accordion>
                            </>

                       ):(<></>)
                       
                }
                {
                    //esta es si se cumple la segunda condicion
                        valores.value!=undefined && valores.value1!=undefined && valores.value2==undefined && valores.value3==undefined &&valores.value4==undefined 
                        ?(
                            <>
                             <Accordion expanded={expandedID === 'acc-1'} onToggle={handleToggle('acc-1')} id="acc-1" size="S">
                         <AccordionToggle   title={padres[valores.value].attributes.Titulo} togglePosition="left" />
                         <AccordionContent>
                           <Box padding={8}>
                               {
                                   
                                    <Accordion  id="acc-1" expanded={expandedID === 'acc-1'}  onToggle={handleToggle('acc-1')} size="S">
                                    <AccordionToggle   title={padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.Titulo} togglePosition="left" />
                                    <AccordionContent>
                                      <Box padding={3}>
                                        {
                                            (padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data.length > 0) ? (
                                                <>
                                                 { padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data.map((item3)=>(
                                                      <Accordion  id="acc-1" expanded={expandedID === 'acc-1'}  onToggle={handleToggle('acc-1')} size="S">
                                                      <AccordionToggle   title={item3.attributes.Titulo} togglePosition="left" />
                                                      <AccordionContent>
                                                        <Box padding={8}>
                                                            <GridLayout>
                                                                {
                                                                    item3.attributes.temarios.data.map((item4)=>(
                                                                       <>
                                                                        <h2>Temarios</h2>
                                                                        <h2>{item4.attributes.Titulo}</h2>
                                                                       </>                                                               
                                                                    ))
                                                                }
                                                                {
                                                                    item3.attributes.cuestionarios.data.map((item4)=>(
                                                                            <>
                                                                             <h2>cuestionarios</h2>
                                                                             <h2>{item4.attributes.Titulo}</h2>
                                                                            </>                                                               
                                                                         ))
                                                                }

                                                            </GridLayout>
                                                       
                                
                                                        </Box>
                                                      </AccordionContent>
                                                    </Accordion>
                                                 ))}
                                                </>
                                            ):(
                                                <></>
                                            )
                                        }
                                      </Box>
                                    </AccordionContent>
                                  </Accordion>
                                   
                               }
                    
                    {
                    //esta es si se cumple la tercera condicion
                        valores.value!=undefined && valores.value1!=undefined && valores.value2!=undefined && valores.value3==undefined &&valores.value4==undefined 
                        ?(
                            <>
                             <Accordion expanded={expandedID === 'acc-1'} onToggle={handleToggle('acc-1')} id="acc-1" size="S">
                         <AccordionToggle   title={padres[valores.value].attributes.Titulo} togglePosition="left" />
                         <AccordionContent>
                           <Box padding={8}>
                               {
                                   
                                    <Accordion  id="acc-1" expanded={expandedID === 'acc-1'}  onToggle={handleToggle('acc-1')} size="S">
                                    <AccordionToggle   title={padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.Titulo} togglePosition="left" />
                                    <AccordionContent>
                                      <Box padding={3}>
                                        {
                                            (padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data.length > 0) ? (
                                                <>
                                                 { padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data.map((item3)=>(
                                                      <Accordion  id="acc-1" expanded={expandedID === 'acc-1'}  onToggle={handleToggle('acc-1')} size="S">
                                                      <AccordionToggle   title={item3.attributes.Titulo} togglePosition="left" />
                                                      <AccordionContent>
                                                        <Box padding={8}>
                                                            <GridLayout>
                                                                {
                                                                    item3.attributes.temarios.data.map((item4)=>(
                                                                       <>
                                                                        <h2>Temarios</h2>
                                                                        <h2>{item4.attributes.Titulo}</h2>
                                                                       </>                                                               
                                                                    ))
                                                                }
                                                                {
                                                                    item3.attributes.cuestionarios.data.map((item4)=>(
                                                                            <>
                                                                             <h2>cuestionarios</h2>
                                                                             <h2>{item4.attributes.Titulo}</h2>
                                                                            </>                                                               
                                                                         ))
                                                                }

                                                            </GridLayout>
                                                       
                                
                                                        </Box>
                                                      </AccordionContent>
                                                    </Accordion>
                                                 ))}
                                                </>
                                            ):(
                                                <></>
                                            )
                                        }
                                      </Box>
                                    </AccordionContent>
                                  </Accordion>
                                   
                               }




                           </Box>
                         </AccordionContent>
                       </Accordion>
                            </>
                        ):(
                            <></>
                        )

                }
             
            </AccordionGroup>
          </Box>
        </div>;
        </>
    )
}


export default ListarItems