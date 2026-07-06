import React from 'react'
import {useState, useEffect} from 'react';

// imports from Amplify library
import {API, graphqlOperation} from 'aws-amplify';
// import query definition
import {listProducts as ListProducts} from '../../graphql/queries'

import './index.scss';

const Products = () => {

    const [productState,
        setProducts] = useState({products:[]})


    useEffect(() => {
        
        async function getProd() {
            try {
                const productData = await API.graphql(graphqlOperation(ListProducts))
                console.log('productData:', productData)
                setProducts({
                    products: productData.data.listProducts.items
                })
            } catch (err) {
                console.log('error fetching products...', err)
            }
        }
        getProd()
    }, [])


    return <div className='products'>
        <section className='billboard'>
            <div className='background'></div>
            <div className='container'>
                <div className='billboard_textbox'>
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">products, mate</h1>
                    <h2
                        data-aos="fade-up"
                        data-aos-delay="2000"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">Coming Soon</h2>

                </div>
            </div>
        </section>
        <div className='main-body'>
            <section className='intro'>
                <h3>
                    this is about the products you gotta buy.. gracias</h3>

            </section>
            <section className="products">
            { productState.products.map((product, index)=>{
                    return(
                        <div className="product-item" key={index}>
                            <img src={product.image} alt={`${product.name}`} />
                            <h5>{product.name}</h5>
                            <div>{product.categories}</div>
                            <p>{product.description}
                                <span>{product.price}</span>
                            </p>
                        </div>
                    )
                })
            }
            </section>
        </div>
    </div>

}

export default Products
