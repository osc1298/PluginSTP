import React, {useState} from 'react'
import { Select, Option } from '@strapi/design-system/Select';
import { Stack } from '@strapi/design-system/Stack';
import { GridLayout } from '@strapi/design-system/Layout';
import { Button } from '@strapi/design-system/Button';
import { Box } from '@strapi/design-system/Box';
import { FieldLabel } from '@strapi/design-system/Field';



function Seleccionar({padres, setValores, valores})
{
    const [error, toggleError] = useState();
    const [disabled, toggleDisabled] = useState();

return(
    <>
    <GridLayout>
    <Button onClick={()=>{setValores({...valores, soloTemarios:true})}}>Añadir solo temarios</Button>
    <Button onClick={()=>{setValores({...valores, soloCuestionarios:true})}}>Añadir solo cuestionarios</Button>
    </GridLayout>

    <Select 
    id="select1" 
    label="Elija una Categoria general"  
    required 
    placeholder="Categoria General" 
    hint="Description line" 
    onClear={() => setValores({...valores, value:undefined})} 
    clearLabel="Clear the meal" 
    error={error} 
    value={valores.value} 
    onChange={(e)=>{setValores({...valores, value:e})}} 
    disabled={disabled} >
              {
                padres.map((item, index)=>(
                  <Option value={index} id={item.id} >{item.attributes.Titulo}</Option>
                ))
              }

          </Select>
          {
            valores.value != undefined && padres[valores.value].attributes.categoria_2_s.data.length != 0 ? (
              <>
                <Stack spacing={11}>
          <Select id="select1"
           label="Elija una subcategoria"
             required 
             placeholder="Hijos"
             hint="Description line"
             onClear={() => setValores({...valores, value1:undefined})} 
             clearLabel="Clear the meal"
             error={error}
             value={valores.value1}
             onChange={(e)=> setValores({...valores, value1:e})}
             disabled={disabled} >
              {
               padres[valores.value].attributes.categoria_2_s.data.map((items, index)=>(
                  <Option value={index} id={items.id} >{items.attributes.Titulo}</Option>
                ))
             }

          </Select>
          </Stack>
              { 
          valores.value != undefined && valores.value1 != undefined &&(padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data.length) != 0 ?
              (<>
                  {
                     padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data.length > 0 ? (
                       <>
                       <Stack spacing={11}>
                <Select id="select1" 
                label="Elija un Nieto" 
                required
                placeholder="Nietos"
                hint="Description line"
                onClear={() => setValores({...valores, value2:undefined})}
                clearLabel="Clear the meal"
                error={error}
                value={valores.value2}
                onChange={(e)=>{setValores({...valores, value2:e})}} 
                disabled={disabled} >
                  {
                    padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data.map((items1, index)=>(
                <Option value={index} id={items1.id} >{items1.attributes.Titulo}</Option>
                    ))
                  }
                </Select>
              </Stack>
                    { 
                    valores.value2 != undefined  &&(padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data[valores.value2].length) != 0 ?
                    (<>
                        <Box padding={8} background="neutral100">
                        <FieldLabel>Seleccione temarios o apuntes</FieldLabel>
                          <GridLayout>
                  { 
                  <Select id="select1"
                   label="Elija un Temario"
                   required 
                   placeholder="Nietos" 
                   hint="Description line" 
                   onClear={() => setValores({...valores, value3:undefined})} 
                   clearLabel="Clear the meal"
                   error={error}
                   value={valores.value3} 
                   onChange={(e)=>{setValores({...valores, value3:e})}} 
                   disabled={disabled} >
                  {
                   padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data[valores.value2].attributes.temarios.data.map((items3, index)=>(
                <Option value={index} id={items3.id} >{items3.attributes.Titulo}</Option>
                    ))
                  }
                </Select> 
                  }
                   <Select id="select1"
                    label="Elija un Cuestionario"
                    required 
                    placeholder="Nietos"
                    hint="Description line" 
                    onClear={() => setValores({...valores, value4:undefined})} 
                    clearLabel="Clear the meal" 
                    error={error} 
                    value={valores.value4} 
                    onChange={(e)=>{setValores({...valores, value4:e})}} 
                    disabled={disabled} >
                  {
                   padres[valores.value].attributes.categoria_2_s.data[valores.value1].attributes.categoria_3_s.data[valores.value2].attributes.cuestionarios.data.map((items4, index)=>(
                <Option value={index} id={items4.id} >{items4.attributes.Titulo}</Option>
                    ))
                  }
                </Select>
                       </GridLayout>
                    </Box>
                    </>):
                    (<>
                    <h1>No hay nada </h1>
                    </>) 



                    }


                       </>
                     ):(
                       <>No tiene elementos</>
                     )
                  }

                    </>):(<>
                      <h1>no tiene nietos</h1>
                    </>)

              }
                
              </>
            ):(
              <>
              <h1>Este padre no tiene hijos</h1>
              </>
            )
          }
    
    </>
)


}


export default Seleccionar