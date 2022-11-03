import React, {useState, useEffect} from 'react';
import { Field, FieldLabel, FieldHint, FieldError, FieldInput, FieldAction } from '@strapi/design-system/Field';
import { Textarea } from '@strapi/design-system/Textarea';
import { Button } from '@strapi/design-system/Button';
import { Box } from '@strapi/design-system/Box';
import Seleccionar from './elements/selectores';
import axios from 'axios';
const qs = require('qs');

function Curso(){
    const [content, setContent] = useState('');
    const [titulo, setTitulo] = useState('')

    const [valores, setValores] = useState({
        value: undefined,
        value1: undefined,
        value2: undefined,
        value3:undefined,
        value4:undefined,
        soloTemarios:false,
        soloCuestionarios:false
    });

    const [cargarValores, setCargarValores] = useState([]);

    const [padres, setPadres] = useState([]);
    let  cargaDeIDTemario =[]
    let cargaDeIDCuestionario = []

    const query = qs.stringify({
      populate: {
          categoria_2_s: {
          populate: {
            categoria_3_s:{
              populate : {
                temarios: {
                  populate : "*",
                },
                cuestionarios : {
                  populate:"*"}
              }
            }
          },
        }
      }
    }, {
      encodeValuesOnly: true, // prettify URL
    });


  useEffect(async ()=>
  {
      const response = await axios.get('http://localhost:1337/api/categorias?'+query)
      setPadres(response.data.data)
  },[])
  


  async function enviarDatos()
  {
    //aqui si solo selecciono el padre
   if(value != undefined && value1 == undefined && value2 == undefined)
   {
    let variable1 = Object.values(padres[value-1])
    console.log(variable1[1],' que es esto')
    variable1[1].categoria_2_s.data.map((item)=>{
        
          
                item.attributes.categoria_3_s.data.map((item3)=>{

                  item3.attributes.temarios.data.map((item4)=>{
                       
                          cargaDeIDTemario.push(item4.id);
                  }),
                  item3.attributes.cuestionarios.data.map((item5)=>{
                 
                    cargaDeIDCuestionario.push(item5.id);
            })
                })
          })

      


    await axios.post('http://localhost:1337/api/cursos',{data:{
      titulo: titulo,
      Descripcion: content,
      temarios: cargaDeIDTemario,
      cuestionarios: cargaDeIDCuestionario,
    }}).then((res)=>{console.log(res)});
   }

   //Aqui es si selecciono un hijo y quiero todos los nietos 
   if(value != undefined && value1 != undefined && value2 == undefined)
   {
    
     let variable = Object.values(padres[value-1].attributes.categoria_2_s.data[value1-1])
    // let variable = padres[value-1].attributes.categoria_2_s.data[value1-1]

          variable[1].categoria_3_s.data.map((item)=>{
                     
              item.attributes.temarios.data.map((item2)=>{
                        
                        cargaDeIDTemario.push(item2.id);
                }),
                item.attributes.cuestionarios.data.map((item2)=>{
                
                  cargaDeIDCuestionario.push(item2.id);
          })
          })

     


    await axios.post('http://localhost:1337/api/cursos',{data:{
      titulo: titulo,
      Descripcion: content,
      temarios: cargaDeIDTemario,
      cuestionarios: cargaDeIDCuestionario,
    }}).then((res)=>{console.log(res)});


   }

   /*aqui es si se cumple todos los valores*/ 
   if(value != undefined && value1 != undefined && value2 != undefined)
   {
    
     let variable2 = Object.values(padres[value-1].attributes.categoria_2_s.data[value1-1].attributes.categoria_3_s.data[value2-1])
    // let variable = padres[value-1].attributes.categoria_2_s.data[value1-1]
          console.log(variable2, ' que tengo')
          
                     
            variable2[1].temarios.data.map((item2)=>{
                        
                        cargaDeIDTemario.push(item2.id);
                }),
                variable2[1].cuestionarios.data.map((item2)=>{
                
                  cargaDeIDCuestionario.push(item2.id);
          })
          

     


    await axios.post('http://localhost:1337/api/cursos',{data:{
      titulo: titulo,
      Descripcion: content,
      temarios: cargaDeIDTemario,
      cuestionarios: cargaDeIDCuestionario,
    }}).then((res)=>{console.log(res)});


   }

  }



  /*
  Aqui se guardan el objeto con los valores
  */ 

  function añadirItems()
  {
    cargarValores.push(valores);
    setValores({
      value: undefined,
      value1: undefined,
      value2: undefined,
      value3:undefined,
      value4:undefined,
      soloTemarios:false,
      soloCuestionarios:false
  })

  }
   

    return(
        <>
       <Box padding={4} borderColor="danger600">
            <Field name="Titulo">
                
                <FieldLabel>Titulo de Curso</FieldLabel>
                     <FieldInput type="text" placeholder="Nombre del curso" name="titulo" value={titulo} onChange={(e) => {setTitulo(e.target.value)}} />
               
            </Field>
            <FieldLabel>Descripcion</FieldLabel>
            <Textarea placeholder="This is a content placeholder" label="Content" name="content" value={content} hint="Description line"  onChange={e => setContent(e.target.value)} >  
          </Textarea>
          <FieldLabel>Seleccione categorias</FieldLabel>
          <Seleccionar padres={padres} setValores={setValores} valores={valores}/>
          
        <Button onClick={enviarDatos}>Añadir</Button>
         </Box>
        </>
    )
}


export default Curso;