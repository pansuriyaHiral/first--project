import React from 'react';
import Layout from '../components/Layout.js';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: "center",
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign: "justify",
          fontWeight: "lighter",

        },
        "@media (max-width-600px)": {
          mt: 0,
          "$ h4": {
            fontSize: "1.3rem",
          }
        }
      }}>
        <Typography variant='h4'>
          Welcome To My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error at dolores nam voluptates praesentium necessitatibus atque vitae minima expedita, aspernatur placeat, qui soluta deleniti quo assumenda minus voluptatem veritatis sapiente nesciunt ipsa sequi et officia illum? Doloribus enim neque sed dolores modi sunt maiores omnis numquam ratione fuga, ipsam tenetur consequuntur ab inventore ducimus odit. Ipsa tempora dolores asperiores minima id, voluptatem delectus recusandae quidem blanditiis iusto quibusdam omnis sequi accusamus amet eveniet, autem reiciendis nulla? Ratione fuga harum corrupti nisi commodi cumque dolor quibusdam molestiae excepturi possimus qui officia nesciunt eius cupiditate consequuntur voluptatem temporibus, ad aliquid provident!

        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quibusdam, error at quod dolorem nisi debitis voluptatum similique. Possimus dolorem blanditiis dolorum nihil facere delectus quos autem asperiores cupiditate, magnam eum itaque provident veritatis, voluptate architecto. Ipsum aliquid dolores possimus dolor recusandae porro error corrupti voluptatibus repellendus nihil. Dolorum pariatur quis amet illum accusantium doloribus praesentium esse quod ab sed. Quas ea, delectus, sapiente totam, alias iste soluta eaque officiis quia at illum eveniet! Quibusdam explicabo, recusandae repellat, velit fugiat at voluptatum, et ut maxime voluptatem ullam quod exercitationem iure laborum ab facilis rem impedit sequi sapiente placeat soluta? Rerum!
        </p>
      </Box>
    </Layout>
  )
}

export default About;
