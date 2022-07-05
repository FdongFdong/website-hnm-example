import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams(); //쿼리 가져오기

  useEffect(() => {
    getProducts();
  }, [query]);
  const getProducts = async () => {
    let serchQuery = query.get('q') || ''; // 없으면 빈값
    let url = `https://my-json-server.typicode.com/fdongfdong/website-hnm-example/products?q=${serchQuery}`; // 모든 product 가져오기
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log(productList);
  };
  return (
    <div className="products-card">
      <Container>
        <Row>
          {productList.map((menu, key) => {
            return (
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
