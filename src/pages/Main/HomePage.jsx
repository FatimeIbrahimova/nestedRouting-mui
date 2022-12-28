
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
      fetch("https://northwind.vercel.app/api/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
  }, []);
  return (
    <>
    {products?.map((data, key) => {
        return (
            // <Row gutter={4}>
            //     <Col span={8}>
            //         <Card style={{
            //             width: 300
            //         }}>
            //             <div key={data.name}>
            //                 <p>{data.name}</p>
            //                 <p>{data.id}</p>
            //                 <p>{data.unitsInStock}</p>
            //                 <p>{data.quantityPerUnit}</p>
            //             </div>
            //         </Card>
            //     </Col>
            // </Row>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        )
    })}
</>
  )
}

export default HomePage