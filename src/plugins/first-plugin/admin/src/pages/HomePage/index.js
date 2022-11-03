/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import Prueba from '../../components/prueba';
import  Lista from '../../components/Lista';
import Curso from '../../components/Cursos';
import { Tabs, Tab, TabGroup, TabPanels, TabPanel } from '@strapi/design-system/Tabs';
import { Box } from '@strapi/design-system/Box';

const HomePage = () => {
  return (

    
   <div>
     <Box padding={8} background="primary100">
      <TabGroup label="Some stuff for the label" id="tabs" onTabChange={selected => console.log(selected, 'que es esto ')}>
        <Tabs>
          <Tab>Crear Arbol </Tab>
          <Tab>Ver Categorias</Tab>
          <Tab>Crear Cursos</Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
                  <Prueba/>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
             <Lista/>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box color="neutral800" padding={4} background="neutral0">
              <Curso/>
            </Box>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Box>
     
   </div>
  );
};

export default HomePage;
