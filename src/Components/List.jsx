import React from 'react'

const List = () => {
    let List = [
        {
            id: 1,
            prodductName: "Laptop",
            price: 50000,
        },
        {
            id: 2,
            prodductName: "Andriod Phone",
            price: 30000,
        },
        {
            id: 3,
            prodductName: "Iphone",
            price: 90000,
        },
        {
            id: 4,
            prodductName: "Television",
            price: 40000,
        },
        {
            id: 5,
            prodductName: "Headphones",
            price: 10000,
        }
    ]
    return (
        <>
            <h1>List of Prducts</h1>
            {List.map((product) => {
                return (
                    <div key={product.id}>
                        <span>{product.prodductName} - </span>
                        <span>{product.price}</span>
                    </div>
                )
            })
            }
        </>
    )
}

export default List
