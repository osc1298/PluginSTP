import React, {useEffect, useState} from 'react';
import { Button } from '@strapi/design-system/Button';
import { Typography } from '@strapi/design-system/Typography';
import { Box } from '@strapi/design-system/Box';
import { Checkbox } from '@strapi/design-system/Checkbox';
import { Accordion, AccordionToggle, AccordionContent, AccordionGroup } from '@strapi/design-system/Accordion';

import { Radio, RadioGroup } from '@strapi/design-system/Radio';
import axios from 'axios';


const qs = require('qs');




function Prueba(){


        const [padre, setPadre] = useState([]);
        const [hijos, setHijos] = useState([]);
        const [nietos, setNietos] = useState([]);
        const [expandedID, setExpandedID] = useState(null);
        const [selected, setSelected] = useState();



        useEffect(async ()=>
        {
            const response = await axios.get('http://localhost:1337/api/categorias')
          
    
    
            
            setPadre(response.data.data)
            
        },[])




        useEffect(async ()=>
        {
            const response = await axios.get('http://localhost:1337/api/categoria-2s')
            console.log(response, 'que me trae esto');
    
    
            
            setHijos(response.data.data)
            
        },[])



        useEffect(async ()=>
        {
            const response = await axios.get('http://localhost:1337/api/categoria-3s')
            console.log(response, 'que me trae esto');
    
    
            
            setNietos(response.data.data)
            
        },[])

        const handleToggle = id => () => {
            setExpandedID(s => s === id ? null : id);
          };

   



    console.log(padre, 'que me trae este estado');

    return(
        <>
          <div>
              <h1>Crear arbol</h1>
              <Box padding={[11, 6, 1]}  shadow="filterShadow">
                <Typography textColor="neutral0">Armar listado</Typography>
                <AccordionGroup>
                <Accordion expanded={expandedID === 'acc-1'} onToggle={handleToggle('acc-1')} id="acc-1" size="S">
                <AccordionToggle   title="Categorias Padres" togglePosition="left" />
                <AccordionContent>
                  <Box padding={3}>
                        {
                            padre.map((item)=>(
                                <RadioGroup labelledBy="trophy-champions" onChange={e => setSelected(e.target.value)} value={selected} name="meal">
                                <Radio value={item.attributes.Titulo}>{item.attributes.Titulo}</Radio>
                              </RadioGroup>
                            ))
                        }
                  </Box>
                </AccordionContent>
              </Accordion>
              </AccordionGroup>
              <AccordionGroup>
                <Accordion expanded={expandedID === 'acc-1'} onToggle={handleToggle('acc-1')} id="acc-1" size="S">
                <AccordionToggle   title="Categorias hijos" togglePosition="left" />
                <AccordionContent>
                  <Box padding={3}>
                        {
                            hijos.map((item)=>(
                            <Checkbox>{item.attributes.Titulo}</Checkbox>)
                            )
                        }
                  </Box>
                </AccordionContent>
              </Accordion>
              </AccordionGroup>
              <AccordionGroup>
                <Accordion expanded={expandedID === 'acc-1'} onToggle={handleToggle('acc-1')} id="acc-1" size="S">
                <AccordionToggle   title="Categorias Nietos" togglePosition="left" />
                <AccordionContent>
                  <Box padding={3}>
                        {
                            nietos.map((item)=>(
                            <Checkbox>{item.attributes.Titulo}</Checkbox>)
                            )
                        }
                  </Box>
                </AccordionContent>
              </Accordion>
              </AccordionGroup>

              <Button>Guardar</Button>
    </Box>
          </div>
               


                
                

            
        </>
    )
}


export default Prueba;